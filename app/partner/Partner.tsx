"use client";
import { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const PartnerPage = () => {
  // Refs for intersection observer
  const heroSectionRef = useRef(null);
  const partnersSectionRef = useRef(null);
  const partnersListingSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  // Page metadata
  const title = "Partner - PrimoTech LLC";
  const description =
    "Join our partner network and grow your business with PrimoTech security solutions. Become an authorized distributor today.";

  // Structured data

  // Intersection Observer for animations
  useEffect(() => {
    // Enhanced intersection observer options for slower animations
    const observerOptions = {
      threshold: [0, 0.2, 0.4],
      rootMargin: "0px 0px -150px 0px",
    };

    // Hero section observer
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
          entry.target.classList.add("hero-revealed");
          heroObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Partners grid observer
    const partnersObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
          entry.target.classList.add("partners-revealed");

          // Stagger benefit card animations with longer delays
          const cards = entry.target.querySelectorAll(".benefit-card-animate");
          cards.forEach((card, index) => {
            setTimeout(() => {
              (card as HTMLElement).style.transitionDelay = `${0.8 + index * 0.3}s`;
            }, 100);
          });

          partnersObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Partners listing observer - separate class and longer animations
    const partnersListingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            entry.target.classList.add("partners-listing-revealed");

            // Stagger partner card animations with longer delays
            const cards = entry.target.querySelectorAll(
              ".partner-card-animate",
            );
            cards.forEach((card, index) => {
              setTimeout(() => {
                (card as HTMLElement).style.transitionDelay = `${0.5 + index * 0.4}s`;
              }, 200);
            });

            partnersListingObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: [0, 0.2, 0.4],
        rootMargin: "0px 0px -120px 0px",
      },
    );

    // Contact section observer
    const contactObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
          entry.target.classList.add("contact-revealed");
          contactObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Initialize animations
    if (heroSectionRef.current) {
      heroObserver.observe(heroSectionRef.current);
    }

    if (partnersSectionRef.current) {
      partnersObserver.observe(partnersSectionRef.current);
    }

    if (partnersListingSectionRef.current) {
      partnersListingObserver.observe(partnersListingSectionRef.current);
    }

    if (contactSectionRef.current) {
      contactObserver.observe(contactSectionRef.current);
    }

    // Cleanup
    return () => {
      if (heroSectionRef.current)
        heroObserver.unobserve(heroSectionRef.current);
      if (partnersSectionRef.current)
        partnersObserver.unobserve(partnersSectionRef.current);
      if (partnersListingSectionRef.current)
        partnersListingObserver.unobserve(partnersListingSectionRef.current);
      if (contactSectionRef.current)
        contactObserver.unobserve(contactSectionRef.current);
    };
  }, []);

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}



        <section
          ref={partnersListingSectionRef}
          className="py-8 bg-white partners-listing-section"
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid gap-4 max-w-4xl mx-auto">
              {/* Partner 1: Lovosis Technology */}
              <div className="bg-white rounded-lg shadow-none overflow-hidden partner-card partner-card-animate">
                <div className="flex flex-col md:flex-row">
                  {/* Logo Section */}
                  <div className="w-full md:w-48 bg-gray-50 flex items-center justify-center p-4">
                    <img
                      src="/images/partner.png"
                      alt="Lovosis Technology Logo"
                      className="w-full h-20 object-contain"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Lovosis Technology
                    </h3>

                    {/* Contact Information in Columns */}
                    <div className="space-y-2 mb-3">
                      <div className="flex items-start">
                        <span className="font-medium text-gray-600 w-20 text-xs">
                          Tel :
                        </span>
                        <span className="text-gray-800 text-xs">+971 50 916 2488</span>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-gray-600 w-20 text-xs">
                          Email :
                        </span>
                        <a
                          href="mailto:sales@lovosis.com"
                          className="text-blue-600 hover:text-blue-700 transition-colors text-xs"
                        >
                          sales@lovosis.com
                        </a>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-gray-600 w-20 text-xs">
                          Web site :
                        </span>
                        <a
                          href="https://lovosis.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 transition-colors text-xs"
                        >
                          https://lovosis.com/
                        </a>
                      </div>
                    </div>

                    {/* Company Profile */}
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-600 mb-1 text-xs">
                        Company Profile :
                      </span>
                      <p className="text-gray-700 leading-relaxed text-xs">
                        Lovosis Technology is a leading provider of innovative
                        IT solutions and services, empowering businesses with
                        cutting-edge technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-4 border-gray-200" />

              {/* Partner 2: Spottive Technologies */}
              <div className="bg-white rounded-lg shadow-none overflow-hidden partner-card partner-card-animate">
                <div className="flex flex-col md:flex-row">
                  {/* Logo Section */}
                  <div className="w-full md:w-48 bg-gray-50 flex items-center justify-center p-4">
                    <img
                      src="/images/partner1.png"
                      alt="Spottive Technologies Logo"
                      className="w-full h-20 object-contain"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Spottive Technologies
                    </h3>

                    {/* Contact Information in Columns */}
                    <div className="space-y-2 mb-3">
                      <div className="flex items-start">
                        <span className="font-medium text-gray-600 w-20 text-xs">
                          Tel :
                        </span>
                        <span className="text-gray-800 text-xs">+971 55 234 1712</span>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-gray-600 w-20 text-xs">
                          Email :
                        </span>
                        <a
                          href="mailto:sales@spottive.com"
                          className="text-blue-600 hover:text-blue-700 transition-colors text-xs"
                        >
                          sales@spottive.com
                        </a>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-gray-600 w-20 text-xs">
                          Web site :
                        </span>
                        <a
                          href="https://spottive.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 transition-colors text-xs"
                        >
                          https://spottive.com/
                        </a>
                      </div>
                    </div>

                    {/* Company Profile */}
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-600 mb-1 text-xs">
                        Company Profile :
                      </span>
                      <p className="text-gray-700 leading-relaxed text-xs">
                        Spottive Technologies specializes in smart solutions and
                        digital transformation for enterprises across various
                        industries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        /* Hero animations */
        .partner-hero {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .partner-hero.hero-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-image-reveal {
          transform: scale(1.1);
          opacity: 0;
          transition: all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .partner-hero.hero-revealed .hero-image-reveal {
          transform: scale(1);
          opacity: 1;
          transition-delay: 0.2s;
        }

        .hero-overlay-fade {
          opacity: 0;
          transition: opacity 1s ease-out;
        }

        .partner-hero.hero-revealed .hero-overlay-fade {
          opacity: 1;
          transition-delay: 0.4s;
        }

        .hero-content-reveal {
          opacity: 0;
          transform: translateX(-60px);
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .partner-hero.hero-revealed .hero-content-reveal {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 0.6s;
        }

        .hero-title-animate {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .hero-button-animate {
          opacity: 0;
          transform: translateY(30px) scale(0.8);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .partner-hero.hero-revealed .hero-title-animate {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.8s;
        }

        .partner-hero.hero-revealed .hero-button-animate {
          opacity: 1;
          transform: translateY(0) scale(1);
          transition-delay: 1s;
        }

        /* Partners grid animations */
        .partners-grid-section {
          opacity: 0;
          transform: translateY(60px);
          transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .partners-grid-section.partners-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .partners-content-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .partners-grid-section.partners-revealed .partners-content-reveal {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.4s;
        }

        .benefit-card-animate {
          opacity: 0;
          transform: translateY(50px) scale(0.9);
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .partners-grid-section.partners-revealed .benefit-card-animate {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Partners listing animations */
        .partners-listing-section {
          opacity: 0;
          transform: translateY(60px);
          transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .partners-listing-section.partners-listing-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .partner-card-animate {
          opacity: 0;
          transform: translateY(40px) scale(0.95);
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .partners-listing-section.partners-listing-revealed
          .partner-card-animate {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Partner card hover effects */
        .partner-card {
          transition: none;
        }

        .partner-card:hover {
          transform: none;
          box-shadow: none;
        }

        /* Contact section animations */
        .contact-section {
          opacity: 0;
          transform: translateY(60px);
          transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .contact-section.contact-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-title-animate,
        .contact-description-animate,
        .contact-button-animate {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .contact-section.contact-revealed .contact-title-animate {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.3s;
        }

        .contact-section.contact-revealed .contact-description-animate {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.6s;
        }

        .contact-section.contact-revealed .contact-button-animate {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.9s;
        }

        /* Logo section styling */
        .partner-card .md\:w-72 {
          min-height: 120px;
        }

        /* Professional link styling */
        .partner-card a {
          text-decoration: none !important;
          font-weight: 500;
          color: #60a5fa; /* tailwind blue-400 */
          transition: color 0.2s;
        }

        .partner-card a:hover {
          text-decoration: none !important;
          color: #3b82f6; /* tailwind blue-500 for hover */
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .partner-card .md\:w-72 {
            width: 100%;
            min-height: 100px;
          }

          .partner-card .flex-col.md\:flex-row {
            flex-direction: column;
          }

          .partner-card h3 {
            font-size: 1rem;
          }

          .partner-card .border-r {
            border-right: none;
            border-bottom: 1px solid #e5e7eb;
          }

          .hero-title-animate {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default PartnerPage;
