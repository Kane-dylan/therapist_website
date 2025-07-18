import React from "react";
import Image from "next/image";
import BackgroundVideo from "./BackgroundVideo";

const Hero = () => {
  return (
    <div className="min-h-screen">
      {/* Logo Section */}
      <div className="bg-[#f3f0e8] py-4 px-4 sm:py-6 sm:px-8 md:py-8 md:px-14">
        <Image
          src="/logo.png"
          alt="logo"
          width={280}
          height={100}
          className="bg-[#f3f0e8] p-2 sm:p-4 border border-none w-auto h-auto max-w-[200px] sm:max-w-[240px] md:max-w-[280px]"
        />
      </div>

      {/* Video Section */}
      <div className="bg-[#f3f0e8] p-2 sm:p-2 md:p-6 lg:p-10 xl:p-16 pt-0">
        <div className="relative w-full aspect-[3/4] sm:aspect-[4/3] md:aspect-[1/1] lg:aspect-video">
          <div className="relative w-full h-full overflow-hidden">
            <BackgroundVideo />

            {/* Dark overlay*/}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Main Content */}
            <div className="absolute inset-0 flex items-center justify-center w-full px-4 sm:px-6 md:px-8">
              <div className="text-center text-white max-w-6xl w-full">
                <h1 className="text-center whitespace-pre-wrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-2 sm:mb-3 md:mb-4 leading-tight font-semibold text-white">
                  Psychological Care for
                </h1>

                <h1 className="text-center whitespace-pre-wrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4 sm:mb-6 md:mb-8 leading-tight font-semibold text-white">
                  Change, Insight, and Well-Being
                </h1>

                <h4 className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-light text-white font-sans max-w-full leading-relaxed">
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

                {/* CTA Button */}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeVPdE8FDjGrnmAJ8kAXzXUTrOz780udwG6noNWHbShZuuIgw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#9AB1B0] hover:bg-[#8A9F9E] text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-5 lg:px-16 lg:py-6 transition-colors duration-300 rounded-[50%_50%_50%_50%/50%_50%_50%_50%] uppercase tracking-wider text-xs sm:text-sm md:text-base leading-tight text-center cursor-pointer"
                >
                  SCHEDULE A <br /> CONSULTATION
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
