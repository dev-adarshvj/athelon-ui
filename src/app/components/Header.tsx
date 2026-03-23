import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Sports', id: 'sports' },
    { label: 'Products', id: 'products' },
    { label: 'R&D', id: 'innovation' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
              <span className="text-black text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>A</span>
            </div>
            <span className="text-white text-2xl tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
              ATHLEON
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wide uppercase"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-all duration-300 uppercase text-sm tracking-wide"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Get Quote
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pt-4 pb-2 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-400 hover:text-white transition-colors duration-300 text-left uppercase text-sm tracking-wide"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-all duration-300 uppercase text-sm tracking-wide"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Get Quote
            </button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}