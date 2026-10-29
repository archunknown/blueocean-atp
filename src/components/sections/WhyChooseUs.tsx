import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export default function WhyChooseUs() {
  return (
    <section className="local-story section-space">
      <div className="editorial-container story-grid">
        <div className="story-image">
          <Image
            src="/gallery/reserva/reserva.jpeg"
            alt="Viajeros frente al mar y los acantilados de la Reserva Nacional de Paracas"
            fill
            sizes="(max-width: 760px) 100vw, 45vw"
            className="object-cover"
          />
          <span className="image-note">
            EL DESIERTO TAMBIÉN
            <br />
            SABE A MAR.
          </span>
        </div>
        <div className="story-copy">
          <p className="eyebrow">02 / NUESTRO LUGAR EN EL MUNDO</p>
          <h2 className="display-heading">
            Paracas.
            <br />
            De la orilla
            <br />
            <em>al desierto.</em>
          </h2>
          <p>
            Una mañana entre islas. El viento en la reserva. Las dunas al final
            del día. Paracas tiene muchas formas de sorprenderte.
          </p>
          <p>
            En Blue Ocean reunimos tours y alquileres para que encuentres la
            tuya, con atención desde aquí, en Paracas.
          </p>
          <div className="story-facts">
            <div>
              <span>01</span>
              <h3>Mar y naturaleza</h3>
              <p>Islas Ballestas y Reserva Nacional de Paracas.</p>
            </div>
            <div>
              <span>02</span>
              <h3>A tu manera</h3>
              <p>Salidas guiadas y opciones de alquiler.</p>
            </div>
          </div>
          <Link href="/contact" className="text-link">
            Conversemos sobre tu viaje <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
