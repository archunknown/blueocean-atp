import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
export default function NotFound() {
  return (
    <main className="lost-page">
      <div className="editorial-container lost-layout">
        <div>
          <p className="eyebrow">404 / FUERA DE RUTA</p>
          <h1 className="display-heading">
            Este camino
            <br />
            <em>termina aquí.</em>
          </h1>
          <p>
            La página que buscas no está disponible. Todavía hay mucho por
            descubrir en Paracas.
          </p>
          <Link href="/tours" className="action action-navy">
            Volver a las experiencias <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="lost-photo">
          <Image
            src="/gallery/reserva/reserva.jpeg"
            alt="Costa de la Reserva Nacional de Paracas"
            fill
            sizes="(max-width: 760px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}
