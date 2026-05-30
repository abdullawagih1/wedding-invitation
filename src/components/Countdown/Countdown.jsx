import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../../hooks/useCountdown';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { WEDDING_DATA } from '../../data/weddingData';
import { OrnamentDivider } from '../Shared/Decorative';
import { pad } from '../../utils/helpers';

/* ─── Arabic labels ─────────────────────────────────────────── */
const LABELS = ['الأيام', 'الساعات', 'الدقائق', 'الثواني'];

/* ─── Single digit card ─────────────────────────────────────── */
function DigitCard({ value, label, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const display = pad(value);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: 'easeOut' }}
    >
      {/* Card */}
      <div className="relative">
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-2xl opacity-20 blur-md"
          style={{ background: 'linear-gradient(135deg, #b76e79, #c9a96e)' }} />

        {/* Glass card */}
        <div
          className="relative rounded-2xl flex items-center justify-center"
          style={{
            width: 'clamp(64px, 18vw, 84px)',
            height: 'clamp(72px, 20vw, 96px)',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.85), rgba(249,243,232,0.7))',
            border: '1px solid rgba(183,110,121,0.2)',
            boxShadow: '0 8px 24px rgba(183,110,121,0.12), inset 0 1px 0 rgba(255,255,255,0.8)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Fold line */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-rose-gold/10" />

          {/* Digit */}
          <motion.span
            key={display}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="font-arabic-serif font-bold text-deep-rose relative z-10"
            style={{ fontSize: 'clamp(1.6rem, 6vw, 2.4rem)', lineHeight: 1 }}
          >
            {display}
          </motion.span>
        </div>

        {/* Bottom reflection */}
        <div className="h-3 mx-2 rounded-b-xl opacity-20"
          style={{ background: 'linear-gradient(to bottom, rgba(183,110,121,0.3), transparent)' }} />
      </div>

      {/* Label */}
      <p className="font-arabic text-rose-gold/70 text-xs font-medium tracking-wide">
        {label}
      </p>
    </motion.div>
  );
}

/* ─── Expired message ───────────────────────────────────────── */
function ExpiredMessage() {
  return (
    <div className="text-center py-8">
      <p className="font-arabic-serif text-deep-rose text-2xl font-bold mb-2">
        🎊 مبارك للعروسين 🎊
      </p>
      <p className="font-arabic text-rose-gold/70">
        بدأت رحلة العمر الجديدة
      </p>
    </div>
  );
}

/* ─── Main Countdown Component ──────────────────────────────── */
export default function Countdown() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const { days, hours, minutes, seconds, expired } = useCountdown(WEDDING_DATA.weddingDate);

  return (
    <section className="relative py-20 overflow-hidden" style={{
      background: 'linear-gradient(180deg, #fdf8f0 0%, #f9f0f5 50%, #fdf8f0 100%)',
    }}>
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, #b76e79 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, #c9a96e 0%, transparent 50%)
          `,
        }}
      />

      <div className="section-container relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-arabic text-rose-gold/60 text-xs tracking-widest mb-3 uppercase">
            العد التنازلي
          </p>
          <h2 className="font-arabic-serif text-3xl text-deep-rose font-bold">
            موعدنا المنتظر
          </h2>
          <OrnamentDivider className="mt-3" />
          <p className="font-arabic text-warm-gold/80 text-sm mt-4">
            ٢٦ يونيو ٢٠٢٦ ✦ الساعة ٦:٠٠ مساءً
          </p>
        </motion.div>

        {/* Timer cards */}
        {expired ? (
          <ExpiredMessage />
        ) : (
          <div className="flex justify-center items-start gap-3 md:gap-6">
            <DigitCard value={days} label={LABELS[0]} delay={0} />

            <div className="flex flex-col justify-center gap-1 mt-6 opacity-50">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-gold animate-pulse" />
              <div className="w-1.5 h-1.5 rounded-full bg-rose-gold animate-pulse" style={{ animationDelay: '0.3s' }} />
            </div>

            <DigitCard value={hours} label={LABELS[1]} delay={0.1} />

            <div className="flex flex-col justify-center gap-1 mt-6 opacity-50">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-gold animate-pulse" />
              <div className="w-1.5 h-1.5 rounded-full bg-rose-gold animate-pulse" style={{ animationDelay: '0.3s' }} />
            </div>

            <DigitCard value={minutes} label={LABELS[2]} delay={0.2} />

            <div className="flex flex-col justify-center gap-1 mt-6 opacity-50">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-gold animate-pulse" />
              <div className="w-1.5 h-1.5 rounded-full bg-rose-gold animate-pulse" style={{ animationDelay: '0.3s' }} />
            </div>

            <DigitCard value={seconds} label={LABELS[3]} delay={0.3} />
          </div>
        )}

        {/* Bottom decorative */}
        <motion.div
          className="flex justify-center mt-14"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="glass-rose rounded-full px-6 py-3">
            <p className="font-arabic text-rose-gold/80 text-sm text-center">
              💍 لكل لحظة انتظار جمال خاص بها 💍
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
