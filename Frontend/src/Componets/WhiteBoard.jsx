import React, { useState, useRef } from "react";
import { Excalidraw, WelcomeScreen, MainMenu } from "@excalidraw/excalidraw";
import { FaTh, FaExpand, FaCompress } from "react-icons/fa";
import { MdOutlineScreenShare, MdStopScreenShare } from "react-icons/md";


const WhiteBoard = () => {
    const containerRef = useRef(null);
    const [gridMode, setGridMode] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [peer, setPeer] = useState(null);
    const [isSharingScreen, setIsSharingScreen] = useState(false);

    const toggleGridBackground = () => {
        setGridMode((prevMode) => !prevMode);
    };

    const startScreenShare = async () => {
        try {
            const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
            const newPeer = new Peer({ initiator: true, stream });

            newPeer.on('signal', (data) => {
                // Send signal data to the other peer via signaling server
                console.log('Signal data', data);
            });

            newPeer.on('connect', () => {
                console.log('Peer connected');
            });

            newPeer.on('stream', (remoteStream) => {
                // Handle receiving the remote stream
                const video = document.createElement('video');
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
            } else if (containerRef.current.mozRequestFullScreen) { // Firefox
                containerRef.current.mozRequestFullScreen();
            } else if (containerRef.current.webkitRequestFullscreen) { // Chrome, Safari, Opera
                containerRef.current.webkitRequestFullscreen();
            } else if (containerRef.current.msRequestFullscreen) { // IE/Edge
                containerRef.current.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { // Firefox
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { // IE/Edge
                document.msExitFullscreen();
            }
        }
        setIsFullscreen(!isFullscreen);
    };

    return <>
        <div ref={containerRef} style={{ height: "100vh", width: "100%" }}>
        <Excalidraw gridModeEnabled={gridMode} renderTopRightUI={() => (
                <div>
                    <button onClick={toggleGridBackground} style={{ padding: '8px', marginRight: '8px' }}>
                        {gridMode ? <FaTh style={{ color: '#007bff' }} /> : <FaTh />}
                    </button>
                    <button onClick={toggleFullscreen} style={{ padding: '8px' }}>
                        {isFullscreen ? <FaCompress style={{ color: '#007bff' }} /> : <FaExpand />}
                    </button>
                    <button onClick={isSharingScreen ? stopScreenShare : startScreenShare} style={{ padding: '8px' }}>
                        {isSharingScreen ? <MdStopScreenShare style={{ color: '#e74c3c' }} /> : <MdOutlineScreenShare />}
                    </button>
                </div>
                )}>
            <WelcomeScreen>
                <WelcomeScreen.Hints.ToolbarHint>
                  <p> ToolBar Hints </p>
                </WelcomeScreen.Hints.ToolbarHint>
                <WelcomeScreen.Hints.MenuHint />
                <WelcomeScreen.Hints.HelpHint />
            </WelcomeScreen>
            <MainMenu>
                <MainMenu.DefaultItems.LoadScene/>
                <MainMenu.DefaultItems.Export />
                <MainMenu.DefaultItems.LiveCollaborationTrigger/>
                <MainMenu.DefaultItems.SaveAsImage/>
                <MainMenu.DefaultItems.ChangeCanvasBackground/>
                <MainMenu.DefaultItems.SaveToActiveFile/>
                <MainMenu.DefaultItems.ToggleTheme/>
                <MainMenu.DefaultItems.ClearCanvas/>
                <MainMenu.DefaultItems.Help/>
            </MainMenu>
        </Excalidraw>
        </div>
    </>
};

export default WhiteBoard;