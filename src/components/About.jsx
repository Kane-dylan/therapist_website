import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#fefefe] py-16 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-36 items-start mb-20 px-20">
          <div className=" text-[#7e7e6b] ">
            <h1 className="text-4xl font-bold mb-8 font-serif">
              About Dr. Serena Blake
            </h1>
            <div className="text-lg font-extralight font-sans">
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
                I am dedicated to supporting this journey by offering active
                listening, psychological knowledge, empathy, compassion, and
                insights into behavioral patterns and tendencies. I hold a
                master’s degree in Clinical Psychology from the Michigan School
                of Psychology (2012) and a Ph.D. in Counseling Psychology from
                Western Michigan University (2018). My experience spans therapy
                and psychological assessment in psychiatric inpatient units,
                academic medical centers, universities, and outpatient practice
                settings.
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
          {/* <hr /> */}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
