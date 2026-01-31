"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Github, ExternalLink } from "lucide-react";

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Code/Terminal icon for Platform
const PlatformIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

// Book icon for Guide
const GuideIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

// File icon for Proposals
const ProposalsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

// Programs icon
const ProgramsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

// Community icon
const CommunityIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// Programs data
const programs = [
  { name: "GSoC", href: "https://algosource.in/programs/gsoc", description: "Google Summer of Code", icon: "🌟" },
  { name: "LFX", href: "https://algosource.in/programs/lfx", description: "Linux Foundation Mentorship", icon: "🐧" },
  { name: "SOB", href: "https://algosource.in/programs/sob", description: "Summer of Bitcoin", icon: "₿" },
  { name: "Outreachy", href: "https://algosource.in/programs/outreachy", description: "Outreachy Internships", icon: "🌈", comingSoon: true },
  { name: "ESOC", href: "https://algosource.in/programs/esoc", description: "European Summer of Code", icon: "🇪🇺", comingSoon: true },
  { name: "C4GT", href: "https://algosource.in/programs/c4gt", description: "Code for GovTech", icon: "🏛️", comingSoon: true },
];

// Community links
const communityLinks = [
  { name: "WhatsApp Community", href: "https://chat.whatsapp.com/B9vSLumYFCs5IP2UszZnzL", icon: "💬", description: "Join the discussion" },
  { name: "GitHub Issues", href: "https://github.com/algosourceio/algosource-docs/issues/new", icon: "🐛", description: "Report bugs & feedback" },
  { name: "Contribute", href: "https://github.com/algosourceio/algosource-docs", icon: "🤝", description: "Help improve the docs" },
];

interface DropdownItem {
  name: string;
  href: string;
  description?: string;
  icon?: string;
  comingSoon?: boolean;
}

// Dropdown component
function NavDropdown({ 
  label, 
  items,
  icon: Icon 
}: { 
  label: string; 
  items: DropdownItem[];
  icon?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div 
      className="relative" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="nav-link-btn flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
        {Icon}
        <span>{label}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 pt-2 w-64 z-50">
          <div className="nav-dropdown rounded-lg border border-white/10 bg-[#0d1117] shadow-xl overflow-hidden">
            <div className="p-2">
              {items.map((item) => (
                <Link
                  key={item.name}
                  href={item.comingSoon ? "#" : item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-all ${
                    item.comingSoon 
                      ? "opacity-50 cursor-not-allowed" 
                      : "hover:bg-white/5"
                  }`}
                  onClick={(e) => {
                    if (item.comingSoon) e.preventDefault();
                    else setIsOpen(false);
                  }}
                >
                  {item.icon && (
                    <span className="text-lg w-6 text-center">{item.icon}</span>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-white">{item.name}</span>
                      {item.comingSoon && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-medium">
                          Soon
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-xs text-gray-500 truncate">{item.description}</p>
                    )}
                  </div>
                  {item.href.startsWith("http") && !item.comingSoon && (
                    <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
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

// GitHub dropdown
function GitHubDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  const githubItems = [
    { name: "View Repository", href: "https://github.com/algosourceio/algosource-docs", icon: "📁" },
    { name: "Report Issue", href: "https://github.com/algosourceio/algosource-docs/issues/new", icon: "🐛" },
    { name: "Contribute", href: "https://github.com/algosourceio/algosource-docs/pulls", icon: "🔀" },
  ];

  return (
    <div 
      className="relative" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-1.5 p-2 text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/5">
        <Github className="w-5 h-5" />
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 pt-2 w-48 z-50">
          <div className="nav-dropdown rounded-lg border border-white/10 bg-[#0d1117] shadow-xl overflow-hidden">
            <div className="p-2">
              {githubItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-base">{item.icon}</span>
                  <span className="text-sm text-gray-300 hover:text-white">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Main Navbar component
export default function Navbar() {
  return (
    <nav className="navbar-extra flex items-center gap-0.5">
      {/* Platform Link */}
      <a
        href="https://algosource.in"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link-btn hidden md:flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
      >
        <PlatformIcon className="w-4 h-4" />
        <span>Platform</span>
      </a>

      {/* Guide Link */}
      <Link
        href="/"
        className="nav-link-btn hidden md:flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
      >
        <GuideIcon className="w-4 h-4" />
        <span>Guide</span>
      </Link>

      {/* Programs Dropdown */}
      <div className="hidden md:block">
        <NavDropdown 
          label="Programs" 
          items={programs}
          icon={<ProgramsIcon className="w-4 h-4" />}
        />
      </div>

      {/* Community Dropdown */}
      <div className="hidden md:block">
        <NavDropdown 
          label="Community" 
          items={communityLinks}
          icon={<CommunityIcon className="w-4 h-4" />}
        />
      </div>

      {/* Proposals Link */}
      <Link
        href="/proposals"
        className="nav-link-btn hidden lg:flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
      >
        <ProposalsIcon className="w-4 h-4" />
        <span>Proposals</span>
      </Link>

      {/* Divider */}
      <div className="w-px h-5 bg-white/10 mx-2 hidden md:block" />

      {/* GitHub Dropdown */}
      <GitHubDropdown />

      {/* WhatsApp Quick Link */}
      <a
        href="https://chat.whatsapp.com/B9vSLumYFCs5IP2UszZnzL"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-400 hover:text-green-400 transition-colors rounded-md hover:bg-white/5"
        title="Join WhatsApp Community"
      >
        <WhatsAppIcon className="w-5 h-5" />
      </a>
    </nav>
  );
}
