import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Sports() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sports = [
    {
      name: 'Shooting',
      image: 'https://images.unsplash.com/photo-1645999140911-fb4e70baf2b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9vdGluZyUyMHNwb3J0JTIwcmlmbGV8ZW58MXx8fHwxNzc0MjQzNjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Precision targets & training systems'
    },
    {
      name: 'Archery',
      image: 'https://images.unsplash.com/photo-1771784630899-f95d3ba54e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoZXJ5JTIwdGFyZ2V0JTIwcHJlY2lzaW9ufGVufDF8fHx8MTc3NDI0MzYwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Advanced scoring technology'
    },
    {
      name: 'Weightlifting',
      image: 'https://images.unsplash.com/photo-1644085159646-c2c7c8d27064?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWlnaHRsaWZ0aW5nJTIwYmFyYmVsbCUyMGd5bXxlbnwxfHx8fDE3NzQyNDM2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Performance tracking equipment'
    },
    {
      name: 'Badminton',
      image: 'https://images.unsplash.com/photo-1613918431551-b2ef2720387c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWRtaW50b24lMjByYWNrZXQlMjBwbGF5ZXJ8ZW58MXx8fHwxNzc0MjQzNjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Smart training analytics'
    },
    {
      name: 'Table Tennis',
      image: 'https://images.unsplash.com/photo-1576617497557-22895ee5930b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZSUyMHRlbm5pcyUyMHBhZGRsZSUyMHBsYXllcnxlbnwxfHx8fDE3NzQyNDM2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Digital coaching solutions'
    }
  ];

  return (
    <section id="sports" ref={ref} className="relative py-32 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[150px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            SPORTS WE SERVE
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Delivering cutting-edge technology across multiple athletic disciplines
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {sports.map((sport, index) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
            >
              {/* Image */}
              <img
                src={sport.image}
                alt={sport.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Border Glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/50 transition-all duration-300 rounded-lg"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-2xl mb-2 tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
                  {sport.name}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: 'var(--font-body)' }}>
                  {sport.description}
                </p>
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}