import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#fefefe]">
      <div className="max-w-7xl mx-auto mt-10 sm:mt-16 md:mt-20 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-start mb-12 sm:mb-16 md:mb-20 px-0 sm:px-4 md:px-8 lg:px-20">
          {/* Doctor Name */}
          <div className="flex flex-col text-[#7e7e6b] w-full lg:w-3/5">
            <div className="flex">
              <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold mb-4 sm:mb-6 md:mb-8 font-serif">
                About Dr. Serena Blake
              </h1>
            </div>

            {/* Hidden Image */}
            <div className="flex flex-col lg:hidden w-full mb-6 sm:mb-8">
              <img
                src="/doctor.png"
                alt="Dr. Serena Blake"
                className="w-full h-auto object-contain max-w-sm mx-auto"
              />
            </div>

            {/* Details */}
            <div className="text-base sm:text-lg font-light font-sans">
              <p className="mb-4 sm:mb-5 leading-relaxed">
                Finding time and opportunities to care for ourselves can be
                incredibly challenging in today's busy and demanding world. I
                believe therapy offers a dedicated space for self-care,
                providing the support and tools needed to improve this essential
                practice. Therapy can help individuals identify and clarify
                their goals, values, and the various elements that contribute to
                their well-being, recognizing that these aspects vary from
                person to person.
              </p>
              <p className="mb-4 sm:mb-5 leading-relaxed">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD)
                based in Los Angeles, CA, with eight years of experience and
                over 500 client sessions. She blends evidence-based
                approaches—like cognitive-behavioral therapy and
                mindfulness—with compassionate, personalized care to help you
                overcome anxiety, strengthen relationships, and heal from
                trauma. Whether you meet in her Maplewood Drive office or
                connect virtually via Zoom, Dr. Blake is committed to creating a
                safe, supportive space for you to thrive.
              </p>
              <p className="mb-4 sm:mb-5 leading-relaxed">
                My therapeutic approach is primarily psychodynamic and
                humanistic, enriched by influences from positive psychology,
                existentialism, family systems theory, acceptance and commitment
                concepts, and mindfulness practices.
              </p>
            </div>
          </div>

          {/* Image  */}
          <div className="hidden lg:flex flex-col w-full lg:w-2/5">
            <img
              src="/doctor.png"
              alt="Dr. Serena Blake"
              className="w-full h-auto object-contain max-w-sm mx-auto lg:max-w-none lg:mx-0"
            />
          </div>
        </div>
        <div className="border-t border-[#41413f] mb-8 sm:mb-12 md:mb-16 mx-0 sm:mx-2 md:mx-4"></div>
      </div>
    </div>
  );
};

export default About;
