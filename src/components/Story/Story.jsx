import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { WEDDING_DATA } from '../../data/weddingData';
import { SectionHeading } from '../Shared/Decorative';

/* ─── Single Story Card ─────────────────────────────────────── */
function StoryCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-start gap-0 mb-8 last:mb-0">
      {/* Timeline line (vertical) */}
      {index < WEDDING_DATA.story.length - 1 && (
        <div
          className="absolute right-1/2 translate-x-1/2 top-12 bottom-0 w-px"
          style={{ background: 'linear-gradient(to bottom, rgba(183,110,121,0.4), transparent)' }}
        />
      )}

      {/* Timeline dot */}
      <div className="absolute right-1/2 translate-x-1/2 top-4 w-4 h-4 rounded-full z-10 flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #b76e79, #c9a96e)',
          boxShadow: '0 0 0 3px rgba(183,110,121,0.15), 0 0 0 6px rgba(183,110,121,0.05)',
        }}
      />

      {/* Card — alternates left/right on wider screens, stacks on mobile */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
      >
        <div
          className="mx-8 rounded-2xl p-5 relative"
          style={{
            background: 'rgba(255,255,255,0.65)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(183,110,121,0.12)',
            boxShadow: '0 8px 32px rgba(183,110,121,0.08)',
          }}
        >
          {/* Icon & year row */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl">{item.icon}</span>
            <span
              className="font-arabic-serif text-sm font-bold px-3 py-1 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(183,110,121,0.12), rgba(201,169,110,0.12))',
                color: '#8b4a52',
              }}
            >
              {item.year}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-arabic font-bold text-deep-rose text-lg mb-2">
            {item.title}
          </h3>

          {/* Description */}
          <p className="font-arabic text-sm leading-relaxed text-deep-rose/70">
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Main Story Component ──────────────────────────────────── */
export default function Story() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="relative py-20 overflow-hidden bg-story-gradient">
      {/* Decorative background blobs */}
      <div className="absolute top-20 right-0 w-48 h-48 rounded-full opacity-5 blur-3xl"
        style={{ background: '#b76e79' }} />
      <div className="absolute bottom-20 left-0 w-48 h-48 rounded-full opacity-5 blur-3xl"
        style={{ background: '#c9a96e' }} />

      <div className="section-container relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <SectionHeading
            subtitle="حكايتنا"
            title="قصة الحب"
          />
          <p className="font-arabic text-deep-rose/60 text-sm text-center mt-4 leading-relaxed max-w-xs mx-auto">
            كل قصة حب عظيمة لها بداية صغيرة... هذه بداية قصتنا
          </p>
        </motion.div>

        {/* Story Timeline */}
        <div className="relative">
          {WEDDING_DATA.story.map((item, index) => (
            <StoryCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Bottom flourish */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-arabic-serif text-deep-rose/60 text-lg italic">
            "وتلك أيام الله"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
