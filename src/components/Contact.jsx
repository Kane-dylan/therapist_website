"use client";

import React, { useState, useEffect } from "react";

const Contact = () => {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
    agreeToContact: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Set client-side flag to avoid hydration mismatch
    setIsClient(true);
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us what brings you here";
    }

    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = "Preferred contact time is required";
    }

    if (!formData.agreeToContact) {
      newErrors.agreeToContact = "You must agree to be contacted";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form on success
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        preferredTime: "",
        agreeToContact: false,
      });

      alert("Thank you for your message! Dr. Blake will be in touch soon.");
    } catch (error) {
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f3f0e8] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Responsive flex layout with better mobile stacking */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Left Column: Contact Details - Responsive spacing */}
          <div className="w-full lg:w-1/2 mb-6 sm:mb-8 lg:mb-0">
            <div className="p-4 sm:p-6 md:p-8 h-full">
              {/* Responsive heading */}
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#4a5a5b] mb-4 sm:mb-6">
                Contact Information
              </h2>

              <div className="space-y-3 sm:space-y-4 text-[#4a5a5b]">
                <div>
                  <h3 className="font-semibold text-base sm:text-lg font-sans mb-1">
                    Dr. Serena Blake, PsyD
                  </h3>
                  <p className="text-gray-600 font-sans text-sm sm:text-base">
                    Clinical Psychologist
                  </p>
                </div>

                <div>
                  <p className="font-semibold font-sans text-sm sm:text-base">
                    Address:
                  </p>
                  <p className="font-sans text-sm sm:text-base">
                    1287 Maplewood Drive
                    <br />
                    Los Angeles, CA 90026
                  </p>
                </div>

                <div>
                  <p className="font-semibold font-sans text-sm sm:text-base">
                    Phone:
                  </p>
                  <p className="font-sans text-sm sm:text-base">
                    <a
                      href="tel:3235550192"
                      className="text-[#4a5a5b] hover:text-[#9AB1B0] transition-colors"
                    >
                      (323) 555-0192
                    </a>
                  </p>
                </div>

                <div>
                  <p className="font-semibold font-sans text-sm sm:text-base">
                    Email:
                  </p>
                  <p className="font-sans text-sm sm:text-base">
                    <a
                      href="mailto:serena@blakepsychology.com"
                      className="text-[#4a5a5b] hover:text-[#9AB1B0] transition-colors break-all"
                    >
                      serena@blakepsychology.com
                    </a>
                  </p>
                </div>

                <div>
                  <p className="font-semibold font-sans text-sm sm:text-base">
                    Office Hours:
                  </p>
                  <ul className="font-sans space-y-1 text-sm sm:text-base">
                    <li>• In-person: Tue & Thu, 10 AM–6 PM</li>
                    <li>• Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold font-sans text-sm sm:text-base">
                    Session Fees:
                  </p>
                  <ul className="font-sans space-y-1 text-sm sm:text-base">
                    <li>• $200 / individual session</li>
                    <li>• $240 / couples session</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold font-sans text-sm sm:text-base">
                    Specialties:
                  </p>
                  <ul className="font-sans space-y-1 text-sm sm:text-base">
                    <li>• Anxiety & Stress Management</li>
                    <li>• Relationship Counseling</li>
                    <li>• Trauma Recovery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form - Responsive form styling */}
          <div className="w-full lg:w-1/2 h-auto">
            <div className="bg-white rounded-lg border border-[#4a5a5b]/20 p-4 sm:p-6 md:p-8 shadow-sm">
              {/* Responsive form heading */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#4a5a5b] mb-3 sm:mb-4 text-center font-bold">
                Get In Touch
              </h1>

              <p className="text-sm sm:text-base font-sans text-[#4a5a5b] mb-4 sm:mb-6 text-center leading-relaxed">
                Simply fill out the brief fields below and Dr. Blake will be in
                touch with you soon, usually within one business day. This form
                is safe, private, and completely free.
              </p>

              {/* Show loading placeholder during SSR to avoid hydration mismatch */}
              {!isClient ? (
                <div className="space-y-4 sm:space-y-5">
                  <div className="animate-pulse">
                    <div className="h-3 sm:h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-10 sm:h-12 bg-gray-200 rounded mb-4"></div>
                    <div className="h-3 sm:h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-10 sm:h-12 bg-gray-200 rounded mb-4"></div>
                    <div className="h-3 sm:h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-10 sm:h-12 bg-gray-200 rounded mb-4"></div>
                    <div className="h-3 sm:h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-24 sm:h-32 bg-gray-200 rounded mb-4"></div>
                    <div className="h-3 sm:h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-10 sm:h-12 bg-gray-200 rounded mb-4"></div>
                    <div className="h-10 sm:h-12 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[#4a5a5b] font-sans font-medium mb-2 text-sm sm:text-base"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-md font-sans text-[#4a5a5b] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9AB1B0] focus:border-transparent transition-colors text-sm sm:text-base ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1 font-sans">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[#4a5a5b] font-sans font-medium mb-2 text-sm sm:text-base"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-md font-sans text-[#4a5a5b] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9AB1B0] focus:border-transparent transition-colors text-sm sm:text-base ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1 font-sans">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[#4a5a5b] font-sans font-medium mb-2 text-sm sm:text-base"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 234-5678"
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-md font-sans text-[#4a5a5b] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9AB1B0] focus:border-transparent transition-colors text-sm sm:text-base ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1 font-sans">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[#4a5a5b] font-sans font-medium mb-2 text-sm sm:text-base"
                    >
                      What brings you here?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="How can I help you?"
                      rows={4}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-md font-sans text-[#4a5a5b] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9AB1B0] focus:border-transparent transition-colors resize-vertical text-sm sm:text-base ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1 font-sans">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Preferred Time Field */}
                  <div>
                    <label
                      htmlFor="preferredTime"
                      className="block text-[#4a5a5b] font-sans font-medium mb-2 text-sm sm:text-base"
                    >
                      Preferred time to reach you
                    </label>
                    <input
                      type="text"
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-md font-sans text-[#4a5a5b] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9AB1B0] focus:border-transparent transition-colors text-sm sm:text-base ${
                        errors.preferredTime
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 font-sans">
                      Let us know when you're typically available for a call or
                      consultation
                    </p>
                    {errors.preferredTime && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1 font-sans">
                        {errors.preferredTime}
                      </p>
                    )}
                  </div>

                  {/* Agree to Contact Checkbox - Better mobile layout */}
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <input
                      type="checkbox"
                      id="agreeToContact"
                      name="agreeToContact"
                      checked={formData.agreeToContact}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 sm:w-5 sm:h-5 text-[#9AB1B0] bg-gray-100 border-gray-300 rounded focus:ring-[#9AB1B0] focus:ring-2 flex-shrink-0"
                    />
                    <label
                      htmlFor="agreeToContact"
                      className="text-[#4a5a5b] font-sans text-xs sm:text-sm leading-relaxed"
                    >
                      I agree to be contacted by Dr. Serena Blake regarding my
                      inquiry
                    </label>
                  </div>
                  {errors.agreeToContact && (
                    <p className="text-red-500 text-xs sm:text-sm font-sans">
                      {errors.agreeToContact}
                    </p>
                  )}

                  {/* Submit Button - Responsive sizing */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-md font-sans font-semibold text-white text-sm sm:text-base md:text-lg transition-colors duration-200 ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#4a5a5b] hover:bg-[#3a4a4b] focus:outline-none focus:ring-2 focus:ring-[#9AB1B0] focus:ring-offset-2"
                    }`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>

                  {/* Privacy Notice - Responsive text */}
                  <div className="flex items-start space-x-2 pt-2 sm:pt-4">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#4a5a5b] mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs sm:text-sm text-[#4a5a5b] font-sans">
                      By clicking submit you consent to receive texts and emails
                      from Dr. Serena Blake
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
