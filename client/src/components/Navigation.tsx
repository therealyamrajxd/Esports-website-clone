import { Link, useLocation } from "wouter";
import { SiDiscord } from "react-icons/si";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/premium", label: "PREMIUM" },
    { path: "/documentation", label: "DOCUMENTATION" },
    { path: "/vote", label: "VOTE" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" data-testid="link-home">
              <a className="flex items-center gap-3 hover-elevate active-elevate-2 transition-transform duration-300 hover:scale-105">
                <div className="w-10 h-10 rounded-lg bg-gradient-purple flex items-center justify-center text-white font-bold text-xl">
                  G
                </div>
                <span className="text-xl font-bold bg-gradient-purple bg-clip-text text-transparent">
                  GACKY
                </span>
              </a>
            </Link>

            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path} data-testid={`link-${link.label.toLowerCase()}`}>
                  <a
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover-elevate active-elevate-2 ${
                      location === link.path
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-join-discord"
                className="px-6 py-2.5 rounded-full bg-gradient-pink text-white font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 active-elevate-2"
              >
                <SiDiscord className="w-5 h-5" />
                <span className="hidden sm:inline">JOIN DISCORD</span>
              </a>

              <Button
                size="icon"
                variant="ghost"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-20 md:hidden" data-testid="mobile-menu">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path} data-testid={`mobile-link-${link.label.toLowerCase()}`}>
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-6 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover-elevate active-elevate-2 block ${
                      location === link.path
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-card"
                    }`}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
