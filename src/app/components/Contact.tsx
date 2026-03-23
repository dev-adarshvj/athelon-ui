import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'student',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your quote request! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', role: 'student', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-white/10 rounded-full blur-[200px]"
      ></motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            GET A QUOTE
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Ready to elevate your athletic performance? Contact us for a personalized quote
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-8 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-white mb-2 text-sm uppercase tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-black/50 border border-white/20 text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    placeholder="Enter your name"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-white mb-2 text-sm uppercase tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-black/50 border border-white/20 text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    placeholder="your.email@example.com"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <label htmlFor="phone" className="block text-white mb-2 text-sm uppercase tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-black/50 border border-white/20 text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    placeholder="+91 1234567890"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>

                {/* Role Select */}
                <div>
                  <label htmlFor="role" className="block text-white mb-2 text-sm uppercase tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                    You are a
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-black/50 border border-white/20 text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <option value="student">Student / Athlete</option>
                    <option value="coach">Coach / Trainer</option>
                    <option value="dealer">Dealer / Distributor</option>
                    <option value="institution">Institution / Academy</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-white mb-2 text-sm uppercase tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-md bg-black/50 border border-white/20 text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-white text-black rounded-md hover:bg-gray-200 transition-all duration-300 uppercase tracking-wider flex items-center justify-center gap-2 group"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Send Quote Request
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="p-6 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-white/10 text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-white text-lg mb-1 tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
                      Email Us
                    </h3>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                      info@athleon.com<br />
                      sales@athleon.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-white/10 text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-white text-lg mb-1 tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
                      Call Us
                    </h3>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                      +91 98765 43210<br />
                      Mon-Sat, 9 AM - 6 PM IST
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-white/10 text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white text-lg mb-1 tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
                      Visit Us
                    </h3>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                      Innovation Park, Tech District<br />
                      Bangalore, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="p-8 rounded-lg backdrop-blur-md bg-white/10 border border-white/30">
              <h3 className="text-white text-xl mb-4 tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
                Why Choose Athleon?
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">▸</span>
                  <span>Cutting-edge R&D and innovation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">▸</span>
                  <span>Trusted by Olympic athletes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">▸</span>
                  <span>Comprehensive after-sales support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">▸</span>
                  <span>Custom solutions for institutions</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}