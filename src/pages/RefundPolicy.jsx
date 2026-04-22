import React from "react";

const RefundPolicy = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Refund Policy</h1>

      <p className="text-lg text-gray-600 leading-8 mb-8">
        We value customer satisfaction and strive to ensure that every purchase
        made through our platform meets your expectations. If you experience an
        issue with your order, product quality, delivery, or payment, we offer a
        transparent refund process subject to the terms outlined below.
      </p>

      <p className="text-lg text-gray-600 leading-8 mb-10">
        Our refund policy is designed to protect both customers and the platform
        while maintaining fairness, accountability, and a smooth shopping
        experience. Please read the following conditions carefully before
        requesting a refund.
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            1. Eligible Refund Cases
          </h2>
          <p className="leading-8 text-gray-700">
            Refund requests may be approved under valid circumstances including,
            but not limited to, damaged items received, defective products,
            incorrect product delivered, incomplete order, duplicate payment,
            cancelled order before shipment, or confirmed non-delivery.
          </p>

          <p className="leading-8 text-gray-700 mt-4">
            Refund eligibility is reviewed based on order records, product type,
            payment confirmation, and supporting evidence submitted by the
            customer.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            2. How to Request a Refund
          </h2>
          <p className="leading-8 text-gray-700">
            To initiate a refund request, customers should contact our support
            team through the official channels listed on the website. Please
            include the following details for faster assistance:
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 leading-8">
            <li>Full Name</li>
            <li>Registered Email or Mobile Number</li>
            <li>Order Number</li>
            <li>Date of Purchase</li>
            <li>Reason for Refund Request</li>
            <li>Photos or Videos (if product issue exists)</li>
            <li>Any relevant payment proof</li>
          </ul>

          <p className="leading-8 text-gray-700 mt-4">
            Incomplete information may delay the verification and processing
            timeline.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            3. Refund Request Timeline
          </h2>
          <p className="leading-8 text-gray-700">
            Customers are encouraged to raise refund requests within 7 days of
            receiving the product. For non-delivery or payment-related issues,
            the request should be submitted as soon as possible after the issue
            is identified.
          </p>

          <p className="leading-8 text-gray-700 mt-4">
            Requests submitted after the allowed period may be declined unless
            required by applicable consumer protection laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            4. Refund Review Process
          </h2>
          <p className="leading-8 text-gray-700">
            Once a request is received, our team will review the case and may
            verify details with warehouse teams, shipping partners, sellers, or
            payment processors. Additional documents or clarification may be
            requested when necessary.
          </p>

          <p className="leading-8 text-gray-700 mt-4">
            We aim to complete most refund reviews within 3 to 7 business days,
            depending on the complexity of the matter.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            5. Refund Processing Time
          </h2>
          <p className="leading-8 text-gray-700">
            After approval, refunds are generally issued to the original payment
            method used during checkout. Processing timelines may vary depending
            on banks, card issuers, wallets, or payment gateways.
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 leading-8">
            <li>UPI / Wallets: 2 to 5 business days</li>
            <li>Debit / Credit Cards: 5 to 10 business days</li>
            <li>Net Banking: 3 to 7 business days</li>
            <li>Store Credit (if offered): Usually faster</li>
          </ul>

          <p className="leading-8 text-gray-700 mt-4">
            Delays caused by financial institutions are outside our direct
            control.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            6. Non-Refundable Items
          </h2>
          <p className="leading-8 text-gray-700">
            Certain products or situations may not qualify for refunds,
            including:
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 leading-8">
            <li>Used, damaged, or altered products after delivery</li>
            <li>Customized or personalized items</li>
            <li>Digital products or downloadable content</li>
            <li>Items returned without original packaging when required</li>
            <li>Requests involving false or misleading claims</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            7. Order Cancellation Refunds
          </h2>
          <p className="leading-8 text-gray-700">
            If an order is cancelled before shipment, eligible customers may
            receive a full refund. If cancellation occurs after dispatch,
            cancellation may be subject to shipping, handling, or return review
            conditions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            8. Abuse Prevention
          </h2>
          <p className="leading-8 text-gray-700">
            We reserve the right to decline refund requests involving repeated
            abuse, suspicious activity, manipulated evidence, excessive returns,
            or misuse of the refund system.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            9. Need Help?
          </h2>
          <p className="leading-8 text-gray-700">
            If you have questions regarding your refund status or eligibility,
            please contact our customer support team through the official support
            options available on our website. We are here to assist you.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;