import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#fefefe]">
      <div className="max-w-7xl mx-auto mt-20 py-16 px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-x-20 items-start mb-20 px-20">
          <div className=" text-[#7e7e6b] w-4/3">
            <h1 className="text-3xl font-semibold mb-8 font-serif">
              About Dr. Serena Blake
            </h1>
            <div className="text-lg font-light font-sans">
              <p className="mb-5">
                Finding time and opportunities to care for ourselves can be
                incredibly challenging in today's busy and demanding world. I
                believe therapy offers a dedicated space for self-care,
                providing the support and tools needed to improve this essential
                practice. Therapy can help individuals identify and clarify
                their goals, values, and the various elements that contribute to
                their well-being, recognizing that these aspects vary from
                person to person.
              </p>
              <p className="mb-5">
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
              <p className="mb-5">
                My therapeutic approach is primarily psychodynamic and
                humanistic, enriched by influences from positive psychology,
                existentialism, family systems theory, acceptance and commitment
                concepts, and mindfulness practices.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row">
            <img src="/doctor.png" />
          </div>
        </div>
        <div className="border-t border-[#41413f] mb-16 mx-4"></div>
      </div>
    </div>
  );
};

export default About;
