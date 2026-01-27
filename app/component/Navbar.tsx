'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/solution', label: 'Solution' },
    { href: '/products', label: 'Products' },
    { href: '/partner', label: 'Partner' },
  
  ];

  const isActive = (href) => pathname === href;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ease-out border-b ${
        scrolled
          ? 'bg-slate-950 shadow-2xl border-slate-800/50'
          : 'bg-white/98 backdrop-blur-md border-gray-100/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-500 ease-out ${
            scrolled ? 'h-16' : 'h-20'
          }`}
        >
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 flex-shrink-0 group"
          >
           
            <div className={`hidden sm:block transition-all duration-500`}>
              <img 
                src="/logo.png" 
                alt="UNV LED Logo" 
                className={`transition-all duration-300 ${
                  scrolled 
                    ? 'h-5' 
                    : 'h-7'
                }`} 
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center transition-all duration-500 ${scrolled ? 'gap-6' : 'gap-8'}`}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-all duration-300 relative group ${
                  scrolled ? 'text-sm' : 'text-sm'
                } ${
                  isActive(item.href)
                    ? scrolled ? 'text-white' : 'text-blue-600'
                    : scrolled 
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                    scrolled ? 'bg-blue-500' : 'bg-blue-600'
                  } ${
                    isActive(item.href)
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Search & CTA */}
          <div className="flex items-center gap-3">
            <button 
              className={`hidden md:flex items-center justify-center transition-all duration-500 rounded-lg group ${
                scrolled
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-500 hover:text-blue-600'
              }`}
              aria-label="Search"
              style={{
                width: scrolled ? '36px' : '40px',
                height: scrolled ? '36px' : '40px',
              }}
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <Link
              href="/contact"
              className={`hidden md:inline-block font-semibold  transition-all duration-300 whitespace-nowrap ${
                scrolled 
                  ? 'px-5 py-2 text-sm border border-white text-white hover:bg-white/100 hover:text-black hover:border-white/40'
                  : 'px-6 py-2 text-sm border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg transition-colors duration-300 ${
                scrolled
                  ? 'hover:bg-slate-800'
                  : 'hover:bg-gray-100'
              }`}
              aria-label="Menu"
            >
              <span
                className={`h-0.5 rounded-full transition-all duration-300 ${
                  scrolled ? 'bg-white' : 'bg-gray-700'
                } ${
                  isOpen ? 'rotate-45 translate-y-2 w-5' : 'w-5'
                }`}
              ></span>
              <span
                className={`h-0.5 w-5 rounded-full transition-all duration-300 ${
                  scrolled ? 'bg-white' : 'bg-gray-700'
                } ${
                  isOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`h-0.5 rounded-full transition-all duration-300 ${
                  scrolled ? 'bg-white' : 'bg-gray-700'
                } ${
                  isOpen ? '-rotate-45 -translate-y-2 w-5' : 'w-5'
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`lg:hidden pb-4 border-t transition-all duration-300 animate-in fade-in slide-in-from-top-2 ${
            scrolled
              ? 'border-slate-800 bg-slate-900/50'
              : 'border-gray-100 bg-white/50'
          }`}>
            <div className="space-y-1 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg transition-all duration-300 text-sm font-medium ${
                    isActive(item.href)
                      ? scrolled
                        ? 'text-white bg-slate-800'
                        : 'text-blue-600 bg-blue-50'
                      : scrolled
                        ? 'text-gray-300 hover:text-white hover:bg-slate-800'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`block mt-3 mx-4 px-4 py-2.5 text-sm font-semibold rounded-lg text-center transition-all duration-300 ${
                  scrolled
                    ? 'border border-white/20 text-white hover:bg-white/10'
                    : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}