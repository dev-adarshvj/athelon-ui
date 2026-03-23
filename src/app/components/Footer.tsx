import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Products: ['Dry Training Modules', 'Electronic Targets', 'Analytics Software', 'Custom Solutions'],
    Sports: ['Shooting', 'Archery', 'Weightlifting', 'Badminton', 'Table Tennis'],
    Company: ['About Us', 'R&D', 'Achievements', 'Careers', 'Partners'],
    Support: ['Contact', 'Documentation', 'FAQs', 'Warranty', 'Service Centers']
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Youtube size={20} />, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center">
                <span className="text-black text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>A</span>
              </div>
              <span className="text-white text-3xl tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
                ATHLEON
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Engineering precision for athletic performance. Pioneering sports technology solutions trusted by champions worldwide.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white text-sm uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Company Information */}
            <div className="space-y-2 text-gray-500 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
              <p>
                <span className="text-gray-400">CIN:</span> U12345KA2020PTC123456
              </p>
              <p>
                <span className="text-gray-400">GST:</span> 29ABCDE1234F1Z5
              </p>
              <p>
                <span className="text-gray-400">Address:</span> Innovation Park, Tech District, Bangalore, Karnataka - 560001, India
              </p>
            </div>

            {/* Copyright */}
            <div className="text-gray-500 text-xs md:text-right space-y-2" style={{ fontFamily: 'var(--font-body)' }}>
              <p>© {currentYear} Athleon Technologies Private Limited. All rights reserved.</p>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
    </footer>
  );
}