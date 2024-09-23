"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.2 } // Trigger animation when 20% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-16 bg-[#130c14] text-white"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h1
          className="text-5xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <span className="gradient-text">Choose Your Plan</span>
        </motion.h1>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Monthly Plan */}
          <motion.div
            className="bg-black/50 p-8 rounded-lg shadow-lg text-center transform transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 100 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-purcolour">Monthly Plan</h2>
            <p className="text-6xl font-extrabold mb-4">$30</p>
            <p className="text-lg text-gray-300 mb-6">
              Perfect for those looking to get started with a short-term commitment.
            </p>
            <div className="space-y-4">
              <div className="flex justify-center items-center space-x-2">
                <FaCheckCircle className="text-oracolour text-xl" />
                <span>Access to all equipment</span>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <FaCheckCircle className="text-oracolour text-xl" />
                <span>Expert trainer support</span>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <FaCheckCircle className="text-oracolour text-xl" />
                <span>Group fitness classes</span>
              </div>
            </div>
          </motion.div>

          {/* 3-Month Plan */}
          <motion.div
            className="bg-black/50 p-8 rounded-lg shadow-lg text-center transform transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 100 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-purcolour">3-Month Plan</h2>
            <p className="text-6xl font-extrabold mb-4">$80</p>
            <p className="text-lg text-gray-300 mb-6">
              Commit for 3 months and save more with full access to all our services.
            </p>
            <div className="space-y-4">
              <div className="flex justify-center items-center space-x-2">
                <FaCheckCircle className="text-oracolour text-xl" />
                <span>Access to all equipment</span>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <FaCheckCircle className="text-oracolour text-xl" />
                <span>Expert trainer support</span>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <FaCheckCircle className="text-oracolour text-xl" />
                <span>Personalized workout plan</span>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <FaCheckCircle className="text-oracolour text-xl" />
                <span>Diet and nutrition guidance</span>
              </div>
            </div>
          </motion.div>

          {/* Yearly Plan */}
          <motion.div
            className="bg-black/50 p-8 rounded-lg shadow-lg text-center transform transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 100 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-purcolour">Yearly Plan</h2>
            <p className="text-6xl font-extrabold mb-4">$300</p>
            <p className="text-lg text-gray-300 mb-6">
              Our best value plan. Enjoy all benefits with no restrictions for a full year.
            </p>
            <div className="space-y-4">
              <div className="flex justify-center items-center space-x-2">
                <FaCheckCircle className="text-oracolour text-xl" />
                <span>Access to all equipment</span>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <FaCheckCircle className="text-oracolour text-xl" />
                <span>Expert trainer support</span>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <FaCheckCircle className="text-oracolour text-xl" />
                <span>Personalized workout plan</span>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <FaCheckCircle className="text-oracolour text-xl" />
                <span>Nutrition & wellness coaching</span>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <FaCheckCircle className="text-oracolour text-xl" />
                <span>Free entry to events</span>
              </div>
            </div>
          </motion.div>
        </div>
        
      </div>

      {/* Gradient Text Styling */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(to right, #7b0072, #ff8c01);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Pricing;
