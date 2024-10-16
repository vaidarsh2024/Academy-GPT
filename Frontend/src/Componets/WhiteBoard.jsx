import React, { useState, useRef } from "react";
import { Excalidraw, WelcomeScreen, MainMenu } from "@excalidraw/excalidraw";

const WhiteBoard = () => {
    const containerRef = useRef(null);
    const [gridMode, setGridMode] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleGridBackground = () => {
        setGridMode((prevMode) => !prevMode);
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
                            {gridMode ? "Disable Grid" : "Enable Grid"}
                    </button>
                    <button onClick={toggleFullscreen} style={{ padding: '8px' }}>
                        {isFullscreen ? "Exit Fullscreen" : "Go Fullscreen"}
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