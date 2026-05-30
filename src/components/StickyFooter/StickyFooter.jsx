import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useScrolled } from '../../hooks/useScrolled';
import { useCountdown } from '../../hooks/useCountdown';
import { WEDDING_DATA } from '../../data/weddingData';
import { pad } from '../../utils/helpers';

/* ─── Mini Countdown for footer ────────────────────────────── */
function MiniCountdown() {
  const { days, hours, minutes, seconds, expired } = useCountdown(WEDDING_DATA.weddingDate);

  if (expired) {
    return (
      <p className="font-arabic text-warm-gold text-xs">
        🎊 مبارك للعروسين
      </p>
    );
  }

  return (
    <div className="flex items-center gap-1.5 text-xs font-arabic">
      <span className="text-warm-gold font-semibold">{pad(days)}</span>
      <span className="text-rose-gold/40">:</span>
      <span className="text-warm-gold font-semibold">{pad(hours)}</span>
      <span className="text-rose-gold/40">:</span>
      <span className="text-warm-gold font-semibold">{pad(minutes)}</span>
      <span className="text-rose-gold/40">:</span>
      <motion.span
        key={seconds}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="text-warm-gold font-semibold w-5 text-center"
      >
        {pad(seconds)}
      </motion.span>
      <span className="text-rose-gold/50 mr-1">⏱</span>
    </div>
  );
}

/* ─── Main StickyFooter Component ───────────────────────────── */
export default function StickyFooter() {
  const scrolled = useScrolled(window.innerHeight * 0.7);
  const { bride, groom } = WEDDING_DATA;

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-40"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          {/* Backdrop blur bar */}
          <div
            className="flex items-center justify-between px-5 py-3"
            style={{
              background: 'rgba(253,248,240,0.92)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(183,110,121,0.15)',
              boxShadow: '0 -4px 24px rgba(183,110,121,0.1)',
            }}
          >
            {/* Couple names */}
            <div className="flex items-center gap-2">
              <Heart className="w-3.5 h-3.5 text-rose-gold flex-shrink-0" fill="#b76e79" />
              <span className="font-arabic-serif text-deep-rose font-bold text-sm">
                {bride}
              </span>
              <span className="text-warm-gold/50 text-xs">&amp;</span>
              <span className="font-arabic-serif text-deep-rose font-bold text-sm">
                {groom}
              </span>
            </div>

            {/* Divider dot */}
            <div className="w-1 h-1 rounded-full bg-rose-gold/30 flex-shrink-0" />

            {/* Mini countdown */}
            <MiniCountdown />
          </div>

          {/* Safe area for iPhone bottom bar */}
          <div style={{
            height: 'env(safe-area-inset-bottom)',
            background: 'rgba(253,248,240,0.92)',
          }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
