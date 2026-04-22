// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black py-5">
      <div className="flex justify-center items-center gap-8 flex-wrap text-sm">
        <Link
          to="/ComplaintPolicy"
          className="text-white hover:text-cyan-400 transition duration-300"
        >
          Complaint Policy
        </Link>

        <Link
          to="/RefundPolicy"
          className="text-white hover:text-cyan-400 transition duration-300"
        >
          Refund Policy
        </Link>

        <Link
          to={'/TermsAndCondition'}
          className="text-white hover:text-cyan-400 transition duration-300"
        >
          Terms and Condition
        </Link>
        <Link
          to={'/AboutUs'}
          className="text-white hover:text-cyan-400 transition duration-300"
        >
          About Us
        </Link>
        <Link
          to={'/ContactPage'}
          className="text-white hover:text-cyan-400 transition duration-300"
        >
         Contact Us
        </Link>
      </div>
    </footer>
  );
};

export default Footer;