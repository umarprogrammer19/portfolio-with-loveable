import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-primary mb-2">
              &lt;Portfolio/&gt;
            </div>
            <p className="text-muted-foreground text-sm">
              © {currentYear} John Developer. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Made with Love */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> using React & Tailwind
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Built with modern web technologies
            </p>
          </div>
        </div>

        {/* Scroll to top button */}
        <div className="text-center mt-8 pt-6 border-t border-border">
          <button
            onClick={() => scrollToSection('#hero')}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;