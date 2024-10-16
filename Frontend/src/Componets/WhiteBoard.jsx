import React, { useState } from "react";
import { Excalidraw, WelcomeScreen, MainMenu } from "@excalidraw/excalidraw";

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
                )}>
            <WelcomeScreen>
                <WelcomeScreen.Hints.ToolbarHint>
                  <p> ToolBar Hints </p>
                </WelcomeScreen.Hints.ToolbarHint>
                <WelcomeScreen.Hints.MenuHint />
                <WelcomeScreen.Hints.HelpHint />
            </WelcomeScreen>
            <MainMenu>
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