import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
const steps = [
  ['Elige tu salida', 'Revisa las experiencias y encuentra la que va contigo.'],
  [
    'Define los detalles',
    'Selecciona la fecha, el horario y cuántas personas van.',
  ],
  ['Completa tu reserva', 'Ingresa tus datos y continúa al pago online.'],
  [
    'Nos vemos en Paracas',
    'Ten a mano los detalles de tu reserva para tu salida.',
  ],
];
export default function OurProcess() {
  return (
    <section className="journey-section section-space">
      <div className="editorial-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow light">DE LA IDEA AL VIAJE</p>
            <h2 className="display-heading">
              Menos vueltas.
              <br />
              <em>Más aventura.</em>
            </h2>
          </div>
          <Link className="text-link light" href="/contact">
            ¿Necesitas una mano? <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="journey-steps">
          {steps.map(([title, description], i) => (
            <div key={title}>
              <span className="step-number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
