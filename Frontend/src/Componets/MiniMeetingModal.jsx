import React, { useEffect, useState } from "react";
import ReactModal from "react-modal-resizable-draggable";
import uitoolkit from "@zoom/videosdk-ui-toolkit";
import "@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css";
import { KJUR } from "jsrsasign";
import videoIcon from "../assets/Image/video-icon.png";
import Draggable from "react-draggable";
import useVideoSDK from "../hook/useVideoSdk";

const MiniMeetingModal = ({ modalIsOpen, handleModal, size }) => {
  const { setSessionContainer } = useVideoSDK(modalIsOpen, handleModal);

  useEffect(() => {
    const container = document.getElementById("sessionContainer");
    setSessionContainer(container);
  }, [setSessionContainer]);

  return (
    <Draggable>
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
    </Draggable>
  );
};

export default MiniMeetingModal;
