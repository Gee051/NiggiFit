"use client";
import { useState, useEffect } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    enquiry: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email } = formData;

    if (!firstName || !lastName || !email) {
      setMessage("Please fill all the required fields.");
    } else {
      setMessage("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        enquiry: "",
      });
    }
  };


  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(""); 
      }, 3000);
      return () => clearTimeout(timer); 
    }
  }, [message]);

  return (
    <section id="contact" className="py-16 bg-[#110e11] text-white">
      <motion.h1
        className="font-extrabold text-3xl md:text-5xl text-center m-2 mb-4 text-oracolour"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        Get Fit! Don’t Quit with Niggifit!
      </motion.h1>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 bg-black/50 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1 className="text-5xl font-bold text-center mb-8 gradient-text">
            Contact Us
          </h1>
          <div className="mb-4">
            <label className="block text-purcolour text-lg mb-2">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full p-3 bg-gray-800 text-white rounded-lg outline-none focus:border-oracolour focus:ring-oracolour transition-all duration-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-purcolour text-lg mb-2">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full p-3 bg-gray-800 text-white rounded-lg outline-none focus:border-oracolour focus:ring-oracolour transition-all duration-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-purcolour text-lg mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 bg-gray-800 text-white rounded-lg outline-none focus:border-oracolour focus:ring-oracolour transition-all duration-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-purcolour text-lg mb-2">Enquiry</label>
            <textarea
              name="enquiry"
              value={formData.enquiry}
              onChange={handleChange}
              placeholder="Your enquiry (optional)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg outline-none focus:border-oracolour focus:ring-oracolour transition-all duration-300"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-oracolour text-black font-bold rounded-lg hover:bg-purcolour transition-all"
          >
            Submit
          </button>

          {message && (
            <p
              className={`mt-4 ${
                message.includes("success")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
        </motion.form>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src="/assets/img4.jpeg"
            alt="contact"
            width={500}
            height={700}
            className="rounded-lg shadow-lg mb-4"
          />
          <h1 className="text-xl font-bold text-center text-oracolour">
            Stay Stronger Than Your Craving
          </h1>
        </motion.div>
      </div>

      {/* Contact Information */}
      <div className="flex items-center justify-center mt-12 space-x-4">
        <FaPhone className="text-oracolour text-3xl" />
        <span className="text-lg font-semibold">+234 816 000 6700</span>
        <FaWhatsapp className="text-oracolour text-3xl" />
      </div>

      {/* Gradient Text Styling */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(to right, #7b0072, #ff8c01);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        input::placeholder,
        textarea::placeholder {
          color: #aaa;
          transition: color 0.3s ease;
        }
        input:focus::placeholder,
        textarea:focus::placeholder {
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Contact;
