import React from "react";
import Image from "next/image";
import BackgroundVideo from "./BackgroundVideo";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Logo Section */}
      <div className="flex justify-between bg-[#f3f0e8] py-2 px-4 sm:py-3 sm:px-8 md:py-4 md:px-14 flex-shrink-0">
        <Image
          src="/logo.png"
          alt="logo"
          width={280}
          height={100}
          className="flex bg-[#f3f0e8] p-2 sm:p-4 border border-none w-auto h-auto max-w-[200px] sm:max-w-[240px] md:max-w-[280px]"
        />
        <div className="flex p-2 sm:p-4 border border-none w-auto h-auto max-w-[200px] sm:max-w-[240px] md:max-w-[280px]">
          <Avatar>
            <AvatarImage src="/doctor.png" />
            <AvatarFallback>DR.</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-[#f3f0e8] p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 pt-0 flex-1 flex items-center overflow-hidden">
        <div className="relative w-full h-[80vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] xl:h-[75vh] max-h-[calc(100vh-150px)]">
          <div className="relative w-full h-full overflow-hidden">
            <BackgroundVideo />

            {/* Dark overlay*/}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Main Content */}
            <div className="absolute inset-0 flex items-center justify-center w-full px-4 sm:px-6 md:px-8 lg:px-12">
              <div className="text-center text-white max-w-5xl w-full">
                <h1 className="text-center whitespace-pre-wrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif mb-2 sm:mb-3 md:mb-4 leading-tight font-semibold text-white">
                  Psychological Care for
                </h1>

                <h1 className="text-center whitespace-pre-wrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif mb-4 sm:mb-6 md:mb-6 lg:mb-8 leading-tight font-semibold text-white">
                  Change, Insight, and Well-Being
                </h1>

                <h4 className="text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4 sm:mb-6 md:mb-8 lg:mb-10 font-light text-white font-sans max-w-full leading-relaxed">
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
                  className="inline-block bg-[#9AB1B0] hover:bg-[#8A9F9E] text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-12 lg:py-5 transition-colors duration-300 rounded-[50%_50%_50%_50%/50%_50%_50%_50%] uppercase tracking-wider text-xs sm:text-sm md:text-base leading-tight text-center cursor-pointer"
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
