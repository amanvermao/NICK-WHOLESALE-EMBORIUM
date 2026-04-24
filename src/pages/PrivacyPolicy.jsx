import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-lg text-gray-600 leading-8 mb-8">
        At <span className="font-semibold">Nick Wholesale Emborium</span>, we
        value your privacy and are committed to protecting your personal
        information. This Privacy Policy explains how we collect, use, store,
        and safeguard your data when you visit our website, create an account,
        place an order, or interact with our services.
      </p>

      <p className="text-lg text-gray-600 leading-8 mb-10">
        By using our website, you agree to the practices described in this
        Privacy Policy. We encourage you to read this page carefully to
        understand how your information is handled.
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            1. Information We Collect
          </h2>
          <p className="leading-8 text-gray-700">
            We may collect personal and non-personal information when you use
            our platform, including:
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 leading-8">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Billing and Shipping Address</li>
            <li>Order History</li>
            <li>Payment Transaction Details</li>
            <li>IP Address and Device Information</li>
            <li>Browsing Activity on our Website</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            2. How We Use Your Information
          </h2>
          <p className="leading-8 text-gray-700">
            Your information may be used for the following purposes:
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 leading-8">
            <li>Processing and delivering orders</li>
            <li>Providing customer support</li>
            <li>Sending order confirmations and updates</li>
            <li>Managing returns, refunds, and complaints</li>
            <li>Improving website performance and user experience</li>
            <li>Preventing fraud and unauthorized activity</li>
            <li>Sending offers or promotional updates (where permitted)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            3. Payment Security
          </h2>
          <p className="leading-8 text-gray-700">
            We do not store full debit card, credit card, or sensitive banking
            details on our servers. Payments are processed through trusted
            third-party payment gateways using secure technology and encryption
            standards.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            4. Sharing of Information
          </h2>
          <p className="leading-8 text-gray-700">
            We do not sell or rent your personal information. We may share data
            only when necessary with trusted service providers such as delivery
            partners, payment processors, technical vendors, or when required by
            law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            5. Cookies & Tracking Technologies
          </h2>
          <p className="leading-8 text-gray-700">
            Our website may use cookies and similar technologies to remember
            preferences, improve browsing experience, analyze traffic, and offer
            relevant content. You may control cookies through your browser
            settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            6. Data Protection
          </h2>
          <p className="leading-8 text-gray-700">
            We use reasonable administrative, technical, and security measures
            to protect your information from unauthorized access, misuse, loss,
            or disclosure. However, no online system can guarantee absolute
            security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            7. Your Rights & Choices
          </h2>
          <p className="leading-8 text-gray-700">
            You may request access, correction, or deletion of your personal
            information where legally applicable. You may also unsubscribe from
            promotional emails at any time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            8. Third-Party Links
          </h2>
          <p className="leading-8 text-gray-700">
            Our website may contain links to third-party websites or services.
            We are not responsible for the privacy practices or content of those
            external platforms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            9. Policy Updates
          </h2>
          <p className="leading-8 text-gray-700">
            We may revise this Privacy Policy from time to time to reflect legal
            changes, service updates, or operational improvements. Updated
            versions will be posted on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            10. Contact Us
          </h2>
          <p className="leading-8 text-gray-700">
            If you have any questions regarding this Privacy Policy or your
            personal information, please contact us:
          </p>

          <div className="mt-4 space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">Phone:</span> 8925491779
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              nickwholesaleemborium@gmail.com
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;