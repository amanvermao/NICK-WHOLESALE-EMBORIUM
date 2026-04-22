import React from "react";

const TermsAndCondition = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Terms and Conditions
      </h1>

      <p className="text-lg text-gray-600 leading-8 mb-8">
        Welcome to our website. These Terms and Conditions govern your access to
        and use of our platform, products, services, and related features. By
        visiting, browsing, creating an account, or placing an order through our
        website, you agree to comply with and be legally bound by the terms
        stated below.
      </p>

      <p className="text-lg text-gray-600 leading-8 mb-10">
        Please read these Terms carefully before using our services. If you do
        not agree with any part of these Terms, you should discontinue use of
        the website. Continued use of the platform indicates your acceptance of
        the current Terms and any future updates.
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Website Usage</h2>
          <p className="leading-8 text-gray-700">
            You agree to use this website only for lawful purposes and in a
            responsible manner. Users must not engage in any activity that may
            harm, disrupt, overload, or interfere with the functionality,
            security, or accessibility of the website.
          </p>

          <p className="leading-8 text-gray-700 mt-4">
            Unauthorized use including hacking attempts, data scraping,
            fraudulent transactions, misuse of promotional offers, or attempts
            to gain restricted access is strictly prohibited and may result in
            legal action or account suspension.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. User Accounts</h2>
          <p className="leading-8 text-gray-700">
            Some features of the platform may require account registration. You
            are responsible for maintaining the confidentiality of your login
            credentials and for all activities conducted through your account.
          </p>

          <p className="leading-8 text-gray-700 mt-4">
            You agree to provide accurate, complete, and updated information at
            all times. We reserve the right to suspend or terminate accounts
            containing false information, suspicious behavior, or violations of
            these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            3. Product Information & Availability
          </h2>
          <p className="leading-8 text-gray-700">
            We strive to display accurate product descriptions, images, pricing,
            specifications, and stock availability. However, minor variations,
            technical errors, pricing mistakes, or stock mismatches may occur.
          </p>

          <p className="leading-8 text-gray-700 mt-4">
            Product colors or appearance may differ slightly depending on screen
            settings or manufacturer updates. We reserve the right to correct
            any errors and update product information without prior notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            4. Orders & Acceptance
          </h2>
          <p className="leading-8 text-gray-700">
            Placing an order on our website does not automatically guarantee
            acceptance. Orders are subject to payment verification, stock
            availability, delivery feasibility, and fraud screening.
          </p>

          <p className="leading-8 text-gray-700 mt-4">
            We reserve the right to cancel, limit, or reject any order at our
            discretion, including cases involving pricing errors, suspected
            fraud, duplicate orders, restricted products, or supply issues.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            5. Pricing & Payments
          </h2>
          <p className="leading-8 text-gray-700">
            All prices shown on the website are listed in the applicable
            currency unless stated otherwise. Taxes, shipping fees, or handling
            charges may be added during checkout where applicable.
          </p>

          <p className="leading-8 text-gray-700 mt-4">
            By completing payment, you confirm that you are authorized to use
            the selected payment method. In case of payment failure or suspected
            unauthorized activity, the order may be delayed or cancelled.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            6. Shipping & Delivery
          </h2>
          <p className="leading-8 text-gray-700">
            Delivery timelines provided on the website are estimated and may
            vary due to courier delays, weather conditions, remote locations,
            public holidays, customs checks, or other unforeseen circumstances.
          </p>

          <p className="leading-8 text-gray-700 mt-4">
            While we work to ensure timely delivery, we are not liable for
            delays caused by third-party logistics providers or events beyond
            reasonable control.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            7. Returns, Refunds & Cancellations
          </h2>
          <p className="leading-8 text-gray-700">
            Returns, refunds, and cancellations are governed by our separate
            Refund Policy and related policies available on the website.
            Eligibility depends on product category, order status, and reason
            for request.
          </p>

          <p className="leading-8 text-gray-700 mt-4">
            Customers are encouraged to review all policies before placing an
            order.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            8. Intellectual Property Rights
          </h2>
          <p className="leading-8 text-gray-700">
            All content available on this website, including but not limited to
            logos, text, graphics, product images, icons, videos, software,
            layout, and branding elements, is protected by intellectual property
            laws and remains the property of the website owner or its licensors.
          </p>

          <p className="leading-8 text-gray-700 mt-4">
            No content may be copied, reproduced, distributed, modified, or used
            commercially without prior written permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            9. Limitation of Liability
          </h2>
          <p className="leading-8 text-gray-700">
            To the maximum extent permitted by law, we shall not be liable for
            any indirect, incidental, consequential, or special damages arising
            from your use of the website, delayed delivery, product misuse,
            technical downtime, or third-party service interruptions.
          </p>

          <p className="leading-8 text-gray-700 mt-4">
            Our total liability, where applicable, shall generally not exceed
            the value of the affected order.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            10. Privacy & Data Protection
          </h2>
          <p className="leading-8 text-gray-700">
            Your use of the website may involve the collection and processing of
            certain personal information. Such handling is governed by our
            Privacy Policy and applicable laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            11. Changes to Terms
          </h2>
          <p className="leading-8 text-gray-700">
            We reserve the right to update, modify, or replace these Terms and
            Conditions at any time without prior notice. Updated terms become
            effective upon publication on the website.
          </p>

          <p className="leading-8 text-gray-700 mt-4">
            Continued use of the platform after changes are posted constitutes
            acceptance of the revised Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            12. Contact Information
          </h2>
          <p className="leading-8 text-gray-700">
            If you have any questions regarding these Terms and Conditions,
            please contact our customer support team through the official
            contact methods listed on the website.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndCondition;