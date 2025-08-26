'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: '회사소개', href: '#about' },
    { name: '사업안내', href: '#business' },
    { name: '사업실적', href: '#projects' },
    { name: '홍보센터', href: '#news' },
    { name: '고객센터', href: '#contact' },
  ]

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-20 px-4">
          <Link href="/" className="flex items-center">
            <div className={`font-bold text-2xl ${isScrolled ? 'text-primary' : 'text-white'}`}>
              청광플러스원
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-secondary ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-primary transition-colors"
            >
              상담문의
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            <div className="space-y-1">
              <span className={`block w-6 h-0.5 ${isScrolled ? 'bg-gray-700' : 'bg-white'}`}></span>
              <span className={`block w-6 h-0.5 ${isScrolled ? 'bg-gray-700' : 'bg-white'}`}></span>
              <span className={`block w-6 h-0.5 ${isScrolled ? 'bg-gray-700' : 'bg-white'}`}></span>
            </div>
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-secondary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="block bg-secondary text-white px-6 py-2 rounded-full text-center hover:bg-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                상담문의
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}