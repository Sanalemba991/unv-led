"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react"; 
import { Variants } from "framer-motion";
export default function CateringHero() {
  const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1766476225135-a75261e6ad47?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Catering food display" },
    { id: 2, src: "https://images.unsplash.com/photo-1766964855974-1dfcf5107823?q=80&w=862&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Professional chefs" },
    { id: 3, src: "https://images.unsplash.com/photo-1500412830877-c77d92c33203?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Appetizers" },
    { id: 4, src: "https://images.unsplash.com/photo-1532517308734-0565178471d2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dp", alt: "Outdoor catering" },
    { id: 5, src: "https://images.unsplash.com/photo-1477132394330-d2376dc4c091?q=80&w=1011&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Plated dish" },
    { id: 6, src: "https://images.unsplash.com/photo-1575860266142-81e5b482d09a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Catering service" },
    { id: 7, src: "https://plus.unsplash.com/premium_photo-1674406763863-b64be22c78a9?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Event catering" },
    { id: 8, src: "https://images.unsplash.com/photo-1451481454041-104482d8e284?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Professional service" },
  ];
  const heroRef = useRef(null);
  const galleryRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const isGalleryInView = useInView(galleryRef, { once: true, amount: 0.2 });

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const imageVariants: (index: number) => Variants = (index: number) => {
    // Different origins for the spread effect
    const origins = [
      { x: -100, y: -100 },
      { x: 100, y: -100 },
      { x: -100, y: 100 },
      { x: 100, y: 100 },
      { x: -50, y: -50 },
      { x: 50, y: -50 },
      { x: -50, y: 50 },
      { x: 50, y: 50 }
    ];
    
    const origin = origins[index % origins.length];
    
    return {
      hidden: { 
        opacity: 0, 
        scale: 0.8,
        x: origin.x,
        y: origin.y,
        transition: { duration: 0.6 }
      },
      visible: { 
        opacity: 1, 
        scale: 1,
        x: 0,
        y: 0,
        transition: { 
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    };
  };

  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <div ref={heroRef} className="min-h-[70vh] flex items-center px-8 lg:px-16 py-12">
        <div className="max-w-5xl w-full mx-auto">
          {/* Tagline */}
          <motion.p 
            className="text-blue-400 font-semibold tracking-[0.2em] text-xs uppercase mb-4"
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            EXPERIENCE EXCELLENCE
          </motion.p>

          {/* Main Heading - Full Width */}
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif leading-[1.15] tracking-wide mb-8"
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <span className="text-black italic">DISCOVER THE CULINARY</span>
            <br />
            <span className="text-black italic">CRAFTSMANSHIP </span>
            <span className="text-blue-400 italic">OF CATERING 128</span>
          </motion.h1>

          {/* Description and Buttons - Right Aligned */}
          <motion.div 
            className="flex justify-end" 
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            <div className="max-w-sm space-y-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                Welcome to Catering 128, where culinary craftsmanship takes center
                stage. With years of experience and a relentless pursuit of
                perfection, we have honed our skills to deliver extraordinary dining
                experiences.
              </p>

              <div className="flex items-center gap-6">
                <motion.a 
                  href="#" 
                  className="text-blue-400 font-medium tracking-wider uppercase text-xs border-b border-blue-500 pb-0.5 hover:text-blue-600 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  MORE ABOUT US
                </motion.a>

                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                  <motion.a 
                    href="#" 
                    className="text-blue-400 font-medium tracking-wider uppercase text-xs hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    OUR GALLERY
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gallery Section */}
      <div ref={galleryRef} className="px-8 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5"
            initial="hidden"
            animate={isGalleryInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* Left Column */}
            <div className="flex flex-col gap-4 md:gap-5">
              <motion.div 
                className="overflow-hidden h-[150px] md:h-[220px]"
                variants={imageVariants(0)}
              >
                <img src={galleryImages[0].src} alt={galleryImages[0].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
              <motion.div 
                className="overflow-hidden h-[220px] md:h-[330px]"
                variants={imageVariants(3)}
              >
                <img src={galleryImages[3].src} alt={galleryImages[3].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            </div>

            {/* Middle Column (Spans 2) */}
            <div className="md:col-span-2 flex flex-col gap-4 md:gap-5">
              <motion.div 
                className="overflow-hidden h-[180px] md:h-[275px]"
                variants={imageVariants(1)}
              >
                <img src={galleryImages[1].src} alt={galleryImages[1].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
              <div className="grid grid-cols-2 gap-4 md:gap-5">
                <motion.div 
                  className="overflow-hidden h-[180px] md:h-[275px]"
                  variants={imageVariants(6)}
                >
                  <img src={galleryImages[6].src} alt={galleryImages[6].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </motion.div>
                <motion.div 
                  className="overflow-hidden h-[180px] md:h-[275px]"
                  variants={imageVariants(5)}
                >
                  <img src={galleryImages[5].src} alt={galleryImages[5].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </motion.div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4 md:gap-5">
              <motion.div 
                className="overflow-hidden h-[150px] md:h-[220px]"
                variants={imageVariants(4)}
              >
                <img src={galleryImages[4].src} alt={galleryImages[4].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
              <motion.div 
                className="overflow-hidden h-[220px] md:h-[330px]"
                variants={imageVariants(7)}
              >
                <img src={galleryImages[7].src} alt={galleryImages[7].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}