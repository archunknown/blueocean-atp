'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
const names: Record<string, string> = {
  tours: 'Experiencias',
  bookings: 'Reservas',
  clients: 'Clientes',
  users: 'Usuarios',
  custodia: 'Custodia',
  metrics: 'Métricas del bot',
  conversations: 'Conversaciones',
  gallery: 'Galería',
  testimonials: 'Testimonios',
  settings: 'Configuración',
};
export default function AdminHeader(_props: { user: { email?: string } }) {
  const pathname = usePathname();
  const area = names[pathname.split('/')[2]] || 'Vista general';
  return (
    <header className="admin-topbar">
      <div>
        <p className="eyebrow">BLUE OCEAN / OPERACIONES</p>
        <p className="admin-area-name">{area}</p>
      </div>
      <Link href="/">
        Visitar la web <ArrowUpRight size={17} />
      </Link>
    </header>
  );
}
