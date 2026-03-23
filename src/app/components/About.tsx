import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Zap, Trophy } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Target size={32} />,
      title: 'R&D-First Company',
      description: 'Innovation at the core of everything we create'
    },
    {
      icon: <Zap size={32} />,
      title: 'Precision Engineering',
      description: 'Crafted with meticulous attention to detail'
    },
    {
      icon: <Trophy size={32} />,
      title: 'Olympic Vision',
      description: 'Building solutions for champions'
    }
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 bg-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              WHO WE ARE
            </h2>
            <div className="w-20 h-1 bg-white mb-8"></div>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Athleon is a pioneering sports technology company dedicated to engineering precision tools for athletic performance. We combine cutting-edge research, innovative design, and meticulous craftsmanship to deliver solutions that empower athletes across multiple disciplines.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              From electronic targets to advanced training modules, every product reflects our commitment to excellence and our vision of supporting the next generation of Olympic champions.
            </p>
          </motion.div>

          {/* Right: Features Grid */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="p-6 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-white/10 text-white group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-white text-xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-400" style={{ fontFamily: 'var(--font-body)' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}