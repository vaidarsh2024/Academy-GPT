import React, { useEffect } from "react";
import ReactModal from "react-modal-resizable-draggable";
import "@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css";
// Adjust the path as necessary
import videoIcon from "../assets/Image/video-icon.png";
import useVideoSDK from "../hook/useVideoSdk";
import uitoolkit from "@zoom/videosdk-ui-toolkit";
const JoinMeetingModal = ({ modalIsOpen, handleModal }) => {
  const { setSessionContainer } = useVideoSDK(modalIsOpen, handleModal);

  useEffect(() => {
    const container = document.getElementById("sessionContainer");
    setSessionContainer(container);
  }, [setSessionContainer]);

  const handleClose = () => {
    uitoolkit.closeSession(sessionContainer);
    handleModal("close");
  };
  return (
    <div
      style={{
        zIndex: 10,
        // position: "absolute",
      }}
    >
      <ReactModal
        disableResize={true}
        isOpen={modalIsOpen}
        onRequestClose={() => handleClose()}
        className="flexible-modal"
      >
        <div className="header h-[80px] items-center w-full flex">
          <div className="icon h-[58px] w-[58px]">
            <img src={videoIcon} alt="video-icon" />
          </div>
          <div className="flex flex-col pl-[10px] ">
            <h5>Lesson 1st</h5>
            <h6 className="text-[#ACACAC]" style={{ fontSize: "13px" }}>
              June 12th, 2022 | 11:00 AM{" "}
            </h6>
          </div>
        </div>
        <div
          style={{ width: "746px", height: "471px" }}
          id="sessionContainer"
        ></div>
      </ReactModal>
    </div>
  );
};

export default JoinMeetingModal;
