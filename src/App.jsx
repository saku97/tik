import React, { useState } from "react";
import axios from "axios";
import Header from "./components/header";
import Video from "./components/video";
import "./App.css";

const App = () => {
  const [videoSrc, setVideoSrc] = useState("");
  const [username, setUsername] = useState("");
  const [caption, setCaption] = useState("");

  const handlePostVideo = async (e) => {
    e.preventDefault();

    try {
      ("https://open.tiktokapis.com/v2/research/video/query");
      const response = await axios.post({
        title: username,
        body: caption,
        userId: 1, // You can set the user ID based on your authentication system
      });

      console.log("Video posted:", response.data);
    } catch (error) {
      console.error("Error posting video:", error);
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="app__videos">
        {/* Example video */}
        <Video
          src="https://example.com/sample-video.mp4"
          username="user123"
          caption="This is a sample caption."
        />

        {/* Form to post a new video */}
        <form onSubmit={handlePostVideo}>
          <input
            type="text"
            placeholder="Video URL"
            value={videoSrc}
            onChange={(e) => setVideoSrc(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <button type="submit">Post Video</button>
        </form>
      </div>
    </div>
  );
};

export default App;
