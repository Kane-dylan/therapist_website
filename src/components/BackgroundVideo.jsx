"use client";

import React, { useEffect, useRef, useState } from "react";

const BackgroundVideo = () => {
  const videoRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client-side flag to avoid hydration mismatch
    setIsClient(true);

    // Ensure video plays correctly after hydration
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Silently handle autoplay restrictions
      });
    }
  }, []);

  // Show a placeholder during SSR to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className="relative inset-0 w-full h-full overflow-hidden bg-gray-200">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-gray-500">Loading video...</div>
        </div>
      </div>
    );
  }

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
