'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white w-full">
      <div className="max-w-full mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-2xl md:text-3xl font-serif text-white hover:opacity-80 transition-opacity">
            Varsha Bansal
          </Link>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <nav className="hidden md:flex">
            <Navigation />
          </nav>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Navigation onLinkClick={() => setIsMenuOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
}

