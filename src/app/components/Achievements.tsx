import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Users, Target, TrendingUp } from 'lucide-react';

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: <Award size={40} />,
      number: '15+',
      label: 'Championships Supported',
      description: 'State-level competitions'
    },
    {
      icon: <Users size={40} />,
      number: '500+',
      label: 'Athletes Trained',
      description: 'Including deaf Olympic team'
    },
    {
      icon: <Target size={40} />,
      number: '10+',
      label: 'Product Lines',
      description: 'Across multiple sports'
    },
    {
      icon: <TrendingUp size={40} />,
      number: '98%',
      label: 'Satisfaction Rate',
      description: 'Customer feedback'
    }
  ];

  const highlights = [
    {
      title: 'Deaf Olympic Shooting Team',
      description: 'Our DTM systems are trusted by the deaf Olympic shooting team for their training programs',
      year: '2025'
    },
    {
      title: 'State Championship Sponsorship',
      description: 'Official technology partner for multiple state-level shooting championships',
      year: '2024-25'
    },
    {
      title: 'Innovation Award',
      description: 'Recognized for breakthrough in paperless electronic target technology',
      year: '2024'
    }
  ];

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 right-0 w-96 h-96 bg-white/10 rounded-full blur-[150px]"
      ></motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            ACHIEVEMENTS
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Milestones that define our journey of excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-6 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 text-center">
                <div className="flex justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl text-white mb-2 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  {stat.number}
                </div>
                <div className="text-white text-sm mb-1 uppercase tracking-wider" style={{ fontFamily: 'var(--font-body)' }}>
                  {stat.label}
                </div>
                <div className="text-gray-500 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlights Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex items-start gap-6">
                  {/* Year Badge */}
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-white flex items-center justify-center text-black font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                    {highlight.year}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 rounded-lg backdrop-blur-md bg-white/5 border border-white/10">
                    <h3 className="text-white text-xl mb-2 tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                      {highlight.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < highlights.length - 1 && (
                  <div className="absolute left-10 top-20 w-0.5 h-8 bg-gradient-to-b from-white to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}