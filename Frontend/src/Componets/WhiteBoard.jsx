import React, { useState } from "react";
import { Excalidraw, WelcomeScreen } from "@excalidraw/excalidraw";

const WhiteBoard = () => {
    const [gridMode, setGridMode] = useState(false);

    const toggleGridBackground = () => {
        setGridMode((prevMode) => !prevMode);
    };

    return <>
        <div style={{ height: "100vh", width: "100%" }}>
            <Excalidraw gridModeEnabled={gridMode} renderTopRightUI={() => (
                    <button onClick={toggleGridBackground} style={{ padding: '8px', marginRight: '8px' }}>
                        {gridMode ? "Disable Grid" : "Enable Grid"}
                    </button>
                )}><WelcomeScreen>
                <WelcomeScreen.Hints.ToolbarHint>
                  <p> ToolBar Hints </p>
                </WelcomeScreen.Hints.ToolbarHint>
                <WelcomeScreen.Hints.MenuHint />
                <WelcomeScreen.Hints.HelpHint />
              </WelcomeScreen></Excalidraw>
        </div>
    </>
};

export default WhiteBoard;