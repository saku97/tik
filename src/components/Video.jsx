import React from "react";
import "./Video.css";

const Video = ({ src, username, caption }) => {
  return (
    <div className="video">
      <video className="video__player" src={src} loop autoPlay />
      <h4 className="video__username">{username}</h4>
      <p className="video__caption">{caption}</p>
    </div>
  );
};

export default Video;
