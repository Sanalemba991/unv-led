"use client";
import { Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
const services = [
  {
    id: 1,
    title: "SOCIALS",
    subtitle: "Memorable Gatherings",
    description:
      "From intimate birthday parties to grand gala dinners, we create the perfect atmosphere with bespoke menus and impeccable service tailored to your social needs.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "FESTIVALS",
    subtitle: "Grand Celebrations",
    description:
      "At Catering 128, we pride ourselves on offering first class catering services designed to make your special events unforgettable with vibrant flavors and large-scale efficiency.",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "PICNICS",
    subtitle: "Al Fresco Dining",
    description:
      "Enjoy a perfectly packed gourmet picnic in your favorite scenic spot. We handle everything from the blanket to the basket for a stress-free outdoor feast.",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "PRIVATE PARTIES",
    subtitle: "Exclusive Experiences",
    description:
      "Experience luxury in the comfort of your own space. Our private party catering brings fine dining to your doorstep with personalized chef services and curated wine pairings.",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "WEDDINGS",
    subtitle: "Eternal Romance",
    description:
      "Your special day deserves nothing but the best. We provide elegant wedding catering that reflects your unique love story, from the first toast to the final dance.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1474&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "CORPORATE",
    subtitle: "Professional Excellence",
    description:
      "Elevate your business events with our sophisticated corporate catering. We deliver seamless service and gourmet menus that impress clients and energize your team.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1469&auto=format&fit=crop",
  },
];

export default function Sol() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with PICNICS in center
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [showAllInLine, setShowAllInLine] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [removedItems, setRemovedItems] = useState<number[]>([]); // Track removed items
  const [isHoveringCarousel, setIsHoveringCarousel] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Filter out removed items
  const visibleServices = services.filter(
    (service) => !removedItems.includes(service.id)
  );

  // Adjust current index if needed
  useEffect(() => {
    if (visibleServices.length > 0 && currentIndex >= visibleServices.length) {
      setCurrentIndex(0);
    }
  }, [removedItems, visibleServices.length]);

  const nextSlide = () => {
    if (visibleServices.length <= 1) return;

    setIsClicked(true);
    setCurrentIndex((prev) => (prev + 1) % visibleServices.length);
    setTimeout(() => setIsClicked(false), 600);
  };

  const prevSlide = () => {
    if (visibleServices.length <= 1) return;

    setIsClicked(true);
    setCurrentIndex(
      (prev) => (prev - 1 + visibleServices.length) % visibleServices.length
    );
    setTimeout(() => setIsClicked(false), 600);
  };

  const handleItemClick = (index: number, serviceId: number) => {
    // Remove the clicked item
    setRemovedItems((prev) => [...prev, serviceId]);

    // Adjust current index if needed
    if (index < currentIndex && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (index === currentIndex && visibleServices.length > 1) {
      setCurrentIndex(0);
    }
  };

  const closeLineView = () => {
    setShowAllInLine(false);
    setSelectedItem(null);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 120, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: 120,
      scale: 0.9,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 80, rotateX: 15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: 80,
      rotateX: 15,
      transition: { duration: 0.4 },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const cardContentVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const lineVariants: Variants = {
    hidden: { opacity: 0, y: 80, rotateY: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    exit: { opacity: 0, y: 80, rotateY: 10 },
  };

  const floatAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      ref={sectionRef}
      className="bg-white py-10 sm:py-12 md:py-16 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center mb-0">
        <motion.p
          custom={0}
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-blue-400 font-semibold tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs uppercase mb-2 sm:mb-3"
        >
          PERSONALIZED CATERING SOLUTIONS
        </motion.p>
        <motion.h2
          custom={0.15}
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-tight tracking-wide text-black"
        >
          EXQUISITE CATERING
          <br />
          SERVICES
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-3 sm:mt-4 rounded-full"
        />
      </div>

      <motion.div
        className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] mb-0"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <AnimatePresence mode="wait">
          {!showAllInLine ? (
            <motion.div
              key="carousel"
              className="relative h-full sm:h-[80%] flex items-center justify-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onMouseEnter={() => setIsHoveringCarousel(true)}
              onMouseLeave={() => setIsHoveringCarousel(false)}
            >
              {/* Navigation Buttons */}
              {visibleServices.length > 1 && (
                <>
                  {/* Desktop/Tablet Buttons */}
                  <motion.button
                    onClick={prevSlide}
                    className="hidden sm:block absolute left-2 sm:left-4 md:left-6 z-20 p-2 sm:p-3 "
                    style={{ top: "60%", transform: "translateY(-50%)" }}
                    aria-label="Previous service"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{
                      opacity: isHoveringCarousel ? 1 : 0,
                      x: isHoveringCarousel ? 0 : -20,
                      y: "-50%",
                    }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft
                      size={20}
                      className="text-gray-700 sm:w-6 sm:h-6"
                    />
                  </motion.button>
                  <motion.button
                    onClick={nextSlide}
                    className="hidden sm:block absolute right-2 sm:right-4 md:right-6 z-20 p-2 sm:p-3   "
                    style={{ top: "60%", transform: "translateY(-50%)" }}
                    aria-label="Next service"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{
                      opacity: isHoveringCarousel ? 1 : 0,
                      x: isHoveringCarousel ? 0 : 20,
                      y: "-50%",
                    }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight
                      size={20}
                      className="text-gray-700 sm:w-6 sm:h-6"
                    />
                  </motion.button>

                  {/* Mobile Buttons */}
                  <div className="sm:hidden absolute left-1/2 -bottom-8 z-30 flex space-x-5 -translate-x-1/2">
                    <button
                      onClick={prevSlide}
                      className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 shadow-lg border border-gray-300 active:bg-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      aria-label="Previous service (mobile)"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 shadow-lg border border-gray-300 active:bg-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      aria-label="Next service (mobile)"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </div>
                </>
              )}

              {/* Service Cards */}
              {visibleServices.map((service, index) => {
                const isActive = index === currentIndex;
                const isPrev =
                  index ===
                  (currentIndex - 1 + visibleServices.length) %
                    visibleServices.length;
                const isNext =
                  index === (currentIndex + 1) % visibleServices.length;

                let position = "";
                let zIndex = 1;
                let scale = 0.7;
                let opacity = 0;
                let filter = "blur(3px)";
                let xOffset = 0;

                if (isActive) {
                  position = "center";
                  zIndex = 10;
                  scale = 1;
                  opacity = 1;
                  filter = "none";
                  xOffset = 0;
                } else if (isPrev) {
                  position = "left";
                  zIndex = 5;
                  scale = 0.75;
                  opacity = 0.7;
                  filter = "blur(2px)";
                  xOffset = -280;
                } else if (isNext) {
                  position = "right";
                  zIndex = 5;
                  scale = 0.75;
                  opacity = 0.7;
                  filter = "blur(2px)";
                  xOffset = 280;
                }

                // Hide cards that are not active, prev, or next
                if (!isActive && !isPrev && !isNext) {
                  return null;
                }

                return (
                  <motion.div
                    key={service.id}
                    className="absolute w-[90%] sm:w-[85%] md:w-[70%] lg:w-[55%] xl:w-[50%] h-[85%] bg-white  shadow-xl overflow-hidden"
                    style={{ zIndex, perspective: 1000 }}
                    variants={itemVariants}
                    initial="hidden"
                    animate={{
                      scale,
                      opacity,
                      filter,
                      x: xOffset,
                      rotateY:
                        position === "left" ? 8 : position === "right" ? -8 : 0,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    exit="exit"
                  >
                    <div className="relative h-full flex flex-col md:flex-row">
                      <div className="relative h-2/5 sm:h-1/2 md:h-full md:w-1/2 overflow-hidden">
                        <motion.img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1.2 }}
                          animate={{ scale: isActive ? 1 : 1.1 }}
                          transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center md:w-1/2">
                        <motion.h3
                          className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-800 mb-1 sm:mb-2"
                          custom={0.1}
                          variants={cardContentVariants}
                          initial="hidden"
                          animate={isActive ? "visible" : "hidden"}
                        >
                          {service.title}
                        </motion.h3>
                        <motion.p
                          className="text-blue-400 font-medium mb-2 sm:mb-4 text-sm sm:text-base"
                          custom={0.2}
                          variants={cardContentVariants}
                          initial="hidden"
                          animate={isActive ? "visible" : "hidden"}
                        >
                          {service.subtitle}
                        </motion.p>
                        <motion.p
                          className="text-gray-600 text-xs sm:text-sm md:text-base line-clamp-3 sm:line-clamp-none"
                          custom={0.3}
                          variants={cardContentVariants}
                          initial="hidden"
                          animate={isActive ? "visible" : "hidden"}
                        >
                          {service.description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="line-view"
              className="relative h-full"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                onClick={closeLineView}
                className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors duration-200"
                aria-label="Close line view"
              >
                <X size={24} className="text-gray-700" />
              </button>

              <div className="h-full overflow-x-auto overflow-y-hidden scrollbar-hide">
                <div className="flex h-full items-center px-4 space-x-4">
                  {visibleServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      custom={index}
                      variants={lineVariants}
                      className={`flex-shrink-0 w-80 h-4/5 bg-white rounded-xl shadow-xl overflow-hidden ${
                        selectedItem === index ? "ring-4 ring-blue-400" : ""
                      }`}
                      exit="exit"
                    >
                      <div className="relative h-2/5 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-serif text-gray-800 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-blue-400 font-medium mb-3">
                          {service.subtitle}
                        </p>
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
