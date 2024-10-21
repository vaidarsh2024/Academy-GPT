import React, { useEffect, useState } from "react";
import ReactModal from "react-modal-resizable-draggable";
import uitoolkit from "@zoom/videosdk-ui-toolkit";
import "@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css";
import { KJUR } from "jsrsasign";
import videoIcon from "../assets/Image/video-icon.png";

const MiniMeetingModal = ({ modalIsOpen, handleModal, size }) => {
  let sessionContainer;

  useEffect(() => {
    getVideoSDKJWT();
    return () => {};
  }, [modalIsOpen]);

  function generateSignature() {
    const sessionName = "test";
    const role = 1;
    const iat = Math.round(new Date().getTime() / 1000) - 30;
    const exp = iat + 60 * 60 * 2;
    const oHeader = { alg: "HS256", typ: "JWT" };
    const sdkKey = "QoBIkPDyIP1LjScKDPKRX0uF3ivURvzdt8Fx";
    const sdkSecret = "Fgv4XY3fCWPdAoXGqvXj0zOLEGQ2wFRcIorM";
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
    const sdkJWT = KJUR.jws.JWS.sign("HS256", sHeader, sPayload, sdkSecret);
    console.log({ sdkJWT });

    return sdkJWT;
  }

  const config = {
    videoSDKJWT: "",
    sessionName: "test",
    userName: "React",
    // sessionPasscode: "123",
    // features: ["video", "audio", "settings", "users", "chat", "share"],
    options: { init: {}, audio: {}, video: {}, share: {} },
    virtualBackground: {
      allowVirtualBackground: true,
      allowVirtualBackgroundUpload: true,
      virtualBackgrounds: [
        "https://images.unsplash.com/photo-1715490187538-30a365fa05bd?q=80&w=1945&auto=format&fit=crop",
      ],
    },
  };
  function getVideoSDKJWT() {
    // Get the session container element
    sessionContainer = document.getElementById("sessionContainer");

    // Check if the element exists before trying to access its style property
    const joinFlowElement = document.getElementById("join-flow");
    if (joinFlowElement) {
      joinFlowElement.style.display = "none"; // Hide the join flow element
    }
    const token = generateSignature();
    config.videoSDKJWT = token;
    // Call the joinSession function
    joinSession(token);
  }
  function joinSession(token) {
    console.log("called joinSession");
    config.videoSDKJWT = token;
    if (sessionContainer) {
      uitoolkit.joinSession(sessionContainer, config);
      sessionContainer && uitoolkit.onSessionClosed(sessionClosed);
    }
  }

  const sessionClosed = () => {
    console.log("session closed");
    if (sessionContainer) {
      uitoolkit.closeSession(sessionContainer);
      handleModal("close");
    }

    // Get the element with ID "join-flow"
    const joinFlowElement = document.getElementById("join-flow");

    // Check if the element exists before trying to access its style property
    if (joinFlowElement) {
      joinFlowElement.style.display = "block";
    }
  };
  return (
    <div
      style={{
        zIndex: 99,
        position: "absolute",
        left: "75%",
        top: "30%",
        border: "1px solid gray",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          backgroundColor: "#D3443C",
          justifyItems: "center",
          fontSize: "26px",
        }}
      >
        <h3>Your Video is Abled</h3>
      </div>
      <div
        style={{ width: "301px", height: "188px" }}
        id="sessionContainer"
      ></div>
    </div>
  );
};

export default MiniMeetingModal;
