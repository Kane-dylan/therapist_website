import React from "react";
import Image from "next/image";
import BackgroundVideo from "./BackgroundVideo";

const Hero = () => {
  return (
    <div className="min-h-screen">
      {/* Logo Section - Separate div at top */}
      <div className="bg-[#f3f0e8] py-8 px-14">
        <Image
          src="/logo.png"
          alt="logo"
          width={280}
          height={100}
          className="bg-[#f3f0e8] p-4 border border-none"
        />
      </div>

      {/* Video Section with equal padding on all sides */}
      <div className="bg-[#f3f0e8] p-4 sm:p-8 md:p-12 lg:p-16 pt-0 sm:pt-0 md:pt-0 lg:pt-0">
        <div className="relative w-full aspect-[3/4] md:aspect-[1/1] lg:aspect-video">
          {/* Background Video*/}
          <div className="relative w-full h-full overflow-hidden">
            <BackgroundVideo />

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Main Content - Removed side padding */}
            <div className="absolute inset-0 flex items-center justify-center w-full">
              <div className="text-center text-white max-w-6xl w-full">
                {/* Split heading into two parts as per your HTML structure */}
                <h1 className="text-center whitespace-pre-wrap text-5xl md:text-6xl lg:text-7xl font-serif mb-4 leading-tight font-bold text-white">
                  <strong>Psychological Care for</strong>
                </h1>

                <h1 className="text-center whitespace-pre-wrap text-5xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight font-bold text-white">
                  <strong>Change, Insight, and Well-Being</strong>
                </h1>

                {/* Updated paragraph with proper styling */}
                <h4 className="text-center whitespace-pre-wrap text-xl md:text-2xl lg:text-2xl mb-12 font-light text-white px-4 font-sans">
                  Offering individual psychotherapy for adults via telehealth in
                  Michigan and{" "}
                  <a
                    href="https://psypact.org/mpage/psypactmap"
                    className="underline hover:text-gray-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    most U.S. states
                  </a>{" "}
                  through PSYPACT participation
                </h4>

                {/* Oval CTA Button */}
                <button className="bg-[#9AB1B0] hover:bg-[#8A9F9E] text-white font-semibold px-18 py-6 transition-colors duration-300 rounded-[50%_50%_50%_50%/50%_50%_50%_50%] uppercase tracking-wider">
                  SCHEDULE A <br /> CONSULTATION
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
