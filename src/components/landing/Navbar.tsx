
"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Logo } from '@/components/Logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'Sobre Nós', href: '/#about' },
  { label: 'Serviços', href: '/#services' },
  { label: 'Equipe', href: '/#team' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial state

    // Set initial hash and listen for changes
    if (typeof window !== "undefined") {
      setCurrentHash(window.location.hash);
    }
    const handleHashChange = () => {
      if (typeof window !== "undefined") {
        setCurrentHash(window.location.hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/95 shadow-md backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            // Determine if the link is active
            // 1. Exact pathname match (for non-hash links)
            // 2. Pathname and hash match (for hash links like /#about or /page#section)
            let isActive = false;
            if (!item.href.includes("#")) {
              isActive = pathname === item.href;
            } else {
              // For href="/#section", targetPath should be "/"
              // For href="/page#section", targetPath should be "/page"
              const itemPathOnly = item.href.split("#")[0] || "/";
              const itemHashOnly = "#" + item.href.split("#")[1];
              isActive = pathname === itemPathOnly && currentHash === itemHashOnly;
            }
            
            // Fallback for root page default section (e.g. /#home should be active on / if no hash)
            if (item.href === "/#home" && pathname === "/" && currentHash === "") {
              isActive = true;
            }


            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-foreground transition-colors relative group py-2.5 px-3", 
                  isActive
                    ? "text-primary font-semibold" // Active state color
                    : "hover:text-primary"        // Hover state color
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute bottom-1.5 left-1/2 transform -translate-x-1/2 h-[2px] bg-primary transition-all duration-300 ease-out",
                    isActive ? "w-1/2" : "w-0 group-hover:w-1/2" // Underline width
                  )}
                />
              </Link>
            );
          })}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col space-y-6">
                <div className="flex justify-between items-center">
                  <Logo />
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon" className="text-primary">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Fechar menu</span>
                      </Button>
                  </SheetClose>
                </div>
                {navItems.map((item) => (
                  <SheetClose key={item.label} asChild>
                    <Link
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
