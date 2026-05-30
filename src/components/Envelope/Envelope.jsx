import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { DecorativeStars } from '../Shared/Decorative';

/* ─── Envelope SVG Components ──────────────────────────────── */
function EnvelopeBody() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" preserveAspectRatio="none">
      {/* Envelope body */}
      <defs>
        <linearGradient id="envBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5e6e8" />
          <stop offset="50%" stopColor="#ecddd5" />
          <stop offset="100%" stopColor="#f0e4d8" />
        </linearGradient>
        <linearGradient id="envShadowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(183,110,121,0.15)" />
          <stop offset="100%" stopColor="rgba(139,74,82,0.05)" />
        </linearGradient>
        <filter id="envShadow">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(139,74,82,0.2)" />
        </filter>
      </defs>

      {/* Main body */}
      <rect x="0" y="20" width="320" height="180" rx="8" fill="url(#envBodyGrad)" filter="url(#envShadow)" />

      {/* Bottom left triangle */}
      <polygon points="0,20 160,120 0,200" fill="rgba(183,110,121,0.1)" />
      {/* Bottom right triangle */}
      <polygon points="320,20 160,120 320,200" fill="rgba(201,169,110,0.1)" />

      {/* Center bottom fold */}
      <polygon points="0,200 160,120 320,200" fill="rgba(183,110,121,0.08)" />

      {/* Border */}
      <rect x="0" y="20" width="320" height="180" rx="8" fill="none" stroke="rgba(183,110,121,0.3)" strokeWidth="1" />
    </svg>
  );
}

function EnvelopeFlap({ isOpen }) {
  return (
    <motion.div
      className="absolute top-0 left-0 right-0 origin-top"
      style={{ height: '60%', transformStyle: 'preserve-3d' }}
      animate={isOpen ? { rotateX: -180 } : { rotateX: 0 }}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <svg viewBox="0 0 320 120" className="w-full" style={{ display: 'block' }}>
        <defs>
          <linearGradient id="flapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ecddd5" />
            <stop offset="100%" stopColor="#f5e6e8" />
          </linearGradient>
        </defs>
        {/* Flap triangle shape */}
        <polygon points="0,0 320,0 160,120" fill="url(#flapGrad)" />
        <polygon points="0,0 320,0 160,120" fill="none" stroke="rgba(183,110,121,0.25)" strokeWidth="1" />
      </svg>
    </motion.div>
  );
}

/* ─── Wax Seal ──────────────────────────────────────────────── */
function WaxSeal({ onClick, isOpen }) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.button
          className="absolute left-1/2 -translate-x-1/2 cursor-pointer focus:outline-none"
          style={{ top: '38%' }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClick}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label="افتح الدعوة"
        >
          <div className="relative w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle at 35% 35%, #d4506a, #8b2035)',
              boxShadow: '0 4px 20px rgba(139,32,53,0.5), inset 0 1px 3px rgba(255,255,255,0.2)',
            }}
          >
            {/* Seal texture rings */}
            <div className="absolute inset-1 rounded-full border border-white/10" />
            <div className="absolute inset-3 rounded-full border border-white/10" />
            <Heart className="w-7 h-7 text-white/90" fill="rgba(255,255,255,0.8)" />
          </div>
          <p className="text-center mt-2 font-arabic text-xs text-rose-gold/70 tracking-wide">
            اضغط للفتح
          </p>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ─── Invitation Card (emerges from envelope) ───────────────── */
function InvitationCard({ isOpen }) {
  return (
    <motion.div
      className="absolute left-4 right-4 rounded-lg overflow-hidden"
      style={{
        bottom: isOpen ? undefined : '5%',
        background: 'linear-gradient(145deg, #fffff0, #fdf8f0)',
        border: '1px solid rgba(183,110,121,0.2)',
        boxShadow: '0 8px 32px rgba(183,110,121,0.15)',
        zIndex: 5,
      }}
      initial={{ y: 0, opacity: 0 }}
      animate={isOpen ? { y: -40, opacity: 1 } : { y: 0, opacity: 0 }}
      transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
    >
      <div className="p-6 text-center">
        <p className="font-arabic text-xs text-rose-gold/60 tracking-widest mb-2">دعوة زفاف</p>
        <h3 className="font-arabic-serif text-2xl text-deep-rose font-bold">إسراء & عبدالله</h3>
        <p className="font-arabic text-xs text-warm-gold/80 mt-2">٢٣ مايو ٢٠٢٦</p>
      </div>
    </motion.div>
  );
}

/* ─── Main Envelope Component ───────────────────────────────── */
export default function Envelope({ onOpen }) {
  const [phase, setPhase] = useState('idle'); // idle | opening | open
  const [showPage, setShowPage] = useState(false);

  // Lock scroll while envelope is showing
  useEffect(() => {
    document.body.classList.add('scroll-locked');
    return () => document.body.classList.remove('scroll-locked');
  }, []);

  const handleOpen = () => {
    if (phase !== 'idle') return;
    setPhase('opening');
    setTimeout(() => setPhase('open'), 1400);
    setTimeout(() => setShowPage(true), 2200);
    setTimeout(() => {
      document.body.classList.remove('scroll-locked');
      onOpen();
    }, 2800);
  };

  return (
    <AnimatePresence>
      {!showPage && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center z-50"
          style={{
            background: 'radial-gradient(ellipse at 50% 40%, #f9f0f2 0%, #f0e8f0 40%, #e8dfd8 100%)',
          }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Stars background */}
          <DecorativeStars />

          {/* Top label */}
          <motion.div
            className="text-center mb-10 relative z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="font-arabic text-rose-gold/60 text-sm tracking-widest mb-1">بسم الله الرحمن الرحيم</p>
            <h1 className="font-arabic-serif text-deep-rose text-3xl font-bold">
              دعوة زفاف
            </h1>
          </motion.div>

          {/* Envelope */}
          <motion.div
            className="relative w-full max-w-xs mx-8"
            style={{ perspective: '800px', aspectRatio: '320/220' }}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Envelope body */}
            <div className="absolute inset-0 envelope-shadow rounded-lg overflow-visible">
              <EnvelopeBody />
            </div>

            {/* Flap */}
            <div className="absolute inset-0" style={{ perspective: '600px' }}>
              <EnvelopeFlap isOpen={phase !== 'idle'} />
            </div>

            {/* Wax seal */}
            <WaxSeal onClick={handleOpen} isOpen={phase !== 'idle'} />

            {/* Invitation card emerging */}
            <InvitationCard isOpen={phase === 'open'} />
          </motion.div>

          {/* CTA text */}
          <AnimatePresence>
            {phase === 'idle' && (
              <motion.button
                className="mt-10 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                onClick={handleOpen}
              >
                <div className="btn-luxury flex items-center gap-2 text-sm">
                  <Heart className="w-4 h-4" fill="white" />
                  <span>افتح الدعوة</span>
                </div>
              </motion.button>
            )}
          </AnimatePresence>

          {/* Opening message */}
          <AnimatePresence>
            {phase === 'opening' && (
              <motion.p
                className="mt-10 font-arabic text-rose-gold/70 text-sm text-center relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                جاري فتح الدعوة...
              </motion.p>
            )}
          </AnimatePresence>

          {/* Decorative bottom line */}
          <motion.div
            className="absolute bottom-8 flex items-center gap-2 opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.5 }}
          >
            <div className="w-16 h-px bg-rose-gold/50" />
            <Heart className="w-3 h-3 text-rose-gold" fill="#b76e79" />
            <div className="w-16 h-px bg-rose-gold/50" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
