"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-lg border-b border-border/40 shadow-sm" 
        : "bg-transparent"
    }`}>
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            {!logoError ? (
              <div className="relative">
                <Image
                  src="/images/monk-mantra-logo.png"
                  alt="MonkMantra Logo"
                  width={180}
                  height={45}
                  className="h-11 w-auto transition-all duration-300 group-hover:scale-105"
                  priority
                  onError={() => setLogoError(true)}
                />
              </div>
            ) : (
              // Fallback to text logo if image fails to load
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-primary/25 transition-all duration-300 group-hover:scale-105">
                  <span className="text-primary-foreground font-bold text-xl">M</span>
                </div>
                <span className="font-bold text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                  MonkMantra
                </span>
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/get-started" 
              className="btn btn-primary group"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-lg">
            <div className="py-4 space-y-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-muted"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: "slideInFromRight 0.3s ease-out forwards",
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link 
                  href="/get-started" 
                  className="btn btn-primary w-full group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 