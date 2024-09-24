"use client";
import Image from "next/image";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll"; // Import from react-scroll

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email); // Simple email validation regex
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setMessage("Subscribed successfully!");
      setEmail(""); // Clear input after successful subscription
    } else {
      setMessage("Email not valid");
      setEmail(""); // Clear input for re-entry
    }
  };

  return (
    <footer className="bg-[#0f0f0f] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main grid layout for Logo, Quick Links, and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo and Tagline Section */}
          <div className="flex flex-col items-start space-y-4">
            <div className="mb-4">
              <Image
                src="/assets/gymfit.png"
                width={200}
                height={200}
                alt="Niggifit Logo"
              />
            </div>
            <h2 className="text-4xl font-bold">NIGGIFIT</h2>
            <p className="text-oracolour text-lg">Sweat, Smile, Repeat</p>
            <p className="text-gray-400 mt-2 text-sm">Get fit with Niggifit</p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-2xl font-semibold text-purcolour">Quick Links</h3>
            <ul className="space-y-2">
              {["home", "about", "services", "pricing", "contact"].map((item) => (
                <li key={item}>
                  <ScrollLink
                    to={item}
                    smooth={true}
                    offset={-70} // Adjust this offset to match your fixed header height
                    duration={500}
                    className="cursor-pointer hover:text-oracolour transition-colors"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription Section */}
          <div className="flex flex-col items-start space-y-4 w-full">
            <h3 className="text-2xl font-semibold text-purcolour">Subscribe to our Newsletter</h3>
            <form onSubmit={handleSubscribe} className="w-full flex flex-col md:flex-row md:items-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 w-full bg-gray-800 text-white rounded-lg outline-none focus:border-oracolour focus:ring-oracolour mb-4 md:mb-0 md:mr-4 transition-all"
                required
              />
              <button
                type="submit"
                className="p-3 bg-oracolour text-black font-bold rounded-lg hover:bg-purcolour transition-all w-full md:w-auto"
              >
                Subscribe
              </button>
            </form>
            {message && (
              <p className={`mt-4 ${message === "Subscribed successfully!" ? "text-green-500" : "text-red-500"}`}>
                {message}
              </p>
            )}
          </div>
        </div>

        {/* Centralized Social Media and Footer Copy Section */}
        <div className="mt-12 flex flex-col items-center">
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-4">
            <FaFacebook className="text-2xl hover:text-purcolour transition-all" />
            <FaInstagram className="text-2xl hover:text-purcolour transition-all" />
            <FaTwitter className="text-2xl hover:text-purcolour transition-all" />
          </div>
          
          {/* Footer Copy */}
          <p className="text-sm">&copy; {new Date().getFullYear()} Niggifit. All Rights Reserved.</p>
        </div>
      </div>

      {/* Styling */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(to right, #7b0072, #ff8c01);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        input:focus::placeholder {
          transition: opacity 0.4s ease;
          opacity: 0;
        }

        @media (max-width: 768px) {
          /* Ensure the logo and quick links align side by side on smaller screens */
          .grid-cols-3 {
            grid-template-columns: 1fr 1fr !important;
          }

          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .md\\:flex-row {
            flex-direction: column !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
