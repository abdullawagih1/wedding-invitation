import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionHeading } from '../Shared/Decorative';
import { WEDDING_DATA } from '../../data/weddingData';

/* ─── Gallery Component ─────────────────────────────────────── */
export default function Gallery() {
  const ref = useRef(null);
  const swiperRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [swiperReady, setSwiperReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Dynamically import Swiper to keep bundle lean
    const initSwiper = async () => {
      const { Swiper } = await import('swiper');
      const { Navigation, Pagination, EffectCoverflow, Autoplay } = await import('swiper/modules');

      if (!swiperRef.current) return;

      const swiper = new Swiper(swiperRef.current, {
        modules: [Navigation, Pagination, EffectCoverflow, Autoplay],
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 25,
          stretch: 0,
          depth: 80,
          modifier: 1,
          slideShadows: false,
        },
        pagination: {
          el: '.gallery-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.gallery-next',
          prevEl: '.gallery-prev',
        },
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        loop: true,
        on: {
          slideChange: (s) => setActiveIndex(s.realIndex),
        },
      });

      setSwiperReady(true);
      return () => swiper.destroy();
    };

    if (inView) {
      initSwiper();
    }
  }, [inView]);

  return (
    <section className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #fdf8f0 0%, #f9f3e8 50%, #fdf8f0 100%)',
      }}>
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 10% 20%, rgba(183,110,121,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 80%, rgba(201,169,110,0.08) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          className="section-container mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading subtitle="ذكرياتنا" title="لحظات لا تُنسى" />
          <p className="font-arabic text-deep-rose/60 text-sm text-center mt-4">
            كل صورة تحمل قصة، وكل لحظة تحمل معنى
          </p>
        </motion.div>

        {/* Swiper Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div
            ref={swiperRef}
            className="swiper gallery-swiper"
            style={{ paddingBottom: '48px' }}
          >
            <div className="swiper-wrapper">
              {WEDDING_DATA.galleryImages.map((img) => (
                <div
                  key={img.id}
                  className="swiper-slide"
                  style={{ width: '260px' }}
                >
                  <div className="relative rounded-2xl overflow-hidden"
                    style={{
                      aspectRatio: '3/4',
                      boxShadow: '0 16px 40px rgba(139,74,82,0.18)',
                      border: '3px solid rgba(255,255,255,0.8)',
                    }}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, rgba(139,74,82,0.4) 0%, transparent 50%)',
                      }}
                    />
                    {/* Caption */}
                    <p className="absolute bottom-3 left-0 right-0 text-center font-arabic text-white/90 text-sm">
                      {img.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="gallery-pagination swiper-pagination" style={{ bottom: '8px' }} />
          </div>

          {/* Custom nav buttons */}
          <div className="flex justify-center gap-4 mt-2">
            <button className="gallery-prev btn-outline-luxury text-sm px-5 py-2.5">
              ‹ السابق
            </button>
            <button className="gallery-next btn-luxury text-sm px-5 py-2.5">
              التالي ›
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
