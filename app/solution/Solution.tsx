"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { Variants } from "framer-motion";
export default function Solution() {
  const bannerRef = useRef(null);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const highlightsRef = useRef(null);
  const containerRef = useRef(null);

  const isBannerInView = useInView(bannerRef, {
    once: true,
    margin: "-100px",
  });
  const isHeroInView = useInView(heroRef, {
    once: true,
    margin: "-100px",
  });
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isHighlightsInView = useInView(highlightsRef, {
    once: true,
    margin: "-100px",
  });

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  // Spring physics for smoother animations
  const springY = useSpring(y1, { stiffness: 400, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 300, damping: 30 });

  // Enhanced animation variants
  const fadeInUpVariants: Variants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      filter: "blur(10px)"
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      rotateY: -10
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const leftSlideVariants: Variants = {
    hidden: { 
      x: -100, 
      opacity: 0,
      skewX: -5
    },
    visible: {
      x: 0,
      opacity: 1,
      skewX: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const rightSlideVariants: Variants = {
    hidden: { 
      x: 100, 
      opacity: 0,
      skewX: 5
    },
    visible: {
      x: 0,
      opacity: 1,
      skewX: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const scaleInVariants: Variants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      rotateZ: -2
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateZ: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const bannerTextVariants: Variants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      skewY: 3
    },
    visible: {
      y: 0,
      opacity: 1,
      skewY: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        delay: 0.2
      },
    },
  };

  const serviceCardVariants: Variants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      rotateX: 15
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: i * 0.1
      }
    }),
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  }; 

  const statsVariants: Variants = {
    hidden: { 
      scale: 0.5, 
      opacity: 0,
      rotateZ: -10
    },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      rotateZ: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.5 + i * 0.1
      }
    }),
  }; 

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Banner Section - Enhanced with parallax and better animations */}
      <section
        ref={bannerRef}
        className="relative h-screen overflow-hidden bg-white"
      >
        {/* Background Image with parallax effect */}
        <motion.div 
          className="absolute inset-0" 
          style={{ y: springY }}
        >
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&q=80"
            alt="Display Technology Banner"
            fill
            className="object-cover"
          />
          {/* Enhanced overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </motion.div>

        {/* Banner Content with enhanced animations */}
        <motion.div
          className="relative z-10 h-full flex items-center px-6 lg:px-12"
          initial="hidden"
          animate={isBannerInView ? "visible" : "hidden"}
          variants={staggerContainerVariants}
        >
          <div className="max-w-6xl w-full">
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight"
              variants={bannerTextVariants}
            >
              SOLUTIONS
            </motion.h1>
            <motion.p
              className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl"
              variants={bannerTextVariants}
            >
              Next-Generation Display Technology for Every Industry
            </motion.p>
          </div>
        </motion.div>
      </section>

      <section
        ref={heroRef}
        className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white"
      >
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
          variants={staggerContainerVariants}
        >
          <motion.p
            className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4"
            variants={fadeInUpVariants}
          >
            Industry Leader
          </motion.p>
          <motion.h1
            className="text-4xl lg:text-5xl font-bold leading-tight mb-6 tracking-tight"
            variants={fadeInUpVariants}
          >
            AERO Display Solutions: Your Digital Powerhouse Partner
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed max-w-2xl"
            variants={fadeInUpVariants}
          >
            Revolutionizing consumer satisfaction in the ever-evolving display
            industry with innovative, scalable solutions that meet market
            demands.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Section - Enhanced with better card animations */}
      <section
        ref={servicesRef}
        id="services"
        className="py-12 px-4 lg:px-6 bg-gradient-to-b from-white to-gray-50"
      >
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate={isServicesInView ? "visible" : "hidden"}
          variants={staggerContainerVariants}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.p
              className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3"
              variants={fadeInUpVariants}
            >
              Our Solutions
            </motion.p>
            <motion.h2
              className="text-4xl lg:text-5xl font-bold tracking-tight mb-4"
              variants={fadeInUpVariants}
            >
              Industry-Specific Solutions
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUpVariants}
            >
              Tailored display solutions designed to meet the unique demands of
              your industry
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Services List with enhanced animations */}
            <motion.div
              className="space-y-3"
              variants={staggerContainerVariants}
            >
              {[
                {
                  number: "01",
                  title: "Retail",
                  description:
                    "Innovative in-store LED solutions that enhance product visibility and customer experience.",
                  href: "/solution/retail",
                  icon: "🛍️",
                },
                {
                  number: "02",
                  title: "Corporate",
                  description:
                    "Professional-grade displays for corporate communications, lobbies and conference rooms.",
                  href: "/solution/corporate",
                  icon: "🏢",
                },
                {
                  number: "03",
                  title: "Education",
                  description:
                    "Interactive and durable display systems tailored for classrooms and lecture halls.",
                  href: "/solution/education",
                  icon: "🎓",
                },
                {
                  number: "04",
                  title: "Control Room",
                  description:
                    "Reliable mission-critical video walls for monitoring and operations centers.",
                  href: "/solution/control",
                  icon: "🎛️",
                },
                {
                  number: "05",
                  title: "DOOH",
                  description:
                    "Digital out-of-home solutions with high brightness and remote content management.",
                  href: "/solution/dooh",
                  icon: "📺",
                },
                {
                  number: "06",
                  title: "Airport",
                  description:
                    "Large-format displays for wayfinding, arrivals and promotions in airports.",
                  href: "/solution/airport",
                  icon: "✈️",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  className="group relative p-3 transition-all duration-500"
                  custom={index}
                  variants={serviceCardVariants}
                  whileHover="hover"
                >
                  <div className="overflow-hidden">
                    {/* Header */}
                    <div className="">
                      <div className="flex items-center space-x-2">
                        <div>
                          <span className="text-[10px] font-mono text-gray-400 block mb-0.5">
                            {item.number}
                          </span>
                          <h3 className="text-lg lg:text-xl font-bold tracking-tight group-hover:text-gray-900 transition-colors">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-2 text-xs lg:text-sm">
                      {item.description}
                    </p>

                    {/* CTA Link with enhanced animation */}
                    <a
                      href={item.href}
                      className="inline-flex items-center space-x-1 text-black font-semibold text-xs group/link hover:gap-2 transition-all duration-300"
                    >
                      <span>Explore Solution</span>
                      <svg
                        className="w-3 h-3 transform group-hover/link:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Sticky Image Section with enhanced animation */}
            <div className="lg:sticky lg:top-20 h-fit">
              <motion.div variants={imageVariants}>
                <div className="relative h-[300px] lg:h-[450px] overflow-hidden shadow-xl group/img">
                  {/* Enhanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>

                  {/* Image with zoom effect */}
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop&q=80"
                    alt="Professional display solutions"
                    fill
                    className="object-cover transform group-hover/img:scale-110 transition-transform duration-1000"
                  />

                  {/* Bottom Text Overlay with enhanced animation */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-4 z-20"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  >
                    <p className="text-white text-sm font-semibold mb-1">
                      Trusted by Industry Leaders
                    </p>
                    <p className="text-white/80 text-xs">
                      Delivering excellence across multiple sectors worldwide
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Highlights Section - Enhanced with better animations */}
      <section
        ref={highlightsRef}
        id="highlights"
        className="py-20 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white"
      >
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate={isHighlightsInView ? "visible" : "hidden"}
          variants={staggerContainerVariants}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div variants={leftSlideVariants}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                Why Choose UNV <span className="text-blue-400">Display</span>
              </h2>
              <motion.div 
                className="h-1 w-20 bg-black rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "5rem" }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              ></motion.div>
            </motion.div>

            <motion.div variants={rightSlideVariants}>
              <div className="space-y-6">
                <motion.p 
                  className="text-gray-700 leading-relaxed text-base"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                  With AERO, you get state-of-the-art technology for commercial
                  display solutions. Our commitment to innovation combines
                  cutting-edge technology with design that challenges market
                  standards.
                </motion.p>
                <motion.p 
                  className="text-gray-700 leading-relaxed text-base"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                  From innovative development to world-class manufacturing and
                  after-sales service, every aspect champions quality,
                  integrity, and exceptional results.
                </motion.p>
              </div>

              {/* Stats with enhanced animations */}
              <motion.div
                className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-gray-200"
                variants={staggerContainerVariants}
              >
                {[
                  { value: "15+", label: "Years Experience" },
                  { value: "500+", label: "Projects" },
                  { value: "98%", label: "Satisfaction" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    custom={index}
                    variants={statsVariants}
                  >
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-600 tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}