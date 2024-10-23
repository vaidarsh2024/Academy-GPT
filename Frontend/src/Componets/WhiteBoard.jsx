import React, { useState, useRef, useEffect } from "react";
import {
  Excalidraw,
  excalidrawAPI,
  MainMenu,
  WelcomeScreen,
} from "@excalidraw/excalidraw";
import { ZoomToolBar } from "./ZoomToolBar";
import { ColorToolBar } from "./ColorToolBar";
import { TextFormatToolBar } from "./TextFormatToolBar";
import AudioTranscriber from "./audioTranscriber";
import { FaBars, FaUndo, FaRedo } from 'react-icons/fa';
import "./WhiteBoard.css";
import JoinMeetingModal from "./JoinMeetingModal";
import pencil from '../assets/Image/pencil.svg'; 

const WhiteBoard = () => {
  const containerRef = useRef(null);
  const [gridMode, setGridMode] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [peer, setPeer] = useState(null);
  const [isSharingScreen, setIsSharingScreen] = useState(false);
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [speechToText, setSpeechToText] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    if (!excalidrawAPI) {
      return;
    }
    // to open the library sidebar
    excalidrawAPI.updateScene({ appState: { openSidebar: "library" } });
  }, [excalidrawAPI]);

  const toggleDrawer = () => setCollapsed(!collapsed);

  const handleUndo = () => {
    console.log(excalidrawAPI);
    if (excalidrawAPI.history) {
      excalidrawAPI.history.clear();
    }
  };

  const handleRedo = () => {
    if (excalidrawAPI.history) {
      excalidrawAPI.history.clear();
    }
  };

  const startScreenShare = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      const newPeer = new Peer({ initiator: true, stream });

      newPeer.on("signal", (data) => {
        // Send signal data to the other peer via signaling server
        console.log("Signal data", data);
      });

      newPeer.on("connect", () => {
        console.log("Peer connected");
      });

      newPeer.on("stream", (remoteStream) => {
        // Handle receiving the remote stream
        const video = document.createElement("video");
        video.srcObject = remoteStream;
        video.play();
        document.body.appendChild(video); // Display remote video
      });

      setPeer(newPeer);
      setIsSharingScreen(true);
    } catch (err) {
      console.error("Error sharing screen:", err);
    }
  };

  const stopScreenShare = () => {
    if (peer) {
      peer.destroy();
      setPeer(null);
      setIsSharingScreen(false);
    }
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.mozRequestFullScreen) {
        // Firefox
        containerRef.current.mozRequestFullScreen();
      } else if (containerRef.current.webkitRequestFullscreen) {
        // Chrome, Safari, Opera
        containerRef.current.webkitRequestFullscreen();
      } else if (containerRef.current.msRequestFullscreen) {
        // IE/Edge
        containerRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        // Chrome, Safari, Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        // IE/Edge
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleBackgroundColor = (color) => {
    if (color === "grid") {
      setGridMode((prevMode) => !prevMode);
      return;
    }

    setBackgroundColor(color);

    if (excalidrawAPI) {
      excalidrawAPI.updateScene({
        appState: {
          ...excalidrawAPI.getAppState(),
          viewBackgroundColor: color,
        },
      });
    }
  };

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 10, 200)); // Maximum 200%
    excalidrawAPI.updateScene({
      appState: {
        zoom: zoomLevel,
      },
    });
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 10, 10)); // Minimum 10%
    excalidrawAPI.updateScene({
      appState: {
        zoom: zoomLevel,
      },
    });
  };

  const handleBold = () => {
    if (excalidrawAPI) {
      excalidrawAPI.updateScene({
        appState: {
          ...excalidrawAPI.getAppState(),
          elements: excalidrawAPI.getSceneElements().map((el) => {
            if (el.type === "text") {
              el.fontStyle = el.fontStyle === "bold" ? "normal" : "bold";
            }
            return el;
          }),
        },
      });
    }
  };

  const handleItalic = () => {
    if (excalidrawAPI) {
      excalidrawAPI.updateScene({
        appState: {
          ...excalidrawAPI.getAppState(),
          elements: excalidrawAPI.getSceneElements().map((el) => {
            if (el.type === "text") {
              el.fontStyle = el.fontStyle === "italic" ? "normal" : "italic";
            }
            return el;
          }),
        },
      });
    }
  };

  const handleFontSizeChange = (size) => {
    if (excalidrawAPI) {
      const newFontSize = size === "small" ? 14 : size === "medium" ? 18 : 22;
      excalidrawAPI.updateScene({
        ...excalidrawAPI.getAppState(),
        elements: excalidrawAPI.getSceneElements().map((el) => {
          if (el.type === "text") {
            el.fontSize = newFontSize;
          }
          return el;
        }),
      });
    }
  };

  const handleAlign = (alignment) => {
    if (excalidrawAPI) {
      excalidrawAPI.updateScene({
        appState: {
          ...excalidrawAPI.getAppState(),
          elements: excalidrawAPI.getSceneElements().map((el) => {
            if (el.type === "text") {
              el.textAlign = alignment;
            }
            return el;
          }),
        },
      });
    }
  };

  const updateScene = (text) => {
    if (excalidrawAPI) {
      const newElement = {
        type: "text",
        version: 1,
        versionNonce: Math.random(),
        isDeleted: false,
        id: `text-${Date.now()}`, // Unique ID for the text element
        text: text,
        x: 100,
        y: 100,
        fontSize: 20,
        textAlign: "center",
        verticalAlign: "center",
        strokeColor: "#000000",
      };

      excalidrawAPI.updateScene({
        elements: [newElement],
      });
    }
  };

  const handleTranscription = (transcript) => {
    console.log("Transcription:", transcript);
    setSpeechToText(transcript);
    // updateScene(transcript);
  };

  const handleModal = (action) => {
    if (action == "open") {
      setModalIsOpen(true);
      return;
    }
    setModalIsOpen(false);
    return;
  };

  return (
    <>
      <div
        className="whiteboard"
        ref={containerRef}
        style={{ height: "100vh", width: "100%" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "4rem",
            alignItems: "baseline",
            marginTop: '10rem',
            marginLeft: '2rem'
          }}
        >
          <ColorToolBar onChangeBackground={handleBackgroundColor} />
          <TextFormatToolBar
            onBold={handleBold}
            onItalic={handleItalic}
            onFontSizeChange={handleFontSizeChange}
            onAlign={handleAlign}
          />
          {/* <ZoomToolBar 
                    onZoomIn={handleZoomIn} 
                    onZoomOut={handleZoomOut} 
                    zoomLevel={zoomLevel}
                /> */}
          {modalIsOpen && (
            <JoinMeetingModal
              handleModal={handleModal}
              modalIsOpen={modalIsOpen}
            />
          )}
        </div>
        <Excalidraw
          excalidrawAPI={(api) => setExcalidrawAPI(api)}
          gridModeEnabled={gridMode}
          renderTopRightUI={() => (
            <div className="controlsUniqueContainer">
              <button className="mobileHamBudger" onClick={toggleDrawer} style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '10px' }}>
                <FaBars style={{ fontSize: '24px' }} />
              </button>
              {/* <button onClick={handleUndo} style={{ padding: "8px", margin: "0 4px" }}>
                            <FaUndo />
                        </button>
                        <button onClick={handleRedo} style={{ padding: "8px", margin: "0 4px" }}>
                            <FaRedo />
                        </button> */}
            <div className={`controlsUniqueContainer--right ${collapsed ? 'visible' : 'hidden'}`}>
                <button
                  onClick={toggleFullscreen}
                  style={{
                    padding: "10px",
                    backgroundColor: "#D2D0D0",
                    borderRadius: "3px",
                    marginLeft: "20px",
                  }}
                >
                  Video & Chat
                </button>
                <button
                  onClick={toggleFullscreen}
                  style={{
                    padding: "10px",
                    backgroundColor: "#D2D0D0",
                    borderRadius: "3px",
                    marginLeft: "20px",
                  }}
                >
                  Full Board
                </button>
                <button
                  onClick={() => handleModal("open")}
                  style={{
                    padding: "10px",
                    backgroundColor: "#D2D0D0",
                    borderRadius: "3px",
                    marginLeft: "20px",
                  }}
                >
                  Full Video
                </button>
              </div> 
              
              <button
                className="shareButton"
                onClick={isSharingScreen ? stopScreenShare : startScreenShare}
              >
                Share Screen
              </button>
            </div>
          )}
          isCollaborating={false}
        >
          <WelcomeScreen>
            <WelcomeScreen.Center>
              <WelcomeScreen.Center.Heading>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src={pencil} />
                <p style={{marginTop: '1rem'}}>Click AnyWhere To Start Drawing</p>
              </div>
                <div
                  style={{ color: "#000", position: "absolute", bottom: "0px" }}
                >
                  {speechToText}
                </div>
              </WelcomeScreen.Center.Heading>
            </WelcomeScreen.Center>
          </WelcomeScreen>
        </Excalidraw>
        <AudioTranscriber onTranscription={handleTranscription} />
      </div>
    </>
  );
};

export default WhiteBoard;
