import React from "react";

const BackgroundVideo = () => (
  <div className="relative inset-0 w-full h-full overflow-hidden">
    <video
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    >
      <source src="/demo.mp4" type="video/mp4" />
      Your browser doesn't support HTML5 video.
    </video>
  </div>
);

export default BackgroundVideo;
