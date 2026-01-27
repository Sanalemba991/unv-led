"use client";
import React, { useRef } from "react";
import {
  Shield,
  Zap,
  Headphones,
  TrendingUp,
  RefreshCw,
  Grid3x3,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function Corporate() {
  // Refs for animation sections
  const heroRef = useRef(null);
  const architectureRef = useRef(null);
  const crmRef = useRef(null);
  const modularRef = useRef(null);
  const processRef = useRef(null);
  const hrRef = useRef(null);

  // Track if sections are in view
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const architectureInView = useInView(architectureRef, {
    once: true,
    margin: "-100px",
  });
  const crmInView = useInView(crmRef, { once: true, margin: "-100px" });
  const modularInView = useInView(modularRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const hrInView = useInView(hrRef, { once: true, margin: "-100px" });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Hero section specific animations
  const heroTitle = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const heroContent = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const heroImage = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const paragraphStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const paragraphItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // HR Section specific animations
  const hrImageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.1 * i,
        ease: "easeOut",
      },
    }),
  };

  const hrContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className=" bg-white text-black">
      {/* Hero Section with Professional Animations */}
      <section ref={heroRef} className="max-w-7xl mx-auto px-6 py-20 text-black">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-4xl font-bold mb-6 text-black"
              variants={heroTitle}
            >
              HubSpot is powerful. We make it work for you.
            </motion.h2>
            
            <motion.div 
              className="space-y-4 text-black leading-relaxed"
              variants={paragraphStagger}
            >
              <motion.p variants={paragraphItem}>
                HubSpot provides your marketing, sales and customer service
                teams with the tools they need to grow your business. But you
                need to use HubSpot effectively to see the results.
              </motion.p>
              <motion.p variants={paragraphItem}>
                We work with the largest and most successful companies globally.
                We have supported some of the world's biggest brands with their
                HubSpot implementations, including Airbus, ABB, Suzuki, Fortum,
                and World Vision.
              </motion.p>
              <motion.p variants={paragraphItem}>
                Our team of 120+ certified HubSpot consultants bring decades of
                experience helping businesses get the most from HubSpot. We have
                more certified HubSpot experts than any other Elite Partner, and
                we use this expertise to help you grow.
              </motion.p>
              <motion.p variants={paragraphItem}>
                http://avidly.com/hubspot implements the powerful CRM platform
                HubSpot by configuring, customizing, and integrating it with
                your tools, everything you need to increase leads, conversions,
                and revenues.
              </motion.p>
            </motion.div>

            <motion.button 
              className="mt-8 px-8 py-3 border border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300"
              variants={heroContent}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
          
          <motion.div
            className="relative h-96 overflow-hidden "
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={heroImage}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Team working on HubSpot platform"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Custom Architecture Section */}
      <section ref={architectureRef} className="  bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            animate={architectureInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-2xl md:text-3xl font-medium text-center mb-3 text-black">
              Custom architecture with enterprise control
            </h2>
            <div className="w-20 h-0.5 bg-black mx-auto mb-16"></div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-12 mb-16"
            initial="hidden"
            animate={architectureInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div
              className="flex flex-col items-center text-center"
              variants={staggerItem}
            >
              <div className="w-14 h-14 mb-6 flex items-center justify-center border border-black rounded">
                <Shield className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-base font-medium mb-3 text-black">Fully controlled</h3>
              <p className="text-black text-xs leading-relaxed">
                AI fully controlled by your team and isolated
                <br />
                in secure environment
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center"
              variants={staggerItem}
            >
              <div className="w-14 h-14 mb-6 flex items-center justify-center border border-black rounded">
                <Zap className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-base font-medium mb-3 text-black">Scalable framework</h3>
              <p className="text-black text-xs leading-relaxed">
                A developed, future-ready framework to
                <br />
                meet evolving needs
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center"
              variants={staggerItem}
            >
              <div className="w-14 h-14 mb-6 flex items-center justify-center border border-black rounded">
                <Headphones className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-base font-medium mb-3 text-black">Quality & support</h3>
              <p className="text-black text-xs leading-relaxed">
                Dedicated support, including best
                <br />
                practice support
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center"
            initial="hidden"
            animate={architectureInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <p className="text-black text-sm leading-relaxed">
              For peace of mind, get expert coverage while your internal teams
              can
              <br />
              focus on value and receive 3 months of{" "}
              <span className="font-semibold">Hyper-care post launch</span>
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* White Feature Sections */}
      <section className="bg-white pt-28 ml-16 mr-16 text-black">
        {/* Modular Onboarding */}
        <div className="grid md:grid-cols-2">
          <motion.div
            ref={modularRef}
            className="px-8 md:px-16 py-16 md:py-24 flex flex-col justify-center"
            initial="hidden"
            animate={modularInView ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <h2 className="text-3xl md:text-4xl font-light leading-tight mb-8 text-black">
              Modular onboarding, fast
              <br />
              time-to-value
            </h2>
            <ul className="space-y-3 mb-10">
              <li className="text-sm text-black leading-relaxed">
                • Rapid project activation: Fast-forward, outcomes-focused,
                modules
              </li>
              <li className="text-sm text-black leading-relaxed">
                • Configurable workflows: Purpose-built for enterprise, driving
                ROI every step
              </li>
              <li className="text-sm text-black leading-relaxed">
                • Eliminate Roder: results and time-focusable
              </li>
              <li className="text-sm text-black leading-relaxed">
                • Activate for value: Adapt encouragement and discipline
              </li>
            </ul>
            <button className="px-8 py-2.5 border border-black text-black text-sm font-light hover:bg-black hover:text-white transition-all duration-300 self-start">
              Signals To accelerate
            </button>
          </motion.div>
          <motion.div
            className="h-64 md:h-auto bg-white"
            initial="hidden"
            animate={modularInView ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* 6-gate Process */}
        <div className="grid md:grid-cols-2">
          <motion.div
            className="h-64 md:h-auto bg-white order-2 md:order-1"
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Strategic planning"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            ref={processRef}
            className="px-8 md:px-16 py-16 md:py-24 flex flex-col justify-center order-1 md:order-2"
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            <h2 className="text-3xl md:text-4xl font-light leading-tight mb-8 text-black">
              6-gate process,
              <br />
              guaranteed assurance
            </h2>
            <ul className="space-y-3 mb-10">
              <li className="text-sm text-black leading-relaxed">
                • We follow a structured 6-gate process for all enterprise-level
                projects
              </li>
              <li className="text-sm text-black leading-relaxed">
                • Each stage milestone quality testing
              </li>
              <li className="text-sm text-black leading-relaxed">
                • Live coord by experience
              </li>
              <li className="text-sm text-black leading-relaxed">
                • Gated reviews ensure compliance and design best-practice
              </li>
              <li className="text-sm text-black leading-relaxed">
                • Pre-launched integrated testing, stability, and every corner
              </li>
            </ul>
            <button className="px-8 py-2.5 border border-black text-black text-sm font-light hover:bg-black hover:text-white transition-all duration-300 self-start">
              Signals To accelerate
            </button>
          </motion.div>
        </div>
      </section>

      {/* HR Management Section with Smooth Animations */}
      <section ref={hrRef} className="bg-gray-100 mt-20 flex items-center justify-center p-8">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image Grid with Staggered Animations */}
          <motion.div 
            className="relative w-full max-w-md h-[600px]"
            initial="hidden"
            animate={hrInView ? "visible" : "hidden"}
          >
            {/* Top Left Image - Tall */}
            <motion.div 
              className="absolute top-0 left-0 w-[48%] h-[58%] bg-gray-300 overflow-hidden shadow-lg"
              custom={0}
              variants={hrImageVariants}
            >
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=600&fit=crop" 
                alt="Business presentation"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Top Right Image */}
            <motion.div 
              className="absolute top-0 right-0 w-[48%] h-[45%] bg-gray-300 overflow-hidden shadow-lg"
              custom={1}
              variants={hrImageVariants}
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop" 
                alt="Business meeting"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Bottom Left Image */}
            <motion.div 
              className="absolute bottom-0 left-0 w-[48%] h-[38%] bg-gray-300 overflow-hidden shadow-lg"
              custom={2}
              variants={hrImageVariants}
            >
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop" 
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Bottom Right Image - Tall */}
            <motion.div 
              className="absolute bottom-0 right-0 w-[48%] h-[51%] bg-gray-300 overflow-hidden shadow-lg"
              custom={3}
              variants={hrImageVariants}
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=600&fit=crop" 
                alt="Professional consultation"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Content with Animation */}
          <motion.div 
            className="text-black space-y-6"
            initial="hidden"
            animate={hrInView ? "visible" : "hidden"}
            variants={hrContentVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold leading-tight"
              variants={hrContentVariants}
            >
              Complete HR<br />
              Management<br />
              Support Services
            </motion.h2>
            
            <motion.p 
              className="text-gray-800 text-base md:text-lg leading-relaxed max-w-md"
              variants={hrContentVariants}
              transition={{ delay: 0.2 }}
            >
              Dignissim suspendisse in est ante in nibh mauris. Viverra ipsum nunc 
              aliquet et donec enim elementum in lacus etiam. Nunc nunc varius sapien 
              at ligula ullamcorper malesuada proin. Rutrum mattis orci et tellus 
              elementum.
            </motion.p>
            
            <motion.button 
              className="px-8 py-3 border border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300"
              variants={hrContentVariants}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}