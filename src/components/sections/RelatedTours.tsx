'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Tour } from '@/types/tour-schemas';
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock3 } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function RelatedTours({
  allTours,
  currentTourSlug,
}: {
  allTours: Tour[];
  currentTourSlug: string;
}) {
  const relatedTours = allTours.filter((tour) => tour.slug !== currentTourSlug);
  if (!relatedTours.length) return null;
  return (
    <section className="related-section section-space">
      <div className="editorial-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SIGUE EXPLORANDO</p>
            <h2 className="display-heading">
              Otro rumbo.
              <br />
              <em>La misma curiosidad.</em>
            </h2>
          </div>
          <div className="carousel-controls">
            <button
              className="swiper-button-prev-custom"
              aria-label="Experiencia anterior"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              className="swiper-button-next-custom"
              aria-label="Siguiente experiencia"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: true }}
          spaceBetween={28}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
          }}
        >
          {relatedTours.map((tour, index) => (
            <SwiperSlide key={tour.slug}>
              <Link href={`/tours/${tour.slug}`} className="experience-card">
                <div className="experience-image">
                  <Image
                    src={tour.image_url}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <span className="experience-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="experience-category">{tour.category}</span>
                  <span className="experience-arrow">
                    <ArrowUpRight size={22} />
                  </span>
                </div>
                <div className="experience-content">
                  <div className="experience-title">
                    <h3>{tour.title}</h3>
                    <div className="experience-price">
                      <small>Desde</small>
                      <strong>S/ {Number(tour.price).toFixed(2)}</strong>
                    </div>
                  </div>
                  <p>{tour.short_description}</p>
                  <div className="experience-meta">
                    <span>
                      <Clock3 size={15} />
                      {tour.duration}
                    </span>
                    <span>Ver experiencia ↗</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination-custom" />
      </div>
    </section>
  );
}
