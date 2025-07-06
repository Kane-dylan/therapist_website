import React from "react";

const Services = () => {
  return (
    <div className="bg-[#f3f0e8] py-16">
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="text-center mb-16 px-4 lg:px-20 text-[#41413f]">
          <h1 className="text-2xl font-light md:text-3xl lg:text-4xl leading-tight mb-8 max-w-6xl mx-auto font-serif">
            Therapy can be a space where you invest in yourself— <br />
            one of the highest forms of self-care.
          </h1>
          <p className="text-lg font-sans text-[#41413f] font-light leading-relaxed max-w-5xl mx-auto">
            You may be led to therapy by anxiety, depression, relationship
            stress, past or recent trauma, grief and loss, self-esteem issues,
            or challenges with family, parenting, or parental relationships.
            Whatever the source of your stress, you don't have to face it alone.
            Therapy offers you the time and space to work toward wellness and
            peace.
          </p>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-[#7e7e6b] mb-16 mx-4 lg:mx-20"></div>

        {/* Areas of Focus Section */}
        <div className="text-center mb-16">
          <h2 className="text-xl font-light lg:text-4xl font-serif text-[#41413f] mb-16">
            Areas of Focus
          </h2>

          {/* Three Focus Areas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-4">
            {/* Focus Area 1 */}
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden">
                <img
                  src="/focus1.jpg"
                  alt="Therapy for Healthcare Providers and Students"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif text-[#7e7e6b] mb-6 font-bold">
                Therapy for Healthcare Providers and Students
              </h3>
              <p className="text-sm font-sans text-[#7e7e6b] font-light leading-relaxed">
                The care you provide for others may be driving you to seek
                therapy, whether due to burnout, compassion fatigue, imposter
                syndrome, people-pleasing tendencies, or perfectionism. Whether
                you're in pre-professional school, undergoing training, or
                reflecting on a long career in healthcare, we can address the
                unique stressors of your professional environment along with any
                challenges you may be facing in other areas of your life.
              </p>
            </div>

            {/* Focus Area 2 */}
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden">
                <img
                  src="/focus2.jpg"
                  alt="Therapy for Trauma and Grief"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif text-[#7e7e6b] mb-6 font-bold">
                Therapy for Trauma and Grief
              </h3>
              <p className="text-sm font-sans text-[#7e7e6b] font-light leading-relaxed">
                Life's challenges, whether a difficult childhood, a traumatic
                event or series of events, or the loss of someone or something
                deeply meaningful, can lead to profound experiences of trauma
                and grief. Therapy offers a supportive space to process these
                experiences, care for yourself amidst painful thoughts and
                emotions, and work toward a sense of grounding and meaning.
              </p>
            </div>

            {/* Focus Area 3 */}
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden">
                <img
                  src="/focus3.jpg"
                  alt="Therapy for Second Generation Individuals In Immigrant Families"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif text-[#7e7e6b] mb-6 font-bold">
                Therapy for Second Generation Individuals In Immigrant Families
              </h3>
              <p className="text-sm font-sans text-[#7e7e6b] font-light leading-relaxed">
                Second-generation individuals in immigrant families, born in the
                U.S. to at least one parent born abroad, often navigate the
                complexities of multiple cultures and diverse expectations. This
                experience can bring challenges such as feeling like a foreigner
                in your own country and navigating strained family
                relationships. Therapy offers a supportive space to explore and
                process this unique aspect of your identity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rates and Insurance Section */}
      <div className="bg-[#9AB1B0] py-16 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl lg:text-4xl font-serif text-[#2c2c2c] mb-12 font-normal">
            Rates and Insurance
          </h1>

          <div className="space-y-6 text-[#2c2c2c] font-sans">
            <p className="text-lg font-normal">Session Fee - $200</p>

            <p className="text-lg font-normal">
              Psychodiagnostic Evaluation - $225
            </p>

            <p className="text-lg font-normal leading-relaxed max-w-3xl mx-auto">
              I accept both private pay and insurance. I am in-network with BCBS
              and Aetna.
            </p>

            <p className="text-lg font-normal leading-relaxed max-w-3xl mx-auto">
              For out-of-network plans, I've partnered with Mentaya using{" "}
              <a
                href="#"
                className="underline hover:text-[#1a1a1a] transition-colors"
              >
                this tool
              </a>{" "}
              to help you check your eligibility for reimbursement for my
              services.
            </p>
          </div>
        </div>
      </div>

      {/* Unable to Accept Clients Section */}
      <div className="bg-[#f3f0e8] py-16 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl lg:text-3xl font-serif text-[#7e7e6b] font-normal">
            Unable to accept new clients at this time.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
