"use client";

import Image from "next/image";
import { Twitter, Facebook, Instagram } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Variants } from "framer-motion";

export default function About() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  const isSection1InView = useInView(section1Ref, {
    once: true,
    margin: "-100px",
  });
  const isSection2InView = useInView(section2Ref, {
    once: true,
    margin: "-100px",
  });
  const isSection3InView = useInView(section3Ref, {
    once: true,
    margin: "-100px",
  });
  const isSection4InView = useInView(section4Ref, {
    once: true,
    margin: "-100px",
  });
  const isSection5InView = useInView(section5Ref, {
    once: true,
    margin: "-100px",
  });

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const leftVariants: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const rightVariants: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const socialIconVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Image grid animations
  const imageGridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const topLeftVariants: Variants = {
    hidden: { x: -50, y: -50, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const topRightVariants: Variants = {
    hidden: { x: 50, y: -50, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const middleRightVariants: Variants = {
    hidden: { x: 50, y: 0, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const bottomVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // New variants for the additional sections
  const fadeInUpVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const staggerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const statItemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <>
      <section ref={section1Ref} className="bg-white py-16 px-4 md:px-8">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isSection1InView ? "visible" : "hidden"}
        >
          {/* Left Image */}
          <motion.div className="flex justify-center" variants={leftVariants}>
            <div className="relative w-full h-96 md:h-[500px] overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop"
                alt="Person working on furniture"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div className="space-y-6" variants={rightVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              ABOUT US
            </h2>

            <motion.p
              className="text-gray-700 leading-relaxed"
              variants={rightVariants}
            >
              Hackney started as a small interior design firm in downtown
              Michigan, trying to help home buyers to make do with the new place
              with a modern look. We've been in the industry for over 20 years
              now, working with furniture restoration and making sense to help
              our clients see beyond the walls and floor plans, and to there
              with them from the get-go.
            </motion.p>

            <motion.p
              className="text-gray-700 leading-relaxed"
              variants={rightVariants}
            >
              Currently, we offer house makeo, interior design, and
              architectural services in order to help our customers find their
              forever homes as seamlessly and painlessly as possible. We value
              our customers' experience in everything we do, making sure that we
              won't take "ok" as an option.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              className="flex gap-6 pt-4"
              variants={containerVariants}
            >
              <motion.a
                href="#"
                className="text-gray-900 hover:text-gray-600 transition"
                variants={socialIconVariants}
              >
                <Twitter size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-900 hover:text-gray-600 transition"
                variants={socialIconVariants}
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-900 hover:text-gray-600 transition"
                variants={socialIconVariants}
              >
                <Instagram size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section ref={section2Ref} className="py-16 px-4 md:px-8 bg-gray-100">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isSection2InView ? "visible" : "hidden"}
        >
          {/* Left - Images Grid - Updated to match reference layout */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={imageGridVariants}
          >
            {/* Top left - Larger team photo */}
            <motion.div
              className="relative h-64 md:h-72 overflow-hidden shadow-md col-span-2 md:col-span-1 row-span-2"
              variants={topLeftVariants}
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop"
                alt="Team meeting in office"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Top right - Smaller team photo */}
            <motion.div
              className="relative h-32 md:h-36 overflow-hidden shadow-md"
              variants={topRightVariants}
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                alt="Team members collaborating"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Middle right - Office scene */}
            <motion.div
              className="relative h-32 md:h-36 overflow-hidden shadow-md"
              variants={middleRightVariants}
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                alt="Office workspace"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Bottom - Wide team photo */}
            <motion.div
              className="relative h-40 md:h-44 overflow-hidden shadow-md col-span-2"
              variants={bottomVariants}
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=300&fit=crop"
                alt="Team group photo"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right - Content - No changes needed */}
          <motion.div className="space-y-6" variants={rightVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Story
            </h2>

            <motion.p
              className="text-gray-700 leading-relaxed"
              variants={rightVariants}
            >
              Hackney started as a small interior design firm in downtown
              Michigan, driven by a passion to help homeowners transform their
              spaces into beautiful, functional environments. Our founder saw an
              opportunity to bridge the gap between affordable design and
              quality craftsmanship, and started working with local clients one
              project at a time.
            </motion.p>

            <motion.p
              className="text-gray-700 leading-relaxed"
              variants={rightVariants}
            >
              Over the past 20 years, our team has grown from just a handful of
              dedicated designers to a group of passionate professionals
              specializing in furniture restoration, interior design, and
              architectural services. We've learned that success isn't just
              about creating beautiful spaces—it's about listening to our
              clients, understanding their vision, and delivering results that
              exceed expectations.
            </motion.p>

            <motion.p
              className="text-gray-700 leading-relaxed"
              variants={rightVariants}
            >
              Today, Hackney remains committed to our core values: excellence in
              design, integrity in service, and genuine care for our clients'
              experience. Every project we undertake represents our promise to
              create spaces that are not just aesthetically pleasing, but truly
              livable and reflective of our clients' unique personalities and
              needs.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Vision, Mission, Value Section - Added Framer Motion */}
      <section ref={section3Ref} className="bg-gray-50 py-12">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isSection3InView ? "visible" : "hidden"}
        >
          <motion.div
            className="relative w-full h-64 md:h-80 overflow-hidden shadow-md"
            variants={imageVariants}
          >
            <Image
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop"
              alt="Vision"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div className="space-y-4" variants={rightVariants}>
            <motion.div variants={fadeInUpVariants}>
              <h3 className="text-xl font-semibold text-gray-900">Vision</h3>
              <p className="text-gray-700 text-sm">Unlimited New View</p>
            </motion.div>
            <motion.div variants={fadeInUpVariants}>
              <h3 className="text-xl font-semibold text-gray-900">Mission</h3>
              <p className="text-gray-700 text-sm">
                UNV considers innovation as a driver of the world, endeavors to
                build a safer world with advanced technologies and products, and
                helps people to fulfill work, social interaction, prosperity and
                self-realization in a safer environment.
              </p>
            </motion.div>
            <motion.div variants={fadeInUpVariants}>
              <h3 className="text-xl font-semibold text-gray-900">Value</h3>
              <p className="text-gray-700 text-sm">
                Innovative & Pragmatic, Collaborative & Win-win, Simple & Equal,
                To Continuously Improve.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Social Responsibility Section - Added Framer Motion */}
      <section ref={section4Ref} className="bg-white py-12">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isSection4InView ? "visible" : "hidden"}
        >
          <motion.div
            className="space-y-4 order-2 md:order-1"
            variants={leftVariants}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Social Responsibility
            </h3>
            <motion.p
              className="text-gray-700 text-sm"
              variants={fadeInUpVariants}
            >
              UNV has a strong awareness of protecting the environment. UNV is
              certified ISO14000 and leads the world in being eco-friendly
              during product development and production.
            </motion.p>
            <motion.p
              className="text-gray-700 text-sm"
              variants={fadeInUpVariants}
            >
              UNV also cares about people and the society. We think that we have
              the social responsibility to devote ourselves to public welfare
              which could help many charitable activities for the vulnerable
              groups.
            </motion.p>
          </motion.div>
          <motion.div
            className="relative w-full h-64 md:h-80 overflow-hidden shadow-md order-1 md:order-2"
            variants={imageVariants}
          >
            <Image
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop"
              alt="Social Responsibility"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </section>
      {/* Inlined Line component */}
      {(() => {
        const { useEffect, useRef, useState } = require("react");
        const { motion, useInView, useAnimation, AnimatePresence } = require("framer-motion");
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
        const containerVariants = {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.1,
            }
          }
        };

        const itemVariants = {
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

        const lineVariants = {
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

        const verticalLineVariants = {
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

        const contentVariants = {
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

        const contentRightVariants = {
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
      })()}
      <section ref={section5Ref} className="bg-gray-50 py-12">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-8"
          variants={containerVariants}
          initial="hidden"
          animate={isSection5InView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4"
            variants={fadeInUpVariants}
          >
            What determines an enterprise's vitality?
          </motion.h2>
          <motion.p
            className="text-gray-700 max-w-2xl mx-auto text-sm"
            variants={fadeInUpVariants}
          >
            UNV always thinks that to break its innovation vitality, ANV must
            have great innovation spirit deep into its heart. UNV always thinks
            that to break its innovation vitality, ANV must have great
            innovation spirit deep into its heart. UNV always thinks that to
            break its innovation vitality, ANV must have great innovation spirit
            deep into its heart.
          </motion.p>
        </motion.div>
        <motion.div
          className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-6 text-center"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isSection5InView ? "visible" : "hidden"}
        >
          <motion.div variants={statItemVariants}>
            <div className="text-2xl md:text-3xl font-bold text-blue-700">
              3000+
            </div>
            <div className="text-xs md:text-sm text-gray-600 mt-1">
              partners supplied
            </div>
          </motion.div>
          <motion.div variants={statItemVariants}>
            <div className="text-2xl md:text-3xl font-bold text-blue-700">
              10%
            </div>
            <div className="text-xs md:text-sm text-gray-600 mt-1">
              annual R&D investment
            </div>
          </motion.div>
          <motion.div variants={statItemVariants}>
            <div className="text-2xl md:text-3xl font-bold text-blue-700">
              NO.1
            </div>
            <div className="text-xs md:text-sm text-gray-600 mt-1">
              product reliability
            </div>
          </motion.div>
          <motion.div variants={statItemVariants}>
            <div className="text-2xl md:text-3xl font-bold text-blue-700">
              80%
            </div>
            <div className="text-xs md:text-sm text-gray-600 mt-1">
              internet service
            </div>
          </motion.div>
          <motion.div variants={statItemVariants}>
            <div className="text-2xl md:text-3xl font-bold text-blue-700">
              6
            </div>
            <div className="text-xs md:text-sm text-gray-600 mt-1">
              R&D Centers
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
