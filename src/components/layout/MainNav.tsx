"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { NavItem } from "@/types"
import { usePathname } from "next/navigation"

const navigationItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services", 
    href: "/services",
  },
  {
    title: "Case Studies",
    href: "/case-studies",
  },
  {
    title: "Blog",
    href: "/blog",
  },
]

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()
  const navItems = items || navigationItems

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2 group">
        {/* MonkMantra Logo */}
        <div className="relative">
          <Image
            src="/logo.png"
            alt="MonkMantra"
            width={160}
            height={40}
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            priority
          />
        </div>
      </Link>
      {navItems?.length && (
        <nav className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href || "/"}
              className={`
                relative flex items-center text-base font-medium transition-all duration-200 group
                ${pathname === item.href 
                  ? 'text-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
                }
              `}
            >
              <span className="relative z-10">{item.title}</span>
              
              {/* Animated underline */}
              <span 
                className={`
                  absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-200
                  ${pathname === item.href 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                  }
                `}
              />
            </Link>
          ))}
        </nav>
      )}
    </div>
  )
}
