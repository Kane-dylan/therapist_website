"use client";

import React, { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const faqItems = [
    {
      id: "Q1",
      question: "Do you accept insurance? ",
      answer: " No, but a superbill is provided for self-submission.",
    },
    {
      id: "Q2",
      question: "Are online sessions available?",
      answer: " Yes—all virtual sessions via Zoom.",
    },
    {
      id: "Q3",
      question: "What is your cancellation policy?",
      answer: "24-hour notice required.",
    },
    {
      id: "Q4",
      question: "What are your office hours?",
      answer:
        " In-person: Tue & Thu, 10 AM–6 PM & Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM",
    },
    {
      id: "Q5",
      question: "What geographic areas do you serve?",
      answer: "1287 Maplewood Drive, Los Angeles, CA 90026",
    },
    {
      id: "Q6",
      question: "What services do you offer?",
      answer:
        "I offer individual psychotherapy for adults focusing on Anxiety & Stress Management, Relationship Counseling, Trauma Recovery techniques.",
    },
  ];

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      <div className="bg-[#b5dbdf] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Responsive heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#4a5a5b] mb-6 sm:mb-8 md:mb-12 text-center font-bold">
            Frequently Asked Questions
          </h1>

          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            {faqItems.map((item, index) => (
              <div key={item.id} className="border-b border-[#4a5a5b]/30">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left py-4 sm:py-5 md:py-6 flex justify-between items-center hover:bg-[#a5cfd3]/50 transition-colors duration-200 px-2 sm:px-3 md:px-4 rounded-t-lg"
                >
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-sans text-[#4a5a5b] font-medium pr-3 sm:pr-4">
                    {item.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-[#4a5a5b] transition-transform duration-200 flex-shrink-0 ${
                      openItems[item.id] ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openItems[item.id] && (
                  <div className="px-2 sm:px-3 md:px-4 pb-4 sm:pb-5 md:pb-6 animate-in slide-in-from-top-2 duration-200">
                    {/* Responsive answer text */}
                    <p className="text-sm sm:text-base md:text-lg font-sans text-[#4a5a5b] font-light leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive image section with better mobile handling */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[632px] overflow-hidden">
        <img
          src="/bg.jpg"
          alt="Ocean background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8">
          <div className="text-center font-serif font-light">
            {/* Responsive quote text with conditional line breaks */}
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight mb-4 sm:mb-6 md:mb-8 max-w-6xl mx-auto font-serif">
              "I have come to believe that caring for myself is not self-
              <br className="hidden sm:block" />
              indulgent. Caring for myself is an act of survival."
            </h1>
            {/* Responsive attribution */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-tight font-sans">
              —Audre Lorde
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
