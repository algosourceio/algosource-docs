"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Github,
  Menu,
  X,
} from "lucide-react";

// Helper function to conditionally join classNames
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// Custom hook for scroll detection
function useScroll(threshold: number = 10) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Program items for dropdown
const programs = [
  { name: "GSoC", href: "/programs/gsoc", description: "Google Summer of Code", available: true },
  { name: "LFX", href: "/programs/lfx", description: "Linux Foundation Mentorship", available: true },
  { name: "SOB", href: "/programs/sob", description: "Summer of Bitcoin", available: true },
  { name: "Outreachy", href: "/programs/outreachy", description: "Outreachy Internships", comingSoon: true },
  { name: "ESOC", href: "/programs/esoc", description: "European Summer of Code", comingSoon: true },
  { name: "C4GT", href: "/programs/c4gt", description: "Code for GovTech", comingSoon: true },
];

// Dropdown component with hover - instant open, no delay
function NavDropdown({ 
  label, 
  items, 
  isOpen, 
  onOpen,
  onClose,
}: { 
  label: string; 
  items: { name: string; href: string; description: string; comingSoon?: boolean; available?: boolean }[]; 
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    onOpen();
  };

  const handleMouseLeave = () => {
    onClose();
  };

  return (
    <div 
      className="relative" 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
          isOpen ? "text-white" : "text-zinc-400 hover:text-white"
        }`}
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <div 
        className={`absolute top-full left-0 pt-2 w-64 z-50 ${
          isOpen 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="rounded-xl border border-white/10 bg-[#080a0e] backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-200 origin-top">
          <div className="p-2">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.comingSoon ? "#" : item.href}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${
                  item.comingSoon 
                    ? "opacity-50 cursor-not-allowed" 
                    : "hover:bg-white/5"
                }`}
                onClick={(e) => item.comingSoon && e.preventDefault()}
              >
                <div>
                  <div className="text-sm font-medium text-white">{item.name}</div>
                  <div className="text-xs text-zinc-500">{item.description}</div>
                </div>
                {item.comingSoon && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400">
                    Soon
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const scrolled = useScroll(10);

  const openDropdownHandler = (name: string) => {
    setOpenDropdown(name);
  };

  const closeDropdownHandler = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          'mx-auto flex items-center justify-between rounded-2xl border px-4 sm:px-6 will-change-[background-color,border-color,box-shadow]',
          'transition-[background-color,border-color,box-shadow] duration-200 ease-out',
          scrolled || isMobileMenuOpen
            ? 'h-14 max-w-5xl border-white/10 bg-[#0f1117]/95 shadow-lg shadow-black/10 backdrop-blur-xl'
            : 'h-14 max-w-6xl border-transparent bg-transparent'
        )}
      >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="w-10 h-10 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="AlgoSource Logo"
                width={300}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block text-white font-mono">AlgoSource</span>
            {/* Version badge */}
            <span className="hidden md:inline-flex items-center gap-1.5 ml-2 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-medium text-green-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              v1.0
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Programs Dropdown */}
            <NavDropdown
              label="Programs"
              items={programs}
              isOpen={openDropdown === "programs"}
              onOpen={() => openDropdownHandler("programs")}
              onClose={closeDropdownHandler}
            />

            {/* Guide - Direct Link */}
            <Link
              href="https://docs.algosource.in/"
              className="px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Guide
            </Link>

            <Link
              href="/proposal"
              className="px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Proposals
            </Link>

            {/* <Link
              href="/team"
              className="px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Team
            </Link> */}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-2">
            {/* Search */}
            {/* <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-500 bg-white/5 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
              <Search className="w-4 h-4" />
              <span>Search...</span>
              <kbd className="hidden lg:inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-mono bg-white/10 rounded">
                ⌘K
              </kbd>
            </button> */}

            {/* WhatsApp */}
            <div className="relative group">
              <a
                href="https://chat.whatsapp.com/B9vSLumYFCs5IP2UszZnzL"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-green-400 transition-colors block"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 text-xs font-medium text-white bg-zinc-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                Join our community
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 rotate-45 border-l border-t border-white/10"></div>
              </div>
            </div>

            {/* GitHub Issues */}
            <div className="relative group">
              <a
                href="https://github.com/algosourceio/algosource-docs/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white transition-colors block"
              >
                <Github className="w-5 h-5" />
              </a>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 text-xs font-medium text-white bg-zinc-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                Found an issue?
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 rotate-45 border-l border-t border-white/10"></div>
              </div>
            </div>

            {/* Get Started Link */}
            <a
              href="https://algosource.in/auth"
              className="px-4 py-2 text-sm font-medium bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-zinc-400 hover:text-white border border-white/10 bg-transparent hover:bg-white/5 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0f1117] border-t border-white/10 py-4">
            <div className="flex flex-col gap-1 px-2">
              {/* Programs Section */}
              <div className="px-3 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                Programs
              </div>
              {programs.map((program) => (
                <Link
                  key={program.name}
                  href={program.comingSoon ? "#" : program.href}
                  className={`flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    program.comingSoon
                      ? "text-zinc-600 cursor-not-allowed"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={(e) => {
                    if (program.comingSoon) e.preventDefault();
                    else setIsMobileMenuOpen(false);
                  }}
                >
                  {program.name}
                  {program.comingSoon && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-zinc-800 text-zinc-500">
                      Soon
                    </span>
                  )}
                </Link>
              ))}

              <div className="border-t border-white/10 my-2"></div>

              {/* Other Links */}
              <Link
                href="https://docs.algosource.in/"
                className="px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Guides
              </Link>
              <Link
                href="/proposal"
                className="px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Proposals
              </Link>
              {/* <Link
                href="/team"
                className="px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </Link> */}

              <div className="border-t border-white/10 my-2"></div>

              {/* Community Links */}
              <div className="px-3 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                Join our community
              </div>
              <div className="flex gap-3 px-4 py-2">
                <a
                  href="https://chat.whatsapp.com/B9vSLumYFCs5IP2UszZnzL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-zinc-400 hover:text-green-400 bg-white/5 rounded-lg transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              </div>

              <div className="border-t border-white/10 my-2"></div>

              <a
                href="https://algosource.in/programs/gsoc"
                className="px-4 py-3 text-sm font-medium bg-white text-black rounded-lg text-center hover:bg-zinc-200 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
    </header>
  );
}
