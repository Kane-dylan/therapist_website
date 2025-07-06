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
        <div className="border-t border-[#41413f] mb-16 mx-4 lg:mx-20"></div>

        {/* Areas of Focus Section */}
        <div className="text-center mb-16">
          <h2 className="text-xl font-light lg:text-4xl font-serif text-[#41413f] mb-16">
            Areas of Focus
          </h2>

          {/* Three Focus Areas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-4">
            {/* Focus Area 1 */}
            <div className="text-center">
              <div className="w-94 h-94 mx-auto mb-8 rounded-full overflow-hidden">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5cd9be261ca3c20001f5fffc/1646419281523-32A0VLDX5A71V30A7W6A/unsplash-image-bmJAXAz6ads.jpg?format=1500w"
                  alt="Therapy for Healthcare Providers and Students"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif text-[#41413f] mb-6">
                Support for Healthcare Professionals and Students
              </h3>
              <p className="text-sm font-sans text-[#41413f] font-light leading-relaxed">
                Burnout, compassion fatigue, and perfectionism are common
                challenges for those in healthcare. Therapy provides a space to
                care for yourself while you care for others, whether you're in
                training or deep into your career.
              </p>
            </div>

            {/* Focus Area 2 */}
            <div className="text-center">
              <div className="w-94 h-94 mx-auto mb-8 rounded-full overflow-hidden">
                <img
                  src="https://bayareacbtcenter.com/wp-content/uploads/2024/07/shutterstock_138711269.jpg"
                  alt="Therapy for Trauma and Grief"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif text-[#41413f] mb-6">
                Healing from Trauma and Grief
              </h3>
              <p className="text-sm font-sans text-[#41413f] font-light leading-relaxed">
                Trauma and loss can leave deep emotional imprints. Therapy
                offers a compassionate, grounding environment to process these
                experiences and move toward meaning and healing.
              </p>
            </div>

            {/* Focus Area 3 */}
            <div className="text-center">
              <div className="w-94 h-94 mx-auto mb-8 rounded-full overflow-hidden">
                <img
                  src="https://static1.squarespace.com/static/656f4e4dababbd7c042c4946/657236350931ee4538eea52c/657236380931ee4538eea912/1709850980508/%28CO%29+self-reflection+1_1.jpg?format=1500w"
                  alt="Therapy for Second Generation Individuals In Immigrant Families"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif text-[#41413f] mb-6">
                Therapy for Second-Generation Individuals
              </h3>
              <p className="text-sm font-sans text-[#41413f] font-light leading-relaxed">
                Navigating multiple cultures can be complex and emotionally
                challenging. Therapy provides a space to explore identity,
                values, and family dynamics unique to second-generation
                experiences.
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
          <h1 className="text-2xl lg:text-2xl font-serif text-[#41413f] font-normal">
            Unable to accept new clients at this time.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
