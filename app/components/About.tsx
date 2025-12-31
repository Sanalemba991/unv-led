"use client";

import Image from "next/image";
import { Twitter, Facebook, Instagram } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Line from "./Line";
export default function About() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const isSection1InView = useInView(section1Ref, { once: true, margin: "-100px" });
  const isSection2InView = useInView(section2Ref, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const leftVariants = {
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

  const rightVariants = {
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

  const imageVariants = {
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

  const socialIconVariants = {
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
  const imageGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const topLeftVariants = {
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

  const topRightVariants = {
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

  const middleRightVariants = {
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

  const bottomVariants = {
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
          <motion.div
            className="flex justify-center"
            variants={leftVariants}
          >
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
          <motion.div
            className="space-y-6"
            variants={rightVariants}
          >
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
          <motion.div
            className="space-y-6"
            variants={rightVariants}
          >
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
      <Line />
    </>
  );
}