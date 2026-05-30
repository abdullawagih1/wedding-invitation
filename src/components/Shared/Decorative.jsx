import React, { useMemo } from 'react';

/* ─── Ornamental Divider ────────────────────────────────────── */
export function OrnamentDivider({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 my-2 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-rose-gold-light/50 to-transparent" />
      <span className="text-rose-gold-light text-lg select-none">❋</span>
      <div className="w-1.5 h-1.5 rounded-full bg-warm-gold/50" />
      <span className="text-warm-gold/60 text-sm select-none">◆</span>
      <div className="w-1.5 h-1.5 rounded-full bg-warm-gold/50" />
      <span className="text-rose-gold-light text-lg select-none">❋</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-rose-gold-light/50 to-transparent" />
    </div>
  );
}

/* ─── Section Heading ───────────────────────────────────────── */
export function SectionHeading({ title, subtitle, className = '' }) {
  return (
    <div className={`text-center ${className}`}>
      {subtitle && (
        <p className="font-arabic text-rose-gold/70 text-sm tracking-widest uppercase mb-2 font-light">
          {subtitle}
        </p>
      )}
      <h2 className="font-arabic-serif text-3xl md:text-4xl text-deep-rose font-bold leading-tight">
        {title}
      </h2>
      <OrnamentDivider className="mt-3" />
    </div>
  );
}

/* ─── Floating Rose Petals ──────────────────────────────────── */
export function FloatingPetals({ count = 12 }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: `${6 + Math.random() * 10}px`,
        duration: `${8 + Math.random() * 12}s`,
        delay: `${Math.random() * 10}s`,
        opacity: 0.3 + Math.random() * 0.4,
        color: Math.random() > 0.5 ? '#f5c6cb' : '#f7e7ce',
      })),
    [count]
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            background: `radial-gradient(ellipse, ${p.color} 0%, transparent 70%)`,
            borderRadius: '50% 0 50% 0',
          }}
        />
      ))}
    </div>
  );
}

/* ─── Decorative Stars ──────────────────────────────────────── */
export function DecorativeStars({ className = '' }) {
  const stars = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${2 + Math.random() * 3}px`,
        delay: `${Math.random() * 4}s`,
      })),
    []
  );

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-warm-gold/40 animate-twinkle"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}
