// ContactPage.jsx
import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>

      <p className="text-lg text-gray-600 leading-8 mb-10">
        We’re here to help with product inquiries, order assistance, bulk
        purchase requests, payment support, and general questions. Our team is
        committed to providing a smooth and responsive customer experience.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-gray-50 p-8 rounded-2xl border">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

          <div className="space-y-5 text-lg">
            <div>
              <p className="font-semibold">Phone Number</p>
              <p className="text-gray-600">8925491779</p>
            </div>

            <div>
              <p className="font-semibold">Email Address</p>
              <p className="text-gray-600">
                nickwholesaleemborium@gmail.com
              </p>
            </div>

            <div>
              <p className="font-semibold">Customer Support Hours</p>
              <p className="text-gray-600">
                Monday to Saturday | 10:00 AM to 7:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border">
          <h2 className="text-2xl font-semibold mb-6">How We Can Help</h2>

          <ul className="space-y-4 text-gray-700 leading-8">
            <li>• Order status and delivery support</li>
            <li>• Product details and fabric guidance</li>
            <li>• Saree collection recommendations</li>
            <li>• Bulk / wholesale purchase assistance</li>
            <li>• Returns, refunds, and complaints</li>
            <li>• Payment and checkout issues</li>
          </ul>

          <p className="mt-6 text-gray-600 leading-8">
            Please include your order number or relevant details when contacting
            us so we can assist you faster.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;