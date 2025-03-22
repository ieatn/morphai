'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-10 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-foreground">
              MorphAI
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground">
              Features
            </Link>
            <Link href="#examples" className="text-sm font-medium text-foreground/80 hover:text-foreground">
              Examples
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-foreground/80 hover:text-foreground">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium text-foreground/80 hover:text-foreground">
              FAQ
            </Link>
          </nav>
          
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/login"
              className="text-sm font-medium text-foreground/80 hover:text-foreground px-2"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-foreground/20 px-4 py-2 text-sm font-medium text-foreground hover:bg-foreground/30 transition-colors"
            >
              Sign up
            </Link>
            <Link
              href="#get-started"
              className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-20 z-20 bg-background border-t border-foreground/10 md:hidden">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                Features
              </Link>
              <Link href="#examples" className="text-sm font-medium text-foreground/80 hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                Examples
              </Link>
              <Link href="#pricing" className="text-sm font-medium text-foreground/80 hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="#faq" className="text-sm font-medium text-foreground/80 hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </Link>
              <div className="flex flex-col space-y-2 pt-2 border-t border-foreground/10">
                <Link
                  href="/login"
                  className="text-sm font-medium text-foreground/80 hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="rounded-full bg-foreground/20 px-4 py-2 text-sm font-medium text-foreground hover:bg-foreground/30 transition-colors inline-block w-fit"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign up
                </Link>
                <Link
                  href="#get-started"
                  className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90 transition-opacity inline-block w-fit"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 