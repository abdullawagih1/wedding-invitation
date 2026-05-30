import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Envelope from './components/Envelope/Envelope';
import Hero from './components/Hero/Hero';
import Countdown from './components/Countdown/Countdown';
import Story from './components/Story/Story';
import Gallery from './components/Gallery/Gallery';
import EventDetails from './components/EventDetails/EventDetails';
import StickyFooter from './components/StickyFooter/StickyFooter';
import { FloatingPetals } from './components/Shared/Decorative';

/* ─── Main Page Content ─────────────────────────────────────── */
function MainContent() {
  return (
    <>
      <Hero />
      <Countdown />
      <Story />
      <Gallery />
      <EventDetails />

      {/* Final footer */}
      <footer className="py-16 text-center bg-luxury-gradient">
        <div className="section-container">
          <p className="font-arabic-serif text-deep-rose/60 text-lg italic mb-4">
            "وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"
          </p>
          <div className="flex justify-center gap-3 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-rose-gold/30 text-lg animate-twinkle"
                style={{ animationDelay: `${i * 0.4}s` }}>
                ✦
              </span>
            ))}
          </div>
          <p className="font-arabic text-rose-gold/50 text-sm">
            إسراء & عبدالله ❤️ ٢٠٢٦
          </p>
          {/* Bottom padding for sticky footer */}
          <div className="h-16" />
        </div>
      </footer>

      <StickyFooter />
    </>
  );
}

/* ─── Root App Component ────────────────────────────────────── */
export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-luxury-gradient">
      {/* Floating petals — ambient background effect */}
      <FloatingPetals count={10} />

      {/* Envelope opening experience */}
      <Envelope onOpen={() => setIsOpen(true)} />

      {/* Main content — fades in after envelope opens */}
      <AnimatePresence>
        {isOpen && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <MainContent />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
