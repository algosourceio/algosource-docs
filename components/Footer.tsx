import Link from "next/link";
import Image from "next/image";
import { Mail, Heart, Github } from "lucide-react";

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

interface FooterLink {
  name: string;
  href: string;
  comingSoon?: boolean;
  premium?: boolean;
}

const footerLinks: Record<string, FooterLink[]> = {
  Programs: [
    { name: "GSoC", href: "/programs/gsoc" },
    { name: "LFX Mentorship", href: "/programs/lfx" },
    { name: "Summer of Bitcoin", href: "/programs/sob" },
    { name: "Outreachy", href: "/programs/outreachy", comingSoon: true },
    { name: "ESOC", href: "/programs/esoc", comingSoon: true },
    { name: "C4GT", href: "/programs/c4gt", comingSoon: true },
  ],
  Platform: [
    { name: "Proposal Library", href: "/proposal" },
    // { name: "Submit Proposal", href: "/proposal/submit" }, // Feature temporarily disabled
    { name: "Changelog", href: "/changelog" },
  ],
  Company: [
    // { name: "Team", href: "/team" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Disclaimer", href: "/disclaimer" },
  ],
};

const socialLinks = [
  { name: "WhatsApp", tooltip: "Join our community", href: "https://chat.whatsapp.com/B9vSLumYFCs5IP2UszZnzL", isWhatsApp: true },
  { name: "Email", tooltip: "Send us an email", icon: Mail, href: "mailto:algo.source.io@gmail.com" },
  { name: "GitHub", tooltip: "Found an issue?", icon: Github, href: "https://github.com/algosourceio/algosource-docs/issues/new" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0f1117]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="AlgoSource Logo"
                  width={50}
                  height={50}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-bold text-xl text-white font-mono">AlgoSource</span>
            </Link>
            <p className="text-sm text-zinc-500 mb-6 leading-relaxed max-w-md font-mono">
              Your gateway to open source opportunities. Discover programs, access proposals, 
              and kickstart your journey in open source.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <div key={social.name} className="relative group">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                      aria-label={social.name}
                    >
                      {social.isWhatsApp ? (
                        <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : Icon ? (
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : null}
                    </a>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs font-medium text-white bg-zinc-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 hidden sm:block">
                      {social.tooltip}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 rotate-45 border-r border-b border-white/10"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4 font-mono">{category}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.comingSoon ? "#" : link.href}
                      className={`text-xs sm:text-sm transition-colors inline-flex items-center gap-2 font-mono ${
                        link.comingSoon 
                          ? "text-zinc-600 cursor-not-allowed" 
                          : "text-zinc-500 hover:text-white"
                      }`}
                      onClick={(e) => link.comingSoon && e.preventDefault()}
                    >
                      {link.name}
                      {link.comingSoon && (
                        <span className="text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0.5 rounded-full bg-zinc-800 text-zinc-500">
                          Soon
                        </span>
                      )}
                      {link.premium && (
                        <span className="text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/20">
                          Pro
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-zinc-500 flex items-center gap-1 font-mono text-center sm:text-left">
              © {new Date().getFullYear()} AlgoSource. Made with 
              <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-500 fill-red-500" /> 
              for the open source community.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <Link
                href="/terms"
                className="text-xs sm:text-sm text-zinc-500 hover:text-white transition-colors font-mono"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-xs sm:text-sm text-zinc-500 hover:text-white transition-colors font-mono"
              >
                Privacy
              </Link>
              <Link
                href="/disclaimer"
                className="text-xs sm:text-sm text-zinc-500 hover:text-white transition-colors font-mono"
              >
                Disclaimer
              </Link>
              <Link
                href="/changelog"
                className="text-xs sm:text-sm text-zinc-500 hover:text-white transition-colors font-mono"
              >
                Changelog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
