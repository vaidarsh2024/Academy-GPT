import { useEffect, useState } from "react";
import { KJUR } from "jsrsasign";
import uitoolkit from "@zoom/videosdk-ui-toolkit";

const useVideoSDK = (modalIsOpen, handleModal, isMiniModal) => {
  const [sessionContainer, setSessionContainer] = useState(null);
  const [controlContainer, setControlContainer] = useState(null);
  const [videoSDKJWT, setVideoSDKJWT] = useState("");

  useEffect(() => {
    console.log({ isMiniModal });
    if (isMiniModal) {
      if (modalIsOpen && sessionContainer && controlContainer) {
        getVideoSDKJWT();
      }
    }
    if (modalIsOpen && sessionContainer) {
      getVideoSDKJWT();
    }

    return () => {
      //   if (isMiniModal) observer.disconnect();
      if (sessionContainer) {
        uitoolkit.closeSession(sessionContainer);
        handleModal("close");
      }
    };
  }, [modalIsOpen, sessionContainer, controlContainer]); // Added sessionContainer to dependencies

  const generateSignature = () => {
    const sessionName = "test";
    const role = 1;
    const iat = Math.round(new Date().getTime() / 1000) - 30;
    const exp = iat + 60 * 60 * 2;
    const oHeader = { alg: "HS256", typ: "JWT" };
    const sdkKey = import.meta.env.VITE_ZOOM_SDK_KEY;
    const sdkSecret = import.meta.env.VITE_ZOOM_SDK_SECRET;
    const oPayload = {
      app_key: sdkKey,
      tpc: sessionName,
      role_type: role,
      version: 1,
      iat: iat,
      exp: exp,
    };
    const sHeader = JSON.stringify(oHeader);
    const sPayload = JSON.stringify(oPayload);
    return KJUR.jws.JWS.sign("HS256", sHeader, sPayload, sdkSecret);
  };

  const getVideoSDKJWT = () => {
    const token = generateSignature();
    setVideoSDKJWT(token);
    joinSession(token);
  };

  const joinSession = (token) => {
    if (sessionContainer) {
      const config = {
        videoSDKJWT: token,
        sessionName: "test",
        userName: "React",

        features: isMiniModal
          ? ["video"]
          : ["video", "audio", "settings", "users", "chat", "share"],
        options: { init: {}, audio: {}, video: {} },
        virtualBackground: {
          allowVirtualBackground: true,
          allowVirtualBackgroundUpload: true,
          virtualBackgrounds: [
            "https://images.unsplash.com/photo-1715490187538-30a365fa05bd?q=80&w=1945&auto=format&fit=crop",
          ],
        },
      };

      //   uitoolkit.showControlsComponent(controlContainer);
      uitoolkit.joinSession(sessionContainer, config);

      uitoolkit.onSessionJoined(sessionJoined);
      uitoolkit.onSessionClosed(sessionClosed);
    }
  };
  const sessionJoined = () => {
    console.log("session jodfadjklajf lk");
    uitoolkit.hideControlsComponent();
  };

  const sessionClosed = () => {
    if (sessionContainer) {
      uitoolkit.closeSession(sessionContainer);
      handleModal("close");
    }
  };

  return { setSessionContainer, setControlContainer, videoSDKJWT };
};

export default useVideoSDK;
