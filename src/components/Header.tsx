import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between md:grid md:grid-cols-3 md:gap-4">
          <a href="#home" className="flex items-center space-x-2 md:justify-self-start">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shrink-0">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <div>
              <span className="text-xl font-bold text-foreground leading-tight">Anjani Lifecure Sciences</span>
            </div>
          </a>

          <ul className="hidden md:flex items-center md:justify-self-center space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <Button asChild variant="default" className="hidden md:inline-flex md:justify-self-end">
            <a href="#contact">Contact</a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <ul className="space-y-4 pt-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
