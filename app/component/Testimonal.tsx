"use client";
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  headline: string;
  quote: string;
  variant: "light" | "dark";
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Daniel Clifford",
    role: "Verified Graduate",
    image: "/testimonials/daniel.jpg",
    headline:
      "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.",
    quote:
      "\" I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best – and most grueling – time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup. \"",
    variant: "dark",
  },
  {
    id: 2,
    name: "Jonathan Walters",
    role: "Verified Graduate",
    image: "/testimonials/jonathan.jpg",
    headline: "The team was very supportive and kept me motivated",
    quote:
      "\" I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself. \"",
    variant: "light",
  },
  {
    id: 3,
    name: "Kira Whittle",
    role: "Verified Graduate",
    image: "/testimonials/kira.jpg",
    headline: "Such a life-changing experience. Highly recommended!",
    quote:
      "\" Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and target did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! \"",
    variant: "light",
  },
  {
    id: 4,
    name: "Jeanette Harmon",
    role: "Verified Graduate",
    image: "/testimonials/jeanette.jpg",
    headline: "An overall wonderful and rewarding experience",
    quote:
      "\" Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. \"",
    variant: "light",
  },
  {
    id: 5,
    name: "Patrick Abrams",
    role: "Verified Graduate",
    image: "/testimonials/patrick.jpg",
    headline:
      "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    quote:
      "\" The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. \"",
    variant: "dark",
  },
];

const QuoteIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="104"
    height="102"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M104 102V59.727H84.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C95.01 25.86 98.909 22.257 104 19.375V0c-9.758 4.27-17.712 9.874-23.864 16.813-6.151 6.939-10.712 14.545-13.681 22.818C63.485 47.904 62 59.941 62 75.74V102h42zm-62 0V59.727H22.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C33.01 25.86 36.909 22.257 42 19.375V0c-9.652 4.27-17.58 9.874-23.784 16.813C12.01 23.752 7.424 31.358 4.455 39.631 1.485 47.904 0 59.941 0 75.74V102h42z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </svg>
);

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  const isDark = testimonial.variant === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  // Determine animation direction based on index
  const isEven = index % 2 === 0;
  const slideDirection = isEven ? -80 : 80; // Reduced distance for smoother effect

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        x: slideDirection,
        scale: 0.95,
        rotateY: isEven ? -10 : 10
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0,
        scale: 1,
        rotateY: 0
      } : { 
        opacity: 0, 
        x: slideDirection,
        scale: 0.95,
        rotateY: isEven ? -10 : 10
      }}
      transition={{ 
        duration: 1.2, // Increased from 0.8 to 1.2
        delay: index * 0.25, // Increased from 0.15 to 0.25
        ease: [0.23, 0.1, 0.32, 1], // Smoother easing curve
        type: "spring",
        stiffness: 60, // Reduced from 100 to 60
        damping: 20 // Added damping for smoother motion
      }}
      className={`relative  p-8 shadow-xl overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-blue-400 to-blue-600 text-white"
          : "bg-white text-gray-800"
      } ${testimonial.id === 1 ? "md:col-span-2" : ""} ${
        testimonial.id === 3 ? "md:row-span-2" : ""
      } ${testimonial.id === 5 ? "md:col-span-2" : ""}`}
    >
      {/* Quote Icon Background */}
      {(testimonial.id === 1 || testimonial.id === 5) && (
        <QuoteIcon
          className={`absolute top-0 right-20 w-24 h-24 ${
            isDark ? "text-blue-400/20" : "text-gray-200"
          }`}
        />
      )}

      {/* Header with Profile */}
      <div className="flex items-center gap-4 mb-5 relative z-10">
        <div
          className={`w-10 h-10 rounded-full overflow-hidden ring-2 ${
            isDark ? "ring-blue-400" : "ring-gray-200"
          }`}
        >
          <div
            className={`w-full h-full flex items-center justify-center text-lg font-semibold ${
              isDark ? "bg-blue-400 text-white" : "bg-gray-300 text-gray-600"
            }`}
          >
            {testimonial.name.charAt(0)}
          </div>
        </div>
        <div>
          <h3
            className={`font-semibold text-sm ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            {testimonial.name}
          </h3>
          <p
            className={`text-xs ${
              isDark ? "text-white/70" : "text-gray-500"
            }`}
          >
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Headline */}
      <h4
        className={`text-lg md:text-xl font-semibold mb-4 leading-snug relative z-10 ${
          isDark ? "text-white" : "text-gray-800"
        }`}
      >
        {testimonial.headline}
      </h4>

      {/* Quote */}
      <p
        className={`text-sm leading-relaxed relative z-10 ${
          isDark ? "text-white/70" : "text-gray-500"
        }`}
      >
        {testimonial.quote}
      </p>
    </motion.div>
  );
};

const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-[#ECF2F8] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -40, scale: 0.95 }}
          transition={{ 
            duration: 1.3, // Increased from 0.8 to 1.3
            ease: [0.23, 0.1, 0.32, 1], // Smoother easing
            type: "spring",
            stiffness: 50, // Reduced stiffness
            damping: 25 // Added damping
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Graduates Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our verified graduates about their transformative
            experiences and career success stories.
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Row 1 */}
          <div className="md:col-span-2">
            <TestimonialCard testimonial={testimonials[0]} index={0} />
          </div>
          <div className="md:col-span-1">
            <TestimonialCard testimonial={testimonials[1]} index={1} />
          </div>
          <div className="md:col-span-1 md:row-span-2">
            <TestimonialCard testimonial={testimonials[2]} index={2} />
          </div>

          {/* Row 2 */}
          <div className="md:col-span-1">
            <TestimonialCard testimonial={testimonials[3]} index={3} />
          </div>
          <div className="md:col-span-2">
            <TestimonialCard testimonial={testimonials[4]} index={4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;