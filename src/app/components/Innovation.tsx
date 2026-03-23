import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Cpu, Zap, Shield, Globe } from 'lucide-react';

export function Innovation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const innovations = [
    {
      icon: <Cpu size={32} />,
      title: 'Paperless System',
      description: 'Revolutionary electronic target eliminating paper waste'
    },
    {
      icon: <Zap size={32} />,
      title: 'Real-Time Analytics',
      description: 'Instant performance feedback and data visualization'
    },
    {
      icon: <Shield size={32} />,
      title: 'Precision Engineering',
      description: 'Military-grade accuracy and reliability'
    },
    {
      icon: <Globe size={32} />,
      title: 'Universal Compatibility',
      description: 'Works across multiple sports and disciplines'
    }
  ];

  return (
    <section id="innovation" ref={ref} className="relative py-32 bg-black overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Glow Effects */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-[180px]"
      ></motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            R&D & INNOVATION
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Pioneering the future of sports technology through research and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Innovation Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1760493828288-d2dbb70d18c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc3NDI0MzYwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Innovation Lab"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-lg backdrop-blur-md bg-white/10 border border-white/20">
                <h3 className="text-white text-2xl mb-2 tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
                  AET10 ELECTRONIC TARGET
                </h3>
                <p className="text-gray-300 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  Our flagship R&D project - A completely paperless electronic target system revolutionizing the shooting sports industry
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Innovation Features */}
          <div className="space-y-6">
            {innovations.map((innovation, index) => (
              <motion.div
                key={innovation.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="flex items-start gap-4 p-6 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-white/10 text-white group-hover:scale-110 transition-transform duration-300">
                    {innovation.icon}
                  </div>
                  <div>
                    <h4 className="text-white text-lg mb-2 tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
                      {innovation.title}
                    </h4>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                      {innovation.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Innovation Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="p-8 md:p-12 rounded-lg backdrop-blur-md bg-gradient-to-br from-white/5 to-white/10 border border-white/20">
            <blockquote className="text-gray-300 text-xl md:text-2xl italic leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              "Innovation is not just about creating new products—it's about solving real problems for athletes and coaches, making training more efficient, sustainable, and accessible."
            </blockquote>
            <div className="text-white tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
              — ATHLEON R&D TEAM
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}