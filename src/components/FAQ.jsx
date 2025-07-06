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
      answer:
        "1287 Maplewood Drive, Los Angeles, CA 90026",
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
      <div className="bg-[#b5dbdf] py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-serif text-[#4a5a5b] mb-12 text-center font-bold">
            Frequently Asked Questions
          </h1>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={item.id} className="border-b border-[#4a5a5b]/30">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left py-6 flex justify-between items-center hover:bg-[#a5cfd3]/50 transition-colors duration-200 px-4 rounded-t-lg"
                >
                  <h3 className="text-xl lg:text-2xl font-sans text-[#4a5a5b] font-medium pr-4">
                    {item.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-[#4a5a5b] transition-transform duration-200 flex-shrink-0 ${
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
                  <div className="px-4 pb-6 animate-in slide-in-from-top-2 duration-200">
                    <p className="text-lg font-sans text-[#4a5a5b] font-light leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-full h-[632px] overflow-hidden">
        <img
          src="/bg.jpg"
          alt="Ocean background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full">
          <div className="text-center font-serif font-light px-4 lg:px-0">
            <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight mb-8 max-w-6xl mx-auto font-serif">
              "I have come to believe that caring for myself is not
              self- <br />
              indulgent. Caring for myself is an act of survival."
            </h1>
            <p className="text-lg md:text-xl leading-tight font-sans">—Audre Lorde</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
