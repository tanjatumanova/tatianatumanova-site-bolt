import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'portfolio', label: 'Портфолио' },
    { id: 'services', label: 'Услуги' },
    { id: 'testimonials', label: 'Отзывы' },
    { id: 'contact', label: 'Контакты' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#FAF6F1]/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('hero')}
            className="flex items-center space-x-3 group"
          >
            <Logo className="w-10 h-10 text-[#3C3C3B] group-hover:text-[#A68C6D] transition-colors" />
            <span className="text-xl font-serif text-[#3C3C3B] group-hover:text-[#A68C6D] transition-colors hidden sm:block">
              Татьяна Туманова
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-[#A68C6D]'
                    : 'text-[#3C3C3B] hover:text-[#A68C6D]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#3C3C3B]"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#A68C6D]/20">
            <div className="flex flex-col space-y-4 mt-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-[#A68C6D]'
                      : 'text-[#3C3C3B] hover:text-[#A68C6D]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
