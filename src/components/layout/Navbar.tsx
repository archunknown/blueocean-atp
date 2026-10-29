'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';
import type { User } from '@supabase/supabase-js';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Tours', href: '/tours' },
  { name: 'Galería', href: '/gallery' },
  { name: 'Testimonios', href: '/testimonials' },
  { name: 'Contacto', href: '/contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuPanelRef = useRef<HTMLDivElement>(null);

  // Easter Egg Logic
  const secretClickCount = useRef(0);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSecretClick = (e: React.MouseEvent) => {
    secretClickCount.current += 1;

    // Reset counter if too slow (1 second window between clicks)
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      secretClickCount.current = 0;
    }, 1000);

    if (secretClickCount.current >= 3) {
      e.preventDefault();
      router.push('/login');
      secretClickCount.current = 0;
    }
  };

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) =>
      setUser(session?.user ?? null),
    );
    return () => subscription.unsubscribe();
  }, []);
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    mobileMenuPanelRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isMobileMenuOpen]);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  return (
    <header className="brand-header">
      <a href="#page-content" className="skip-link">
        Ir al contenido
      </a>
      <div className="header-inner">
        <Link
          href="/"
          onClick={handleSecretClick}
          className="brand-lockup"
          aria-label="Blue Ocean, inicio"
        >
          <Image
            unoptimized
            src="/logo.png"
            alt="Blue Ocean Adventure Tours Paracas"
            width={76}
            height={76}
            priority
          />
          <span className="brand-location">
            PARACAS, PERÚ
            <br />
            <b>Mar. Desierto. Libertad.</b>
          </span>
        </Link>
        <nav className="desktop-navigation" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          {user ? (
            <Link className="action action-navy" href="/admin">
              Mi panel <ArrowUpRight size={16} />
            </Link>
          ) : (
            <Link className="action action-navy" href="/tours">
              Elige tu experiencia <ArrowUpRight size={16} />
            </Link>
          )}
          <button
            ref={mobileMenuButtonRef}
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label={
              isMobileMenuOpen
                ? 'Cerrar menú de navegación'
                : 'Abrir menú de navegación'
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          className="mobile-navigation"
          id="mobile-navigation"
          ref={mobileMenuPanelRef}
          tabIndex={-1}
        >
          <p className="eyebrow">EXPLORA BLUE OCEAN</p>
          <nav aria-label="Navegación móvil">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                <small>0{i + 1}</small>
                {link.name}
                <ArrowUpRight size={21} />
              </Link>
            ))}
            {user && (
              <Link href="/admin" onClick={closeMobileMenu}>
                Mi panel <ArrowUpRight size={21} />
              </Link>
            )}
          </nav>
          <p className="mobile-navigation-note">
            Nos encontramos donde el desierto llega al mar.
          </p>
        </div>
      )}
    </header>
  );
}
