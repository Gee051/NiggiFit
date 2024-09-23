"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { FaRegSmileBeam } from "react-icons/fa";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center bg-[#010101] overflow-hidden"
    >

      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <Image
          src="/assets/img2.jpeg"
          alt="Background"
          layout="fill"
          objectFit="contain"
          className="opacity-25"
        />
      </motion.div>

 
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
      >
   
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold gradient-text shine-animation tracking-widest">
          N I G G I F I T
        </h1>

        {/* Video beside the text */}
        <motion.div
  className="rounded-full border-purcolour border-[3px] mt-4 md:mt-0"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
  style={{ zIndex: 20 }}
>
  <motion.video
    src="/videos/gym.mp4"
    className="rounded-full object-cover w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] hover:scale-110 transition-transform duration-300 ease-in-out"
    autoPlay
    loop
    muted
    playsInline
    whileHover={{ scale: 1.1 }}
  />
</motion.div>

      </motion.div>

      <motion.div
        className="absolute md:bottom-16 sm:bottom-24 bottom-40 flex flex-row justify-center items-center space-y-6  space-x-8 z-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 3 }}
      >
 
        <motion.div
          className="flex flex-col items-center"
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
        >
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-purcolour">Sweat</span>
          <div className="h-1 w-8 sm:w-10 md:w-16 bg-oracolour rounded mt-1" />
        </motion.div>


        <motion.div
          className="flex flex-col items-center"
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{ delay: 3.4, duration: 0.8 }}
        >
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-oracolour">Smile</span>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <FaRegSmileBeam className="text-3xl sm:text-4xl md:text-5xl text-oracolour" />
          </motion.div>
        </motion.div>

    
        <motion.div
          className="flex flex-col items-center"
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{ delay: 3.6, duration: 0.8 }}
        >
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-purcolour">Repeat</span>
          <div className="h-1 w-8 sm:w-10 md:w-16 bg-oracolour rounded mt-1" />
        </motion.div>
      </motion.div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(to right, #7b0072, #ff8c01);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
        }

        .shine-animation {
          background-size: 200% auto;
          animation: shine 3s linear infinite;
        }

        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeSection;
