import { useState, useRef } from "react";
import { MdAttachFile } from "react-icons/md";
import { PiCameraLight } from "react-icons/pi";
import { LuSendHorizonal } from "react-icons/lu";
import Webcam from "react-webcam";
import axios from "axios"; // Import axios for API requests

const AskQuestion = () => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [inputText, setInputText] = useState("");
  const [file, setFile] = useState(null);
  const [cameraMode, setCameraMode] = useState(false);
  const [pastQA, setPastQA] = useState([]);
  const [preferredAnswer, setPreferredAnswer] = useState(""); // For handling different input types
  const [capturedImage, setCapturedImage] = useState(""); // State to hold captured image

  const chatEndRef = useRef(null); // Reference to the end of the chat
  const webcamRef = useRef(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setInputText(selectedFile.name); // Set the input text to the file name
  };

  const handleSend = async () => {
    let formData = new FormData();

    // Determine what the full question is based on inputs
    let fullQuestion = "";
    if (subject || description) {
      fullQuestion = `Subject: ${subject}\nDescription: ${description}\n`;
    }
    if (inputText) {
      fullQuestion += `Question: ${inputText}`;
    }

    // Append necessary data to formData
    formData.append("question", fullQuestion);
    if (file) {
      formData.append("file", file); // Image/Audio/Video file
    }
    if (capturedImage) {
      // If an image was captured, append it as well
      formData.append("capturedImage", capturedImage);
    }

    try {
      const response = await axios.post(
        "https://academy-gpt.onrender.com/chat",
        {
          prompt: fullQuestion,
        }
      );

      setPastQA((prev) => [
        ...prev,
        { question: fullQuestion, answer: response.data.message },
      ]);

      // Clear the input
      setInputText("");
      setFile(null);
      setCapturedImage(""); // Reset captured image state
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  };

  const handleCaptureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc); // Set captured image to state
    setCameraMode(false); // Close the camera mode
    setInputText("Captured Image"); // Set input text as "Captured Image"
  };

  return (
    <>
      <form>
        <div className="grid grid-rows-6 gap-4">
          {/* Subject and Description */}
          <div className="row-span-2 space-y-3">
            <input
              className="w-full h-10 border-b-2 pl-2 border-black/70 focus:outline-none"
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject (optional)"
            />

            <textarea
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description (optional)"
              className="w-full border-2 drop-shadow-md focus:outline-none pl-2 py-2"
            />
          </div>

          {/* Past Questions and Answers */}
          <div className="overflow-y-auto row-span-4 h-full p-2 border-2 rounded-md">
            {pastQA.map((qa, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold text-lg">Your Question:</h3>
                <p>{qa.question}</p>
                <h3 className="font-semibold text-lg">AI Answer:</h3>
                <p>{qa.answer}</p>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {cameraMode && (
            <div className=" justify-center mt-4">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
              />
              <button
                className="bg-black text-white p-2 rounded-lg"
                onClick={handleCaptureImage}>
                Capture Image
              </button>
            </div>
          )}

          {/* Bottom Input Section with Icons */}
          <div className="row-span-1 mt-2 w-full">
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
                    onClick={handleSend}
                    checked={preferredAnswer === "aiAnswer"}
                    onChange={(e) => setPreferredAnswer(e.target.value)}
                  />
                  <label htmlFor="aiAnswer">AI</label>
                </div>
              </div>
            </div>

            <div className="flex justify-between p-2 border-2 mx-3 rounded-full items-center">
              <div className="flex space-x-4">
                <label htmlFor="fileInput">
                  <MdAttachFile className="text-xl md:text-2xl lg:text-3xl cursor-pointer" />
                </label>
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*" // Ensures that only images are accepted
                  onChange={handleFileChange}
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
                name="text"
                id="text"
                placeholder="Ask your question..."
                value={inputText}
                onChange={handleInputChange}
              />
              <div className="bg-primary text-white rounded-3xl p-2 cursor-pointer">
                <LuSendHorizonal
                  className="text-xl md:text-2xl lg:text-3xl"
                  onClick={handleSend}
                />
              </div>
            </div>

            {/* Webcam Capture */}
          </div>
        </div>
      </form>
    </>
  );
};

export default AskQuestion;
