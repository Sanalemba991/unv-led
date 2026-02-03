"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { Variants } from "framer-motion";
export default function Line() {
  const containerRef = useRef(null);
  const [animatedIcons, setAnimatedIcons] = useState([]);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
          <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "AUDIO VISUAL",
      description: "Technology plays a pivotal role in the success of any event. At AVPartners, we move fast so that the show goes on. We're here to provide seamless, customized solutions.",
      position: "left"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
          <path d="M12 2L4 8l8 6 8-6-8-6z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 14l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "AVPARTNERS",
      description: "More of AVPartners core values can be found in our inclusive culture. We embrace diversity which drives innovation & value across our transparent shared approach.",
      position: "right"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
          <circle cx="12" cy="8" r="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 21V19C6 16.79 7.79 15 10 15H14C16.21 15 18 16.79 18 19V21" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="18" cy="8" r="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "STYLING",
      description: "Whether it's custom branding or event decor, at AVPartners, we move hard to bring all the elements together; from creative, through to implementation.",
      position: "left"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
          <path d="M12 2L12 22" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="6" r="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="18" r="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "PEOPLE",
      description: "At AVPartners we recognize technology is transitive, but this is always the focus on who is our people that deliver the solutions to meet the technology.",
      position: "right"
    }
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.6
      }
    }
  };



  const lineVariants: Variants = {
    hidden: { 
      width: 0,
      opacity: 0 
    },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const verticalLineVariants: Variants = {
    hidden: { 
      height: 0,
      opacity: 0 
    },
    visible: {
      height: "100%",
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.2
      }
    }
  };

  const contentVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: -30 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: 0.4
      }
    }
  };

  const contentRightVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: 30 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: 0.4
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6" ref={containerRef}>
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h1
          className="text-center text-5xl tracking-[0.3em] text-gray-400 mb-20 font-light"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          OUR <span className="text-gray-700 font-semibold">HISTORY</span>
        </motion.h1>

        <div className="relative">
          {/* Animated vertical dotted line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px"
            variants={verticalLineVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="h-full border-l-2 border-dotted border-gray-300" />
          </motion.div>

          <AnimatePresence>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative mb-16 lg:mb-20"
                variants={itemVariants}
                custom={index}
              >
                {service.position === "left" ? (
                  <div className="flex items-start justify-between">
                    {/* Left content with smooth animation */}
                    <motion.div 
                      className="w-5/12 text-right pr-8"
                      variants={contentVariants}
                    >
                      <h3 className="text-sm font-bold tracking-wider text-gray-800 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      
                    </motion.div>

                    {/* Center icon with animated connecting line */}
                    <div className="relative flex flex-col items-center">
                      <div 
                        className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-white shadow-lg relative z-10"
                      >
                        {service.icon}
                      </div>
                      
                      {/* Animated branch line to the left */}
                      <motion.div 
                        className="absolute left-1/2 top-12 w-40 h-px bg-gradient-to-r from-transparent to-gray-400 -translate-x-full"
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                      />
                    </div>

                    {/* Right empty space */}
                    <div className="w-5/12" />
                  </div>
                ) : (
                  <div className="flex items-start justify-between">
                    {/* Left empty space */}
                    <div className="w-5/12" />

                    {/* Center icon with animated connecting line */}
                    <div className="relative flex flex-col items-center">
                      <div 
                        className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-white shadow-lg relative z-10"
                      >
                        {service.icon}
                      </div>
                      
                      {/* Animated branch line to the right */}
                      <motion.div 
                        className="absolute left-1/2 top-12 w-40 h-px bg-gradient-to-l from-transparent to-gray-400"
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                      />
                    </div>

                    {/* Right content with smooth animation */}
                    <motion.div 
                      className="w-5/12 text-left pl-8"
                      variants={contentRightVariants}
                    >
                      <h3 className="text-sm font-bold tracking-wider text-gray-800 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}