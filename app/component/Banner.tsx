"use client";
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-10 right-1/3 opacity-10">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className="text-gray-300"
        >
          <path
            d="M20 100 Q 50 50, 80 100 T 140 100 T 200 100"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M20 120 Q 50 70, 80 120 T 140 120 T 200 120"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M20 140 Q 50 90, 80 140 T 140 140 T 200 140"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h1 className="text-5xl lg:text-7xl font-serif mb-2">
                <span className="text-blue-400">CATERING</span>
              </h1>
              <h2 className="text-5xl text-black lg:text-7xl font-serif font-bold">
                SERVICES
              </h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
              At Catering 128, we bring passion and innovation to the art of
              catering. Our wonderful team of culinary experts is dedicated to
              curating unforgettable dining experiences tailored to your unique
              preferences.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-colors">
                OUR MENU
              </button>
              <button className="bg-blue-400 text-white px-8 py-4 font-semibold hover:bg-blue-500 transition-colors">
                BOOK CATERING
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-8">
              <button className="w-12 h-12 border-2 border-black text-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <Facebook size={20} />
              </button>
              <button className="w-12 h-12 border-2 border-black text-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <Instagram size={20} />
              </button>
              <button className="w-12 h-12 border-2 border-black text-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <Twitter size={20} />
              </button>
            </div>
          </motion.div>

          {/* Right Content - Image Placeholder */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Decorative circular text */}

            {/* Main food image placeholder */}
            <div className="">
              <div className="aspect-[4/3] flex items-center justify-center">
                {/* Display image */}
                <img
                  src="https://www.unvdisplay.com/res/202506/11/20250611_1967296_1image1_1019862_521044_0.jpg"
                  alt="LED Display"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}