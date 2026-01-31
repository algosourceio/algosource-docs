"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Github } from "lucide-react";

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Program items for dropdown
const programs = [
  { name: "GSoC", href: "/programs/gsoc", description: "Google Summer of Code" },
  { name: "LFX", href: "/programs/lfx", description: "Linux Foundation Mentorship" },
  { name: "SOB", href: "/programs/sob", description: "Summer of Bitcoin" },
  { name: "Outreachy", href: "/programs/outreachy", description: "Outreachy Internships", comingSoon: true },
  { name: "ESOC", href: "/programs/esoc", description: "European Summer of Code", comingSoon: true },
  { name: "C4GT", href: "/programs/c4gt", description: "Code for GovTech", comingSoon: true },
];

// Simple dropdown component
function NavDropdown({ label, items }: { 
  label: string; 
  items: { name: string; href: string; description: string; comingSoon?: boolean }[]; 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 100);
  };

  return (
    <div 
      className="relative" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="nx-flex nx-items-center nx-gap-1 nx-px-2 nx-py-1.5 nx-text-sm nx-font-medium nx-text-gray-600 dark:nx-text-gray-400 hover:nx-text-gray-900 dark:hover:nx-text-white nx-transition-colors nx-rounded-md hover:nx-bg-gray-100 dark:hover:nx-bg-neutral-800">
        {label}
        <ChevronDown className={`nx-w-4 nx-h-4 nx-transition-transform nx-duration-200 ${isOpen ? "nx-rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="nx-absolute nx-top-full nx-left-0 nx-pt-1 nx-w-56 nx-z-50">
          <div className="nx-rounded-lg nx-border nx-border-gray-200 dark:nx-border-neutral-700 nx-bg-white dark:nx-bg-neutral-900 nx-shadow-lg nx-overflow-hidden">
            <div className="nx-p-1.5">
              {items.map((item) => (
                <Link
                  key={item.name}
                  href={item.comingSoon ? "#" : item.href}
                  className={`nx-flex nx-items-center nx-justify-between nx-px-3 nx-py-2 nx-rounded-md nx-transition-colors ${
                    item.comingSoon 
                      ? "nx-opacity-50 nx-cursor-not-allowed" 
                      : "hover:nx-bg-gray-100 dark:hover:nx-bg-neutral-800"
                  }`}
                  onClick={(e) => {
                    if (item.comingSoon) e.preventDefault();
                    else setIsOpen(false);
                  }}
                >
                  <div>
                    <div className="nx-text-sm nx-font-medium nx-text-gray-900 dark:nx-text-white">{item.name}</div>
                    <div className="nx-text-xs nx-text-gray-500">{item.description}</div>
                  </div>
                  {item.comingSoon && (
                    <span className="nx-text-[10px] nx-px-1.5 nx-py-0.5 nx-rounded-full nx-bg-gray-100 dark:nx-bg-neutral-800 nx-text-gray-500">
                      Soon
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// This component is used as extraContent in Nextra's navbar
export default function Navbar() {
  return (
    <div className="nx-flex nx-items-center nx-gap-1">
      {/* Programs Dropdown */}
      <NavDropdown label="Programs" items={programs} />

      {/* Guide Link */}
      <Link
        href="/"
        className="nx-hidden sm:nx-block nx-px-2 nx-py-1.5 nx-text-sm nx-font-medium nx-text-gray-600 dark:nx-text-gray-400 hover:nx-text-gray-900 dark:hover:nx-text-white nx-transition-colors nx-rounded-md hover:nx-bg-gray-100 dark:hover:nx-bg-neutral-800"
      >
        Guide
      </Link>

      {/* Proposals Link */}
      <Link
        href="/proposals"
        className="nx-hidden sm:nx-block nx-px-2 nx-py-1.5 nx-text-sm nx-font-medium nx-text-gray-600 dark:nx-text-gray-400 hover:nx-text-gray-900 dark:hover:nx-text-white nx-transition-colors nx-rounded-md hover:nx-bg-gray-100 dark:hover:nx-bg-neutral-800"
      >
        Proposals
      </Link>

      <div className="nx-w-px nx-h-5 nx-bg-gray-200 dark:nx-bg-neutral-700 nx-mx-2 nx-hidden sm:nx-block" />

      {/* WhatsApp */}
      <a
        href="https://chat.whatsapp.com/B9vSLumYFCs5IP2UszZnzL"
        target="_blank"
        rel="noopener noreferrer"
        className="nx-p-2 nx-text-gray-500 dark:nx-text-gray-400 hover:nx-text-green-500 dark:hover:nx-text-green-400 nx-transition-colors nx-rounded-md hover:nx-bg-gray-100 dark:hover:nx-bg-neutral-800"
        title="Join our WhatsApp community"
      >
        <WhatsAppIcon className="nx-w-5 nx-h-5" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/algosourceio/algosource-docs/issues/new"
        target="_blank"
        rel="noopener noreferrer"
        className="nx-p-2 nx-text-gray-500 dark:nx-text-gray-400 hover:nx-text-gray-900 dark:hover:nx-text-white nx-transition-colors nx-rounded-md hover:nx-bg-gray-100 dark:hover:nx-bg-neutral-800"
        title="Report an issue"
      >
        <Github className="nx-w-5 nx-h-5" />
      </a>

      {/* Get Started Button */}
      <a
        href="https://algosource.in/auth"
        className="nx-ml-2 nx-px-3 nx-py-1.5 nx-text-sm nx-font-medium nx-bg-gray-900 dark:nx-bg-white nx-text-white dark:nx-text-black nx-rounded-md hover:nx-bg-gray-700 dark:hover:nx-bg-gray-200 nx-transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}
