"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaCheckCircle, FaHeartbeat, FaDumbbell } from "react-icons/fa";
import Image from "next/image";

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <section id="about" ref={ref} className="py-16 bg-[#0e0b0d] text-white">

<motion.div
        className="md:text-6xl text-4xl font-bold text-center mb-7 " 
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      > <span className="gradient-text">All About Niggifit</span>
      </motion.div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

        

        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
          variants={{ visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src="/assets/img5.jpeg"
            alt="Niggifit Gym"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

     
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
          variants={{ visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
    
          <p className="text-xl text-gray-300 m-3">
            Welcome to <span className="text-purcolour text-xl font-extrabold">Niggifit</span> – the ultimate gym experience built for your success. 
            At Niggifit, we believe in a balanced approach to health and fitness, offering cutting-edge equipment, 
            personalized workout plans, and an environment that motivates you to achieve your goals. Whether you`re 
            looking to build strength, burn fat, or simply maintain a healthy lifestyle, <span className="text-oracolour text-xl font-extrabold">
            Niggifit</span> got you covered. AOG
          </p>
          
   
          <div className="space-y-4 md:m-0 m-6">
            <div className="flex items-center space-x-4">
              <FaCheckCircle className="text-oracolour text-3xl" />
              <span className="text-xl font-semibold text-gray-200">State-of-the-Art Equipment</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaHeartbeat className="text-purcolour text-3xl" />
              <span className="text-xl font-semibold text-gray-200">Personalized Workout Plans</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaDumbbell className="text-oracolour text-3xl" />
              <span className="text-xl font-semibold text-gray-200">Expert Trainers and Support</span>
            </div>
          </div>
        </motion.div>
      </div>

 
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

export default About;
