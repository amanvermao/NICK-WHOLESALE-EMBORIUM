import React from "react";

const ComplaintPolicy = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Complaint Policy</h1>

      <p className="text-lg text-gray-600 leading-8 mb-8">
        We are committed to delivering a reliable, transparent, and satisfying
        shopping experience for every customer. Your trust is important to us,
        and we take all complaints seriously. If at any time you are not
        satisfied with our products, services, delivery process, payment
        experience, or support response, we encourage you to inform us so we can
        investigate the matter and provide a fair resolution.
      </p>

      <p className="text-lg text-gray-600 leading-8 mb-10">
        Our complaint handling process is designed to ensure that all concerns
        are addressed promptly, professionally, and respectfully. We believe
        customer feedback helps us improve our platform, strengthen our service
        standards, and maintain long-term customer relationships.
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            1. Types of Complaints We Accept
          </h2>
          <p className="leading-8 text-gray-700">
            Customers may submit complaints regarding a wide range of issues,
            including but not limited to delayed deliveries, damaged items,
            missing products, incorrect orders, payment failures, refund delays,
            poor packaging, website errors, account issues, misleading product
            descriptions, or unsatisfactory customer support experiences.
          </p>
          <p className="leading-8 text-gray-700 mt-4">
            We also welcome feedback related to technical problems, checkout
            difficulties, promotional disputes, or any matter that negatively
            affects your shopping experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            2. How to Submit a Complaint
          </h2>
          <p className="leading-8 text-gray-700">
            To help us resolve your concern efficiently, please contact our
            support team through the official customer care channels available on
            our website. When submitting a complaint, kindly provide accurate
            details such as:
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 leading-8">
            <li>Full Name</li>
            <li>Registered Email Address or Phone Number</li>
            <li>Order Number</li>
            <li>Date of Purchase</li>
            <li>Clear Description of the Issue</li>
            <li>Photos or Screenshots (if applicable)</li>
            <li>Preferred Resolution</li>
          </ul>

          <p className="leading-8 text-gray-700 mt-4">
            Providing complete information allows us to review your case faster
            and reduce delays in communication.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            3. Complaint Review Process
          </h2>
          <p className="leading-8 text-gray-700">
            Once your complaint is received, our team will register the request
            and begin an internal review. Depending on the nature of the issue,
            we may coordinate with logistics partners, payment gateways,
            warehouse teams, or sellers to verify the facts.
          </p>

          <p className="leading-8 text-gray-700 mt-4">
            In some cases, additional documentation may be required. Customers
            are requested to cooperate by responding to follow-up queries so that
            the complaint can be resolved fairly and accurately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            4. Resolution Timeframe
          </h2>
          <p className="leading-8 text-gray-700">
            We aim to acknowledge most complaints within 24 to 48 business
            hours. Standard complaints are generally resolved within 3 to 7
            business days. More complex matters involving third-party partners,
            product investigations, or financial verification may require
            additional time.
          </p>

          <p className="leading-8 text-gray-700 mt-4">
            If extra time is needed, we will keep you informed regarding the
            progress and expected resolution timeline.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            5. Possible Resolutions
          </h2>
          <p className="leading-8 text-gray-700">
            Depending on the complaint and eligibility criteria, we may offer one
            or more of the following solutions:
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 leading-8">
            <li>Replacement of damaged or incorrect product</li>
            <li>Partial or full refund</li>
            <li>Store credit or wallet balance</li>
            <li>Order correction or re-dispatch</li>
            <li>Technical support assistance</li>
            <li>Service apology and process improvement action</li>
          </ul>

          <p className="leading-8 text-gray-700 mt-4">
            Resolution decisions are based on order history, submitted evidence,
            product condition, and internal policy review.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            6. Customer Responsibilities
          </h2>
          <p className="leading-8 text-gray-700">
            Customers are expected to provide truthful information and cooperate
            during the complaint review process. False claims, abusive behavior,
            manipulated evidence, or repeated misuse of the complaint system may
            result in rejection of the request or account restrictions where
            permitted by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            7. Continuous Improvement
          </h2>
          <p className="leading-8 text-gray-700">
            Every complaint helps us improve. We regularly review complaint data
            to identify recurring issues, improve product quality, optimize
            delivery performance, strengthen seller standards, and enhance the
            overall customer experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            8. Contact Support
          </h2>
          <p className="leading-8 text-gray-700">
            If you need assistance, please contact our official support team
            through the contact options listed on our website. We appreciate the
            opportunity to resolve your concern and serve you better.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ComplaintPolicy;