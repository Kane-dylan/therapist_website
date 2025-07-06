"use client";

import React, { useEffect, useRef } from "react";

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays correctly after hydration
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Silently handle autoplay restrictions
      });
    }
  }, []);

  return (
    <div className="relative inset-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        suppressHydrationWarning
      >
        <source src="/demo.mp4" type="video/mp4" />
        Your browser doesn't support HTML5 video.
      </video>
    </div>
  );
};

export default BackgroundVideo;
