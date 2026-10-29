import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function Hero({ videoUrl }: { videoUrl?: string | null }) {
  return (
    <section className="expedition-hero">
      <div className="hero-copy">
        <p className="eyebrow light">
          <span className="status-dot" /> PARACAS, PERÚ / BLUE OCEAN
        </p>
        <h1>
          El mar.
          <br />
          El desierto.
          <br />
          <em>Todo por vivir.</em>
        </h1>
        <p className="hero-description">
          De las Islas Ballestas a las dunas de Huacachina. Encuentra tu próxima
          salida con quienes conocen este lugar.
        </p>
        <Link href="/tours" className="action action-yellow">
          Explorar experiencias <ArrowUpRight size={19} />
        </Link>
        <div className="hero-index">
          <span>01 — COSTA & DESIERTO</span>
          <a href="#tours" aria-label="Descubrir tours">
            <ArrowDown size={18} />
          </a>
        </div>
      </div>
      <div className="hero-photo">
        <Image
          src={videoUrl || '/tours/islas-ballestas.jpg'}
          alt="Viajeros explorando la costa de Paracas en lancha"
          fill
          priority
          sizes="(max-width: 760px) 100vw, 58vw"
          className="object-cover"
        />
        <div className="photo-caption">
          <span>EL PACÍFICO, DE CERCA.</span>
          <span>Una salida de la rutina ↗</span>
        </div>
        <span className="photo-stamp">
          MAR ABIERTO.
          <br />
          ESPÍRITU LIBRE.
        </span>
      </div>
      <div className="hero-strip">
        <span>ISLAS BALLESTAS</span>
        <span className="strip-star">✳</span>
        <span>RESERVA NACIONAL</span>
        <span className="strip-star">✳</span>
        <span>HUACACHINA</span>
        <span className="strip-star">✳</span>
        <span>PARACAS A TU RITMO</span>
      </div>
    </section>
  );
}
