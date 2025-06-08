"use client";

import Link from "next/link";
import { ArrowRight, Play, Star, CheckCircle, Sparkles, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const stats = [
    { value: "250+", label: "Campaigns", icon: Zap, color: "text-blue-500" },
    { value: "$50M+", label: "Revenue Generated", icon: TrendingUp, color: "text-green-500" },
    { value: "98%", label: "Client Retention", icon: Star, color: "text-yellow-500" },
    { value: "15+", label: "Industries", icon: Sparkles, color: "text-purple-500" },
  ];

  const trustedBy = [
    "Healthcare Leaders",
    "Real Estate Pros", 
    "Travel Giants",
    "Fortune 500"
  ];

  const benefits = [
    "AI-Powered Strategy",
    "72-Hour Launch",
    "Guaranteed ROI"
  ];

  return (
    <section className="section relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-purple-50/50 dark:to-purple-950/20">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          {/* Enhanced Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 rounded-full border-2 border-primary/20 bg-background/80 backdrop-blur-sm px-6 py-3 text-sm font-medium text-muted-foreground mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="hidden sm:inline">Trusted by 250+ Growing Businesses</span>
            <span className="sm:hidden">250+ Trusted Clients</span>
            <div className="flex gap-1 ml-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-xs bg-green-100 dark:bg-green-950/20 text-green-700 dark:text-green-400 px-2 py-1 rounded-full">
              4.9/5
            </span>
          </motion.div>

          {/* Enhanced Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 text-shadow-lg"
          >
            The last{" "}
            <em className="gradient-text not-italic font-bold">
              marketing agency
            </em>{" "}
            you'll ever need.
          </motion.h1>

          {/* Enhanced Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto"
          >
            Turn months of marketing work into <span className="text-primary font-semibold">minutes</span>. 
            We build AI-powered campaigns, automate your funnels, and deliver measurable results... 
            all from a sleek, intuitive platform.
          </motion.p>

          {/* Enhanced Benefits Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 bg-background/60 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 text-sm font-medium hover:bg-background/80 transition-all duration-300 hover:scale-105">
                <CheckCircle className="h-4 w-4 text-green-500" />
                {benefit}
              </div>
            ))}
          </motion.div>

          {/* Enhanced Code Snippet */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group mb-10"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-muted/80 backdrop-blur-sm border border-border/50 rounded-lg p-6 font-mono text-sm max-w-lg mx-auto shadow-lg">
              <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-2">Terminal</span>
              </div>
              <div className="text-left">
                <span className="text-muted-foreground">$ </span>
                <span className="text-primary font-semibold">book-free-audit</span>
                <span className="text-muted-foreground"> --get-started</span>
                <div className="mt-2 text-green-500">
                  <span className="text-muted-foreground">✓ </span>
                  Marketing audit scheduled
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
              <Sparkles className="h-5 w-5" />
              Get Free Marketing Audit
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link href="/demo" className="btn btn-outline btn-lg group">
              <Play className="h-5 w-5" />
              Watch Demo (2 min)
            </Link>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                className="relative group"
              >
                <div className="card hover-lift-subtle text-center p-6 border-2 border-transparent hover:border-primary/20">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-background shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Trusted By */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground mb-8 font-medium">
              Powering marketing for enterprises, agencies, and growth-focused companies across the world.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {trustedBy.map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground bg-background/60 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 hover:bg-background/80 hover:border-primary/20 transition-all duration-300 hover:scale-105"
                >
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary/20 rounded-full floating" />
      <div className="absolute top-1/3 right-10 w-6 h-6 bg-purple-500/20 rounded-full floating-delayed" />
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-blue-500/20 rounded-full floating" />
      <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-green-500/20 rounded-full floating-delayed" />
    </section>
  );
} 