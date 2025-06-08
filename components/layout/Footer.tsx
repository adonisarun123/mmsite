"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [logoError, setLogoError] = useState(false);

  const services = [
    { name: "AI Marketing Strategy", href: "/services#strategy" },
    { name: "PPC Management", href: "/services#ppc" },
    { name: "Social Media Marketing", href: "/services#social" },
    { name: "Content Marketing", href: "/services#content" },
    { name: "Email Marketing", href: "/services#email" },
    { name: "Marketing Automation", href: "/services#automation" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Partnership", href: "/partnership" },
  ];

  const resources = [
    { name: "Marketing Calculator", href: "/tools/calculator" },
    { name: "Free Templates", href: "/resources/templates" },
    { name: "Industry Reports", href: "/resources/reports" },
    { name: "Webinars", href: "/resources/webinars" },
    { name: "Help Center", href: "/help" },
    { name: "API Documentation", href: "/docs" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Data Processing", href: "/data-processing" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/monkmantra", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/monkmantra", icon: Twitter },
    { name: "Facebook", href: "https://facebook.com/monkmantra", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com/monkmantra", icon: Instagram },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-muted/20 via-background to-primary/5 border-t border-border/40">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern-lg opacity-20" />
      
      <div className="container relative">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-border/40">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Get Marketing Insights That <span className="gradient-text">Actually Work</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Join 10,000+ marketers getting weekly tips, case studies, and insider strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
              <div className="relative flex-1 w-full">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </div>
              <button className="btn btn-primary btn-lg group whitespace-nowrap">
                Subscribe Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              No spam. Unsubscribe anytime. Read our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6 group">
                {!logoError ? (
                  <Image
                    src="/images/monk-mantra-logo.png"
                    alt="MonkMantra Logo"
                    width={160}
                    height={40}
                    className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  // Fallback to text logo if image fails to load
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg">
                      <span className="text-primary-foreground font-bold text-lg">M</span>
                    </div>
                    <span className="font-bold text-xl text-foreground">MonkMantra</span>
                  </div>
                )}
              </Link>
              
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
                The last marketing agency you'll ever need. We turn months of marketing work into minutes with AI-powered campaigns that deliver measurable results.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:hello@monkmantra.com" className="hover:text-foreground transition-colors">
                    hello@monkmantra.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+1-555-0123" className="hover:text-foreground transition-colors">
                    +1 (555) 012-3456
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-3">
                {resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span>© 2024 MonkMantra. All rights reserved.</span>
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 