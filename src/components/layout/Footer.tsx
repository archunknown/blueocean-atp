'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Props {
  email?: string | null;
  phoneNumber?: string | null;
}

export default function Footer({ email: customEmail, phoneNumber }: Props) {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const displayEmail = customEmail || 'ytasayco59@gmail.com';
  const displayPhone = phoneNumber || '+51 988 211 694';

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter:', email);
    setEmail('');
  };

  return (
    <footer className="brand-footer">
      <div className="editorial-container">
        <div className="footer-statement">
          <p className="eyebrow light">BLUE OCEAN / PARACAS</p>
          <div>
            <h2>
              El próximo destino
              <br />
              <em>es una buena historia.</em>
            </h2>
            <Link
              href="/tours"
              className="footer-compass"
              aria-label="Explorar tours"
            >
              <ArrowUpRight size={42} strokeWidth={1} />
            </Link>
          </div>
        </div>
        <div className="footer-grid">
          <div className="footer-brand">
            <Image
              unoptimized
              src="/logo.png"
              alt="Blue Ocean Adventure Tours Paracas"
              width={94}
              height={94}
            />
            <p>
              Tours y experiencias donde el desierto se encuentra con el
              Pacífico.
            </p>
          </div>
          <div>
            <h3>Explora</h3>
            {[
              ['Inicio', '/'],
              ['Tours', '/tours'],
              ['Galería', '/gallery'],
              ['Testimonios', '/testimonials'],
              ['Contacto', '/contact'],
            ].map(([name, href]) => (
              <Link key={href} href={href}>
                {name} ↗
              </Link>
            ))}
          </div>
          <div>
            <h3>Nos encuentras aquí</h3>
            <p>
              AA.HH Alberto Tataje Muñoz
              <br />
              Mz B, lote 6 · Paracas
            </p>
            <a href={`tel:${displayPhone}`}>{displayPhone}</a>
            <a href={`mailto:${displayEmail}`}>{displayEmail}</a>
            <p>Lun – Dom / 7:00 AM – 8:00 PM</p>
          </div>
          <div>
            <h3>Mantén el rumbo</h3>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <label htmlFor="newsletter-email">Tu correo electrónico</label>
              <div>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Correo electrónico"
                />
                <button aria-label="Suscribirse al newsletter">
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </form>
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/blue_ocean_paracas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram ↗
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100061274204845"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook ↗
              </a>
              <a
                href="https://www.tiktok.com/@blue_ocean_paracas"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok ↗
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {currentYear} Blue Ocean Adventure Tours</span>
          <span>HECHO EN PARACAS, PERÚ</span>
          <div>
            <Link href="/privacy">Privacidad</Link>
            <Link href="/terms">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
