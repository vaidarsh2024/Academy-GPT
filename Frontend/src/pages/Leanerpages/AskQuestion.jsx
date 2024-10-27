import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { PiCameraLight } from "react-icons/pi";
import { LuSendHorizonal } from "react-icons/lu";
import Webcam from "react-webcam";
import { IoMdAttach } from "react-icons/io";

function AskQuestion() {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [inputText, setInputText] = useState("");
  const [file, setFile] = useState(null);
  const [cameraMode, setCameraMode] = useState(false);
  const [pastQA, setPastQA] = useState([]);
  const [preferredAnswer, setPreferredAnswer] = useState("aiAnswer");
  const [capturedImage, setCapturedImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const [userLanguage, setUserLanguage] = useState("en");

  const chatEndRef = useRef(null);
  const webcamRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Detect user's browser language
    const detectLanguage = () => {
      const browserLang = navigator.language || navigator.userLanguage;
      setUserLanguage(browserLang.split("-")[0]); // Get primary language code (e.g., 'en' from 'en-US')
    };

    detectLanguage();
  }, []);

  const cleanResponse = (text) => {
    // Remove backslashes and carets from the response
    return text.replace(/[\\^]/g, "");
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setInputText(selectedFile.name);
  };

  const formatTextOnlyHistory = (history) => {
    return history
      .filter((qa) => !qa.image)
      .map((qa) => ({
        question: qa.question,
        answer: qa.answer,
      }));
  };

  const handleSend = async () => {
    if (!inputText.trim() && !file && !capturedImage) return;

    setIsLoading(true);
    const formData = new FormData();

    let fullQuestion = "";
    if (subject || description) {
      fullQuestion = `${subject ? `Subject: ${subject}\n` : ""}${
        description ? `Description: ${description}\n` : ""
      }`;
    }
    if (inputText) {
      fullQuestion += `Question: ${inputText}`;
    }

    try {
      let response;

      if (file || capturedImage) {
        if (file) formData.append("image", file);
        if (capturedImage) {
          const blob = await fetch(capturedImage).then((r) => r.blob());
          formData.append("image", blob, "captured-image.jpg");
        }
        formData.append("question", fullQuestion);
        formData.append("language", userLanguage);

        response = await axios.post(
          "https://academy-gpt.onrender.com/api/chat-with-image",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        setConversationId(null);
      } else {
        const textOnlyHistory = formatTextOnlyHistory(pastQA);
        const relevantHistory = conversationId ? textOnlyHistory : [];

        response = await axios.post(
          "https://academy-gpt.onrender.com/api/chat",
          {
            question: fullQuestion,
            preferredAnswer: preferredAnswer,
            chatHistory: relevantHistory,
            conversationId: conversationId,
            language: userLanguage,
          }
        );

        setConversationId(null);
      }

      const cleanedResponse = cleanResponse(response.data.response);

      const newQA = {
        question: fullQuestion,
        answer: cleanedResponse,
        image: file || capturedImage || null,
        timestamp: new Date().toISOString(),
        conversationId: conversationId,
        subject,
        description,
      };

      setPastQA((prev) => [...prev, newQA]);

      setInputText("");
      setFile(null);
      setCapturedImage("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("Error details:", error.response?.data || error.message);
      alert(
        "An error occurred while processing your request. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };
  const handleCaptureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setCameraMode(false);
    setInputText("Captured Image");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Function to start a new conversation
  const startNewConversation = () => {
    setConversationId(null);
    setSubject("");
    setDescription("");
  };

  return (
    <div className=" max-h-screen">
      <div className="mx-auto bg-white rounded-lg shadow-md">
        <form className="" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-rows-4 gap-4">
            {/* Subject and Description */}
            <div className="row-span-3 space-y-3">
              <div className="flex justify-between items-center">
                <input
                  className="w-full h-10 border-b-2 pl-2 border-black/70 focus:outline-none"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject (optional)"
                />
                {conversationId && (
                  <button
                    type="button"
                    onClick={startNewConversation}
                    className="ml-2 px-3 py-1 bg-gray-200 rounded-md text-sm">
                    New Conversation
                  </button>
                )}
              </div>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description (optional)"
                className="w-full border-2 drop-shadow-md focus:outline-none pl-2 py-2"
              />

              <div className="overflow-y-auto h-full  p-2 border-2 rounded-md">
                {pastQA.map((qa, index) => (
                  <div key={index} className="">
                    <div className="flex items-start space-x-2">
                      <div className="bg-primary/40 p-3 rounded-lg max-w-[90%]">
                        <p className="font-semibold text-sm text-gray-600">
                          Your Question:
                        </p>
                        <p>{qa.question}</p>
                        {qa.image && (
                          <img
                            src={
                              typeof qa.image === "string"
                                ? qa.image
                                : URL.createObjectURL(qa.image)
                            }
                            alt="Attached"
                            className="mt-2 w-40 h-40 rounded"
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex items-start space-x-2 mb-2">
                      <div className="bg-gray-100 p-3 rounded-lg max-w-[100%]">
                        <p className="font-semibold text-sm text-gray-600">
                          AI Answer:
                        </p>
                        <p>{qa.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
            </div>

            {/* Chat History */}

            {/* Camera Mode */}
            {cameraMode && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-4 rounded-lg">
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    className="mb-4"
                  />
                  <div className="flex justify-between">
                    <button
                      type="button"
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                      onClick={handleCaptureImage}>
                      Capture
                    </button>
                    <button
                      type="button"
                      className="bg-gray-500 text-white px-4 py-2 rounded"
                      onClick={() => setCameraMode(false)}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Input Section */}
            <div className="row-span-1 mt-32 w-full">
              <div className="flex items-center space-x-5 px-2 pb-2">
                <p className="text-lg lg:text-xl xl:text-2xl font-semibold">
                  Preferred Answer
                </p>
                <div className="flex space-x-5 my-auto">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="preferredAnswer"
                      value="onlineClassroom"
                      id="onlineClassroom"
                      checked={preferredAnswer === "onlineClassroom"}
                      onChange={(e) => setPreferredAnswer(e.target.value)}
                    />
                    <label htmlFor="onlineClassroom">Online Classroom</label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="preferredAnswer"
                      value="aiAnswer"
                      id="aiAnswer"
                      checked={preferredAnswer === "aiAnswer"}
                      onChange={(e) => setPreferredAnswer(e.target.value)}
                    />
                    <label htmlFor="aiAnswer">AI</label>
                  </div>
                </div>
              </div>

              <div className="flex justify-between p-2 border-2 mx-3 rounded-full items-center">
                <div className="flex space-x-4">
                  <label htmlFor="fileInput" className="cursor-pointer">
                    <IoMdAttach className="text-xl md:text-2xl lg:text-3xl cursor-pointer" />
                  </label>
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="hidden"
                  />

                  <PiCameraLight
                    className="text-xl md:text-2xl lg:text-3xl cursor-pointer"
                    onClick={() => setCameraMode(true)}
                  />
                </div>

                <input
                  className="w-full mx-3 py-2 rounded-3xl pl-4 focus:outline-none"
                  type="text"
                  placeholder="Ask your question..."
                  value={inputText}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                />

                <button
                  type="button"
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-primary text-white rounded-3xl p-2 cursor-pointer disabled:bg-gray-400">
                  <LuSendHorizonal className="text-xl md:text-2xl lg:text-3xl" />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AskQuestion;
