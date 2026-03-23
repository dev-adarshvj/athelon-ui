import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      name: 'DTM01 Dry Training Module',
      category: 'Shooting',
      description: 'Advanced dry training system for precision shooting practice without ammunition',
      image: 'https://images.unsplash.com/photo-1621713762573-9afc48cdb852?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwdGFyZ2V0JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQyNDM2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true
    },
    {
      name: 'DTM05 Training System',
      category: 'Shooting',
      description: 'Professional-grade training module with real-time feedback and analytics',
      image: 'https://images.unsplash.com/photo-1645999140911-fb4e70baf2b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9vdGluZyUyMHNwb3J0JTIwcmlmbGV8ZW58MXx8fHwxNzc0MjQzNjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true
    },
    {
      name: 'AET10 Electronic Target',
      category: 'Archery & Shooting',
      description: 'Revolutionary paperless electronic target system (R&D Focus)',
      image: 'https://images.unsplash.com/photo-1771784630899-f95d3ba54e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoZXJ5JTIwdGFyZ2V0JTIwcHJlY2lzaW9ufGVufDF8fHx8MTc3NDI0MzYwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true
    },
    {
      name: 'Performance Tracker Pro',
      category: 'Weightlifting',
      description: 'Real-time performance monitoring and data analytics for strength training',
      image: 'https://images.unsplash.com/photo-1644085159646-c2c7c8d27064?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWlnaHRsaWZ0aW5nJTIwYmFyYmVsbCUyMGd5bXxlbnwxfHx8fDE3NzQyNDM2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false
    },
    {
      name: 'Smart Badminton Analytics',
      category: 'Badminton',
      description: 'AI-powered training analytics for improving technique and strategy',
      image: 'https://images.unsplash.com/photo-1613918431551-b2ef2720387c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWRtaW50b24lMjByYWNrZXQlMjBwbGF5ZXJ8ZW58MXx8fHwxNzc0MjQzNjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false
    },
    {
      name: 'Table Tennis Coach AI',
      category: 'Table Tennis',
      description: 'Intelligent coaching system with motion tracking and performance insights',
      image: 'https://images.unsplash.com/photo-1576617497557-22895ee5930b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZSUyMHRlbm5pcyUyMHBhZGRsZSUyMHBsYXllcnxlbnwxfHx8fDE3NzQyNDM2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false
    }
  ];

  return (
    <section id="products" ref={ref} className="relative py-32 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            OUR PRODUCTS
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Innovative solutions engineered for peak athletic performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg backdrop-blur-md bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-500">
                {/* Featured Badge */}
                {product.featured && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-white text-black text-xs uppercase tracking-wider rounded-full" style={{ fontFamily: 'var(--font-body)' }}>
                    Featured
                  </div>
                )}

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-gray-400 text-sm uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    {product.category}
                  </div>
                  <h3 className="text-white text-xl mb-3 tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    {product.description}
                  </p>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="flex-1 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-all duration-300 text-sm uppercase tracking-wide flex items-center justify-center gap-2 group/btn"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Get Quote
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}