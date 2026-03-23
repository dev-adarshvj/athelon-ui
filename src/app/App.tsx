import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Sports } from './components/Sports';
import { Products } from './components/Products';
import { Achievements } from './components/Achievements';
import { Innovation } from './components/Innovation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { useState, useEffect } from 'react';export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden" style={{ fontFamily: 'var(--font-body)' }}>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col items-center justify-center"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-t-2 border-r-2 border-white rounded-full mb-4"
              />
              <motion.h1 
                className="text-2xl tracking-[0.3em] font-light text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                ATHLEON
              </motion.h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />

      <Header />
      <main>
        <Hero />
        <About />
        <Sports />
        <Products />
        <Achievements />
        <Innovation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
