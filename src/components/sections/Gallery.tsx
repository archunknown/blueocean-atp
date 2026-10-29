'use client';
import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
export interface GalleryImage {
  id: string;
  src: string;
  category: string;
  title: string;
}
const filters = ['Todas', 'Islas', 'Reserva', 'Desierto', 'Aventura'];
export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [activeFilter, setActiveFilter] = useState('Todas');
  const fullPage = usePathname() === '/gallery';
  const safeImages = images || [];
  const filteredImages =
    activeFilter === 'Todas'
      ? safeImages
      : safeImages.filter((image) => image.category === activeFilter);
  return (
    <section
      className={`gallery-section section-space ${fullPage ? 'standalone-section' : ''}`}
    >
      <div className="editorial-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              {fullPage ? 'CUADERNO DE VIAJE' : '03 / POSTALES DE AQUÍ'}
            </p>
            {fullPage ? (
              <h1 className="display-heading">
                Hay lugares que
                <br />
                <em>dicen todo.</em>
              </h1>
            ) : (
              <h2 className="display-heading">
                Esto sí es
                <br />
                <em>estar aquí.</em>
              </h2>
            )}
          </div>
          <p className="section-intro">
            Islas, desierto y días frente al mar. Una mirada a los lugares y
            momentos que nos acompañan.
          </p>
        </div>
        <div className="gallery-tabs" aria-label="Categorías de fotografías">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={activeFilter === filter ? 'active' : ''}
            >
              {filter}
              <span>↗</span>
            </button>
          ))}
        </div>
        <div className="photo-grid">
          {filteredImages.map((image, i) => (
            <figure
              key={image.id || image.src}
              className={`photo-item photo-item-${i % 5}`}
            >
              <div>
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 40vw"
                  className="object-cover"
                />
              </div>
              <figcaption>
                <span>{image.title}</span>
                <small>{image.category}</small>
              </figcaption>
            </figure>
          ))}
        </div>
        {filteredImages.length === 0 && (
          <p className="empty-editorial">
            No hay fotografías en esta categoría.
          </p>
        )}
      </div>
    </section>
  );
}
