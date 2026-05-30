import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Calendar, ExternalLink, Heart } from 'lucide-react';
import { WEDDING_DATA } from '../../data/weddingData';
import { SectionHeading, OrnamentDivider } from '../Shared/Decorative';

/* ─── Info Row ──────────────────────────────────────────────── */
function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3 py-4 border-b border-rose-gold/10 last:border-none">
      <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{
          background: 'linear-gradient(135deg, rgba(183,110,121,0.12), rgba(201,169,110,0.12))',
        }}>
        <Icon className="w-4 h-4 text-rose-gold" />
      </div>
      <div className="flex-1">
        <p className="font-arabic text-xs text-rose-gold/60 mb-0.5">{label}</p>
        <p className="font-arabic font-semibold text-deep-rose text-sm leading-relaxed">{value}</p>
      </div>
    </div>
  );
}

/* ─── Decorative Map Preview ────────────────────────────────── */
function MapPreview() {
  const { venue } = WEDDING_DATA;
  return (
    <a
      href={venue.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative rounded-2xl overflow-hidden group"
      style={{
        background: 'linear-gradient(145deg, #f5e6e8, #f0e4d8)',
        border: '1px solid rgba(183,110,121,0.15)',
        boxShadow: '0 8px 32px rgba(183,110,121,0.1)',
      }}
      aria-label="عرض على خرائط جوجل"
    >
      {/* Stylized map placeholder */}
      <div className="h-40 relative overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(183,110,121,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(183,110,121,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
          }}
        />
        {/* Streets */}
        <div className="absolute top-1/2 left-0 right-0 h-4 -translate-y-1/2 bg-white/40 rounded" />
        <div className="absolute top-0 bottom-0 left-1/2 w-4 -translate-x-1/2 bg-white/30 rounded" />
        {/* Center pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10">
          <div className="w-8 h-8 rounded-full flex items-center justify-center animate-bounce"
            style={{ background: 'linear-gradient(135deg, #b76e79, #8b4a52)' }}>
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <div className="w-2 h-2 rounded-full mx-auto -mt-1 opacity-30"
            style={{ background: '#8b4a52' }} />
        </div>
        {/* Radius circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full opacity-10 animate-ping"
          style={{ background: '#b76e79' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full opacity-15"
          style={{ border: '2px solid #b76e79' }} />
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-deep-rose/0 group-hover:bg-deep-rose/5 transition-colors duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-white/90 rounded-full px-4 py-2">
          <ExternalLink className="w-3.5 h-3.5 text-rose-gold" />
          <span className="font-arabic text-xs text-rose-gold font-semibold">افتح في خرائط جوجل</span>
        </div>
      </div>
    </a>
  );
}

/* ─── Main EventDetails Component ───────────────────────────── */
export default function EventDetails() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { venue } = WEDDING_DATA;

  return (
    <section className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #fdf8f0 0%, #f8eef2 50%, #fdf8f0 100%)',
      }}>
      {/* Decorative background shapes */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-5 blur-3xl"
        style={{ background: '#b76e79' }} />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full opacity-5 blur-3xl"
        style={{ background: '#c9a96e' }} />

      <div className="section-container relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <SectionHeading subtitle="تفاصيل الحفل" title="موعد الفرح" />
        </motion.div>

        {/* Event Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="rounded-3xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(183,110,121,0.15)',
            boxShadow: '0 20px 60px rgba(183,110,121,0.12)',
          }}
        >
          {/* Card header */}
          <div className="p-6 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(183,110,121,0.08), rgba(201,169,110,0.08))',
              borderBottom: '1px solid rgba(183,110,121,0.1)',
            }}>
            <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #b76e79, #8b4a52)' }}>
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <h3 className="font-arabic font-bold text-deep-rose text-lg">
              {venue.name}
            </h3>
          </div>

          {/* Info rows */}
          <div className="px-6 py-2">
            <InfoRow icon={MapPin} label="العنوان" value={venue.address} />
            <InfoRow icon={Calendar} label="تاريخ الحفل" value={venue.date} />
            <InfoRow icon={Clock} label="توقيت الحفل" value={venue.time} />
          </div>

          {/* Map preview */}
          <div className="px-6 pb-5">
            <OrnamentDivider className="mb-4" />
            <p className="font-arabic text-xs text-rose-gold/60 text-center mb-3">
              اضغط للوصول إلى الموقع
            </p>
            <MapPreview />
          </div>

          {/* CTA Button */}
          <div className="px-6 pb-6 pt-2">
            <a
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury flex items-center justify-center gap-2 w-full text-center no-underline"
            >
              <MapPin className="w-4 h-4" />
              <span>عرض على خرائط جوجل</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          className="font-arabic text-center text-deep-rose/50 text-xs mt-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          يسعدنا حضوركم لمشاركتنا فرحة هذه المناسبة السعيدة
        </motion.p>
      </div>
    </section>
  );
}
