import Link from "next/link";
import Image from "next/image";
import { Mail, Heart, Github } from "lucide-react";
import { useTheme } from "nextra-theme-docs";

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
    { name: "GSoC", href: "https://algosource.in/programs/gsoc" },
    { name: "LFX Mentorship", href: "https://algosource.in/programs/lfx" },
    { name: "Summer of Bitcoin", href: "https://algosource.in/programs/sob" },
    { name: "Outreachy", href: "https://algosource.in/programs/outreachy", comingSoon: true },
    { name: "ESOC", href: "https://algosource.in/programs/esoc", comingSoon: true },
    { name: "C4GT", href: "https://algosource.in/programs/c4gt", comingSoon: true },
  ],
  Platform: [
    { name: "Proposal Library", href: "https://algosource.in/proposal" },
    { name: "Changelog", href: "https://algosource.in/changelog" },
  ],
  Company: [
    { name: "Terms of Service", href: "https://algosource.in/terms" },
    { name: "Privacy Policy", href: "https://algosource.in/privacy" },
    { name: "Disclaimer", href: "https://algosource.in/disclaimer" },
  ],
};

const socialLinks = [
  { name: "WhatsApp", tooltip: "Join our community", href: "https://chat.whatsapp.com/B9vSLumYFCs5IP2UszZnzL", isWhatsApp: true },
  { name: "Email", tooltip: "Send us an email", icon: Mail, href: "mailto:algo.source.io@gmail.com" },
  { name: "GitHub", tooltip: "Found an issue?", icon: Github, href: "https://github.com/algosourceio/algosource-docs/issues/new" },
];

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const isDark = true; // Always use dark theme for footer
  
  return (
    <footer className="border-t border-white/8 bg-[#0d1117]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2">
            <Link href="https://algosource.in/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="AlgoSource Logo"
                  width={32}
                  height={32}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">AlgoSource</span>
            </Link>
            <p className="text-sm mb-6 leading-relaxed max-w-md text-[#8b949e]">
              Your gateway to open source opportunities. Discover programs, access proposals, 
              and kickstart your journey in open source.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <div key={social.name} className="relative group">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-md flex items-center justify-center transition-all bg-white/5 border border-white/8 text-[#8b949e] hover:text-white hover:bg-white/10 hover:border-white/15"
                      aria-label={social.name}
                    >
                      {social.isWhatsApp ? (
                        <WhatsAppIcon className="w-4 h-4" />
                      ) : Icon ? (
                        <Icon className="w-4 h-4" />
                      ) : null}
                    </a>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden sm:block text-white bg-[#21262d] border border-white/8">
                      {social.tooltip}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#21262d] border-r border-b border-white/8"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold mb-4 uppercase tracking-wider text-[#e6edf3]">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.comingSoon ? "#" : link.href}
                      className={`text-sm transition-colors inline-flex items-center gap-2 ${
                        link.comingSoon 
                          ? "text-[#484f58] cursor-not-allowed"
                          : "text-[#8b949e] hover:text-white"
                      }`}
                      onClick={(e) => link.comingSoon && e.preventDefault()}
                    >
                      {link.name}
                      {link.comingSoon && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-[#8b949e]">
                          Soon
                        </span>
                      )}
                      {link.premium && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm flex items-center gap-1.5 text-center sm:text-left text-[#8b949e]">
              © {new Date().getFullYear()} AlgoSource. Made with 
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> 
              for the open source community.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-5">
              <Link
                href="https://algosource.in/terms"
                className="text-sm transition-colors text-[#8b949e] hover:text-white"
              >
                Terms
              </Link>
              <Link
                href="https://algosource.in/privacy"
                className="text-sm transition-colors text-[#8b949e] hover:text-white"
              >
                Privacy
              </Link>
              <Link
                href="https://algosource.in/disclaimer"
                className="text-sm transition-colors text-[#8b949e] hover:text-white"
              >
                Disclaimer
              </Link>
              <Link
                href="https://algosource.in/changelog"
                className="text-sm transition-colors text-[#8b949e] hover:text-white"
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
