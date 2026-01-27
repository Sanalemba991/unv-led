"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // NOTE: update these coordinates to your desired location (lat, lng)
  const MAP_CENTER = { lat: 6.5244, lng: 3.3792 };
  const mapSrc = `https://www.google.com/maps?q=${MAP_CENTER.lat},${MAP_CENTER.lng}&z=15&output=embed`;

  // Refs for scroll animations
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);
  
  // InView hooks
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const contentInView = useInView(contentRef, { once: true, amount: 0.2 });
  const formInView = useInView(formRef, { once: true, amount: 0.2 });
  const mapInView = useInView(mapRef, { once: true, amount: 0.2 });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      } 
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      } 
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0]
      } 
    }
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      } 
    }
  };

  // Enhanced hero title animation
  const heroTitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const heroWordVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      filter: "blur(10px)",
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const heroLetterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      filter: "blur(10px)",
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const heroSubtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      x: -20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please provide your name, email and message.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (res.ok) {
        await res.json();
        setSuccess("Message sent successfully. Thank you!");
        // clear form
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        const body = await res.json().catch(() => ({}));
        setError(body?.error || "Failed to send message.");
      }
    } catch {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Split title into words for animation
  const titleText = "Get in Touch";
  const titleWords = titleText.split(" ");

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-96 md:h-screen md:min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Contact Hero"
            fill
            className="object-cover"
            priority
            quality={90}
          />
           </div>
        <motion.div 
          className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 md:px-12"
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-light text-white  tracking-wide mb-4 flex items-center"
            variants={heroTitleVariants}
          >
            {/* First word with big G */}
            <motion.span 
              className="inline-block mr-3 flex items-baseline"
              variants={heroWordVariants}
            >
              <motion.span 
                className="text-5xl md:text-7xl font-light mr-1"
                variants={heroLetterVariants}
              >
                G
              </motion.span>
              <span>et</span>
            </motion.span>
            
            {/* Second word */}
            <motion.span 
              className="inline-block mr-3"
              variants={heroWordVariants}
            >
              in
            </motion.span>
            
            {/* Third word */}
            <motion.span 
              className="inline-block"
              variants={heroWordVariants}
            >
              Touch
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-lg"
            variants={heroSubtitleVariants}
          >
            We're here to help and answer any questions you might have. We look forward to hearing from you.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section ref={contentRef} className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
          >
            <motion.div variants={staggerItem}>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                LET&apos;S CONNECT
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 leading-tight">
                We are always ready
                <br />
                to help you. Just
                <br />
                answer your
                <br />
                questions
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Email us with questions or inquiries or call +234 800 123 4567.
                <br />
                We would be happy to answer your questions.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4"
              variants={staggerContainer}
            >
              <motion.div variants={staggerItem}>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                  ADDRESS
                </p>
                <p className="text-sm text-gray-700">
                  123 Business Street
                  <br />
                  Lagos, Nigeria
                  <br />
                  100001
                </p>
              </motion.div>

              <motion.div variants={staggerItem}>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                  PHONE NUMBER
                </p>
                <p className="text-sm text-gray-700">+234 800 123 4567</p>
              </motion.div>

              <motion.div variants={staggerItem}>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                  EMAIL
                </p>
                <p className="text-sm text-gray-700">info@example.com</p>
              </motion.div>

              <motion.div variants={staggerItem}>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                  WORKING HOURS
                </p>
                <p className="text-sm text-gray-700">
                  Mon-Fri: 9:00 - 18:00
                  <br />
                  Sat-Sun: Closed
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            ref={formRef}
            className="bg-gray-50  p-8 md:p-10"
            variants={slideInRight}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-light text-gray-900">Get in touch</h3>
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-8">
              Fill out the form and our team will get back to you within 24 hours
            </p>

            {error && (
              <motion.div 
                className="mb-6 p-3 bg-red-50 text-red-700 rounded-md text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {error}
              </motion.div>
            )}

            {success && (
              <motion.div 
                className="mb-6 p-3 bg-green-50 text-green-700 rounded-md text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {success}
              </motion.div>
            )}

            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-3"
              variants={staggerContainer}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
            >
              <motion.div variants={staggerItem}>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:border-red-400 transition-colors"
                  required
                />
              </motion.div>

              <motion.div variants={staggerItem}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:border-red-400 transition-colors"
                  required
                />
              </motion.div>

              <motion.div variants={staggerItem}>
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:border-red-400 transition-colors"
                />
              </motion.div>
              <motion.div variants={staggerItem}>
                <input
                  type="text"
                  placeholder="Subject"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:border-red-400 transition-colors"
                />
              </motion.div>

              <motion.div variants={staggerItem}>
                <textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full bg-white border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:border-red-400 transition-colors resize-none"
                  required
                />
              </motion.div>

              <motion.div variants={staggerItem}>
                <motion.button
                  type="submit"
                  className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={loading}
             
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {loading ? "SENDING..." : "SEND MESSAGE"}
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section ref={mapRef} className="w-full">
        <motion.div 
          className="w-full h-[400px] md:h-[500px]"
          variants={zoomIn}
          initial="hidden"
          animate={mapInView ? "visible" : "hidden"}
        >
          <iframe
            title="Location map"
            src={mapSrc}
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>
    </div>
  );
}