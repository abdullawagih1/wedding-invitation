import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { OrnamentDivider, DecorativeStars } from '../Shared/Decorative';
import { WEDDING_DATA } from '../../data/weddingData';

/* ─── Animated Ring Icon ───────────────────────────────────── */
function RingIcon() {
  return (
    <div className="relative w-24 h-24 mx-auto mb-8">
      {/* Outer glow rings */}
      <div className="absolute inset-0 rounded-full animate-ping opacity-10"
        style={{ background: 'radial-gradient(circle, #c9a96e, transparent)' }} />
      <div className="absolute inset-2 rounded-full animate-pulse opacity-15"
        style={{ background: 'radial-gradient(circle, #b76e79, transparent)' }} />

      {/* Main ring graphic */}
      <svg viewBox="0 0 96 96" className="w-full h-full ring-glow animate-float">
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c9a96e" />
            <stop offset="50%" stopColor="#b76e79" />
            <stop offset="100%" stopColor="#c9a96e" />
          </linearGradient>
          <linearGradient id="ring2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b76e79" />
            <stop offset="100%" stopColor="#8b4a52" />
          </linearGradient>
        </defs>

        {/* Ring 1 */}
        <circle cx="34" cy="52" r="22" fill="none" stroke="url(#ringGrad)" strokeWidth="5" />
        {/* Ring 2 */}
        <circle cx="62" cy="52" r="22" fill="none" stroke="url(#ring2Grad)" strokeWidth="5" />

        {/* Diamond on top ring */}
        <polygon points="34,24 39,31 34,35 29,31" fill="#c9a96e" opacity="0.9" />
        <polygon points="34,24 39,31 34,29 29,31" fill="white" opacity="0.5" />

        {/* Center heart where rings meet */}
        <text x="48" y="56" textAnchor="middle" fontSize="12" fill="rgba(183,110,121,0.6)">♥</text>
      </svg>
    </div>
  );
}

/* ─── Main Hero Component ──────────────────────────────────── */
export default function Hero() {
  const { bride, groom, venue } = WEDDING_DATA;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-hero-gradient px-5 py-20"
    >
      {/* Background decorative stars */}
      <DecorativeStars className="opacity-60" />

      {/* Background gradient circles */}
      <div className="absolute top-1/4 -right-20 w-60 h-60 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #b76e79, transparent)' }} />
      <div className="absolute bottom-1/4 -left-20 w-60 h-60 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #c9a96e, transparent)' }} />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center section-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Small label */}
        <motion.p
          variants={itemVariants}
          className="font-arabic text-rose-gold/70 text-sm tracking-widest mb-2 font-light"
        >
          بسم الله الرحمن الرحيم
        </motion.p>

        {/* Invite label */}
        <motion.p
          variants={itemVariants}
          className="font-arabic text-warm-gold/80 text-xs tracking-widest mb-8 uppercase"
        >
          ✦ دعوة زفاف ✦
        </motion.p>

        {/* Animated ring icon */}
        <motion.div variants={itemVariants}>
          <RingIcon />
        </motion.div>

        {/* Names — the main typographic centrepiece */}
        <motion.div variants={itemVariants} className="mb-4">
          <h1 className="font-arabic-serif leading-tight">
            <span className="block text-shimmer font-bold"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 4.5rem)' }}>
              {bride}
            </span>
            <span className="block text-warm-gold/50 font-light my-1"
              style={{ fontSize: 'clamp(1.2rem, 5vw, 2rem)', letterSpacing: '0.3em' }}>
              &amp;
            </span>
            <span className="block text-shimmer font-bold"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 4.5rem)' }}>
              {groom}
            </span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <OrnamentDivider className="my-5" />
        </motion.div>

        {/* Romantic subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-arabic-serif text-deep-rose/70 text-lg md:text-xl leading-relaxed mb-6 font-light italic"
        >
          "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا"
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-14 flex flex-col items-center gap-2 opacity-60"
        >
          <p className="font-arabic text-xs text-rose-gold/60">تمرير للاستكشاف</p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-px h-8 bg-gradient-to-b from-rose-gold/50 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
