"use client"

import * as React from "react"
import Link from "next/link"
import { MainNav } from "@/components/layout/MainNav"
import { MobileNav } from "@/components/layout/MobileNav"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container flex h-16 max-w-screen-2xl items-center px-4">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              asChild 
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 font-medium"
            >
              <Link href="/contact">Contact</Link>
            </Button>
            <Button 
              asChild 
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md transition-all duration-200 font-medium px-6 rounded-lg hover-lift"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
} 