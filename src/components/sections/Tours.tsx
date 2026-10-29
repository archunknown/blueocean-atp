'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Clock3 } from 'lucide-react';
import { Tour } from '@/types/tour-schemas';

interface ToursProps {
  tours: Tour[];
  limit?: number;
  showButton?: boolean;
}
export default function Tours({ tours, limit, showButton = true }: ToursProps) {
  const pathname = usePathname();
  const fullPage = pathname === '/tours';
  const toursToDisplay = limit ? tours.slice(0, limit) : tours;
  return (
    <section
      id="tours"
      className={`experiences-section section-space ${fullPage ? 'standalone-section' : ''}`}
    >
      <div className="editorial-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              {fullPage ? 'ELIGE TU RUMBO' : '01 / EXPERIENCIAS'}
            </p>
            {fullPage ? (
              <h1 className="display-heading">
                Hay un Paracas
                <br />
                <em>para cada viajero.</em>
              </h1>
            ) : (
              <h2 className="display-heading">Sal de lo de siempre.</h2>
            )}
          </div>
          <p className="section-intro">
            Mar, dunas y caminos por descubrir. Tours y alquileres para elegir
            cómo quieres vivir este lado del Perú.
          </p>
        </div>
        <div className="catalogue-bar">
          <span>
            {String(toursToDisplay.length).padStart(2, '0')} EXPERIENCIAS
          </span>
          <span>
            PARACAS & HUACACHINA <span aria-hidden="true">↙</span>
          </span>
        </div>
        <div className="experience-grid">
          {toursToDisplay.map((tour, index) => (
            <Link
              key={tour.slug}
              href={`/tours/${tour.slug}`}
              className="experience-card"
            >
              <div className="experience-image">
                <Image
                  src={tour.image_url}
                  alt={tour.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
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
          ))}
        </div>
        {toursToDisplay.length === 0 && (
          <p className="empty-editorial">
            No hay experiencias disponibles en este momento. Puedes contactarnos
            para consultar.
          </p>
        )}
        {showButton && !fullPage && (
          <div className="section-end">
            <span>Tu próxima historia empieza con una elección.</span>
            <Link href="/tours" className="action action-outline">
              Todas las experiencias <ArrowUpRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
