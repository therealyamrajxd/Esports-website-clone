import { Link } from "wouter";
import { SiDiscord } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-purple flex items-center justify-center text-white font-bold text-xl">
                G
              </div>
              <span className="text-xl font-bold">GACKY</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your friendly neighborhood bot server.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" data-testid="footer-link-about">
                <a className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  About
                </a>
              </Link>
              <Link href="/premium" data-testid="footer-link-premium">
                <a className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Premium
                </a>
              </Link>
              <Link href="/documentation" data-testid="footer-link-documentation">
                <a className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Documentation
                </a>
              </Link>
              <Link href="/vote" data-testid="footer-link-vote">
                <a className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Vote
                </a>
              </Link>
              <Link href="/contact" data-testid="footer-link-contact">
                <a className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Contact
                </a>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="footer-link-terms">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="footer-link-privacy">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="footer-link-status">
                Status
              </a>
            </div>
            <div className="mt-6">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-blue hover:scale-110 transition-transform duration-300"
                data-testid="footer-discord-link"
              >
                <SiDiscord className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2025 Gacky. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
