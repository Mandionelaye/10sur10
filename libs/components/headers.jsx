"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { LanguageSwitcher } from "./Language-Switcher";


export default function Headers() {
  const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'À Propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const traduire = (langue) => {
    (typeof window !== 'undefined') && window?.translateTo(langue);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center cursor-pointer" data-testid="logo-link">
              <img src="assets/logo/trans3.svg" alt="Logo" className="object-contain md:h-28 md:w-28 h-10 w-10 rounded-4xl"/>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link hover:text-[#36a9e1] transition-colors duration-300 ${
                    location === item.href 
                      ? ' text-[#36a9e1]' 
                      : 'text-gray-700'
                  }`}
                  data-testid={`nav-${item.name.toLowerCase().replace(' ', '-')}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/recrutement" className="bg-gradient-to-r from-[#0ebeff] to-[#36a9e1] text-white px-6 py-2 rounded-full hover:from-sky-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">Recrutement</Link>
               <LanguageSwitcher />
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="mobile-menu-button"
            >
              {isOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6  text-black" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border" data-testid="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block  text-gray-700 hover:text-[#36a9e1] px-3 py-2 text-base font-medium transition-colors ${
                  location === item.href 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
                data-testid={`mobile-nav-${item.name.toLowerCase().replace(' ', '-')}`}
              >
                {item.name}
              </Link>
            ))}
              <Link href="/recrutement" className="bg-gradient-to-r from-[#0ebeff] to-[#36a9e1] text-white px-6 py-2 rounded-full hover:from-sky-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 whitespace-nowrap mb-3">Recrutement</Link>
               <LanguageSwitcher />
           </div>
        </div>
      )}
    </nav>
  );
}
