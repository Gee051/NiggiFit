"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaDumbbell, FaRunning, FaFireAlt, FaHeartbeat } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import SlideButtons from "./SlideButtons";

const Services = () => {
  const controls = useAnimation();
  const burgerControls = useAnimation();
  const ref = useRef(null);
  const burgerRef = useRef(null);

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

  useEffect(() => {
    const burgerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          burgerControls.start("visible");
        }
      },
      { threshold: 0.2 }
    );

    if (burgerRef.current) {
      burgerObserver.observe(burgerRef.current);
    }

    return () => {
      if (burgerRef.current) {
        burgerObserver.unobserve(burgerRef.current);
      }
    };
  }, [burgerControls]);

  return (
    <section id="services" ref={ref} className="py-16 bg-[#151016] text-white">
      <div className="container mx-auto px-4">
        {/* Heading: What We Offer */}
        <motion.h1
          className="text-5xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <span className="gradient-text">What We Offer</span>
        </motion.h1>

        {/* Swiper for mobile screens */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {/* Power Boost */}
          <SwiperSlide>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black/50 p-6 rounded-lg text-center shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, x: -100 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            >
              <FaDumbbell className="text-6xl text-purcolour mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-oracolour">
                Power Boost
              </h2>
              <h5 className="text-lg font-bold text-oracolour transition-colors duration-300 group-hover:text-white">
                For Strength Training
              </h5>
              <p className="text-gray-300">
                Build raw strength and endurance with our expert-guided strength
                training programs.
              </p>
            </motion.div>
          </SwiperSlide>

          {/* Cardio Blaze */}
          <SwiperSlide>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black/50 p-6 rounded-lg text-center shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, x: -100 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            >
              <FaRunning className="text-6xl text-purcolour mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-oracolour">
                Cardio Blaze
              </h2>
              <h5 className="text-lg font-bold text-oracolour transition-colors duration-300 group-hover:text-white">
                For Cardio Training
              </h5>
              <p className="text-gray-300">
                Set your heart racing and burn calories fast with our intense
                cardio workouts.
              </p>
            </motion.div>
          </SwiperSlide>

          {/* Fat Blaster */}
          <SwiperSlide>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black/50 p-6 rounded-lg text-center shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, x: 100 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
            >
              <FaFireAlt className="text-6xl text-purcolour mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-oracolour">
                Fat Blaster
              </h2>
              <h5 className="text-lg font-bold text-oracolour transition-colors duration-300 group-hover:text-white">
                For Fat Burning
              </h5>
              <p className="text-gray-300">
                Shed those extra pounds with focused fat-burning workouts.
              </p>
            </motion.div>
          </SwiperSlide>

          {/* Life Force */}
          <SwiperSlide>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black/50 p-6 rounded-lg text-center shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, x: 100 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
            >
              <FaHeartbeat className="text-6xl text-purcolour mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-oracolour">
                Life Force
              </h2>
              <h5 className="text-lg font-bold text-oracolour transition-colors duration-300 group-hover:text-white">
                For Health Fitness
              </h5>
              <p className="text-gray-300">
                Achieve holistic health and energy with our personalized
                wellness programs.
              </p>
            </motion.div>
          </SwiperSlide>
          <motion.div
               className="lg:hidden block m-4"
              initial={{ opacity: 0, x: 100 }}
              animate={burgerControls}
              variants={{
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            >
            <SlideButtons />
            </motion.div>
        </Swiper>

        {/* Call to Action Section with Burger Image */}
        <div ref={burgerRef} className="mt-16">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={burgerControls}
            variants={{
              visible: { opacity: 1 },
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Text Section */}
            <motion.div
              className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8"
              initial={{ opacity: 0, x: -100 }}
              animate={burgerControls}
              variants={{
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-oracolour mb-4">
                Even Burgers Get Fit at Niggifit!
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Join the fitness revolution where even your guilty pleasures can
                stay in shape.{" "}
                <span className="text-oracolour font-bold">
                  Be Faster than your Fast Foods!
                </span>{" "}
                Let`s build your strength together at{" "}
                <span className="text-purcolour font-extrabold">Niggifit!</span>
              </p>
              <button className="px-6 py-3 bg-oracolour text-black font-bold rounded-lg hover:bg-purcolour transition-all">
                Choose your plan below
              </button>
            </motion.div>

          
            <motion.div
              className="w-full md:w-1/2 flex justify-center md:mt-0 mt-4"
              initial={{ opacity: 0, x: 100 }}
              animate={burgerControls}
              variants={{
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            >
              <Image
                src="/assets/img3-.png"
                alt="Strong Burger"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
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

export default Services;
