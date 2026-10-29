'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Loader2 } from 'lucide-react';
import { login } from '@/app/auth/actions';
export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    setError(null);

    const result = await login(formData);

    if (result?.error) {
      setError(result.error);
      setIsLoading(false);
    }
  }

  return (
    <div className="login-page">
      <div className="login-scene">
        <Image
          src="/gallery/reserva/reserva.jpeg"
          alt="Acantilados de la Reserva Nacional de Paracas"
          fill
          sizes="55vw"
          className="object-cover"
          priority
        />
        <Link href="/" className="login-brand">
          <Image
            unoptimized
            src="/logo.png"
            alt="Blue Ocean"
            width={85}
            height={85}
          />
        </Link>
        <div>
          <p className="eyebrow">BLUE OCEAN / EQUIPO</p>
          <h2>
            Detrás de cada viaje,
            <br />
            <em>estamos nosotros.</em>
          </h2>
        </div>
        <p>PARACAS, PERÚ · MAR & DESIERTO</p>
      </div>
      <div className="login-form-side">
        <div className="login-form-wrap">
          <Link href="/" className="login-mobile-brand">
            <Image
              unoptimized
              src="/logo.png"
              alt="Blue Ocean"
              width={85}
              height={85}
            />
          </Link>
          <p className="eyebrow">ESPACIO DEL EQUIPO</p>
          <h1>
            Buen día.
            <br />
            <em>Volvamos a bordo.</em>
          </h1>
          <p>
            Ingresa con tu cuenta para continuar con la operación de Blue Ocean.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(new FormData(e.currentTarget));
            }}
          >
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tucorreo@ejemplo.com"
            />
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Tu contraseña"
            />
            {error && (
              <div className="login-error" role="alert">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="action action-navy"
            >
              {isLoading ? (
                <>
                  <Loader2 size={17} className="animate-spin" /> Iniciando
                  sesión...
                </>
              ) : (
                <>
                  Iniciar sesión <ArrowUpRight size={18} />
                </>
              )}
            </button>
          </form>
          <Link href="/" className="login-back">
            ← Volver a la web
          </Link>
        </div>
      </div>
    </div>
  );
}
