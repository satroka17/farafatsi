"use client";

import Link from "next/link";
import Image from "next/image"; // Important d'importer Image de Next.js
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3"> {/* Padding vertical réduit un peu */}
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          {/* LOGO REMPLACÉ : On utilise le composant Image de Next.js */}
          <Image
            src="/logo-farafatsi.jpg"
            alt="Logo de l'Association FARAFATSI"
            width={56} // w-14
            height={56} // h-14
            className="rounded-full"
          />
          <div>
            <h1 className="font-bold text-xl text-gray-800 group-hover:text-brand-green transition-colors">
              Association FARAFATSI
            </h1>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Protéger l'environnement
            </p>
          </div>
        </Link>

        {/* Desktop Menu - Couleurs mises à jour */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#home" className="text-gray-700 hover:text-brand-green transition-colors font-medium">
            ACCUEIL
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-brand-green transition-colors font-medium">
            À PROPOS
          </Link>
          <Link href="#activities" className="text-gray-700 hover:text-brand-green transition-colors font-medium">
            NOS PROJETS
          </Link>
          <Link href="#members" className="text-gray-700 hover:text-brand-green transition-colors font-medium">
            NOS EQUIPES
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-brand-green transition-colors font-medium">
            CONTACT
          </Link>
          <Link 
            href="#donate" 
            className="bg-brand-green hover:bg-brand-green-dark text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 font-semibold flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            {/* L'icône peut être un coeur ou une main pour varier */}
            <span>❤️</span>
            FAIRE UN DON
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Couleurs mises à jour */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col space-y-4 px-6 py-6">
            <Link href="#home" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-brand-green transition-colors font-medium py-2">
              ACCUEIL
            </Link>
            <Link href="#about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-brand-green transition-colors font-medium py-2">
              À PROPOS
            </Link>
            <Link href="#activities" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-brand-green transition-colors font-medium py-2">
              NOS PROJETS
            </Link>
            <Link href="#members" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-brand-green transition-colors font-medium py-2">
              BLOG
            </Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-brand-green transition-colors font-medium py-2">
              CONTACT
            </Link>
            <Link href="#donate" onClick={() => setIsOpen(false)} className="bg-brand-green hover:bg-brand-green-dark text-white px-6 py-3 rounded-full transition-all text-center font-semibold flex items-center justify-center gap-2">
              <span>❤️</span>
              FAIRE UN DON
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}