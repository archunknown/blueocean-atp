'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import {
    LayoutDashboard,
    Compass,
    Image as ImageIcon,
    MessageSquare,
    Settings,
    Users,
    ChevronLeft,
    LogOut,
    Calendar,
    Briefcase,
    BarChart,
    Headphones
} from 'lucide-react'
import { signout } from '@/app/auth/actions'
interface AdminSidebarProps {
    user: {
        email?: string
    }
    role?: 'admin' | 'worker' | 'developer' | null
}

const allNavItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard, roles: ['admin', 'worker'] },
    { name: 'Tours', href: '/admin/tours', icon: Compass, roles: ['admin'] },
    { name: 'Reservas', href: '/admin/bookings', icon: Calendar, roles: ['admin', 'worker'] },
    { name: 'Clientes', href: '/admin/clients', icon: Users, roles: ['admin', 'worker'] },
    { name: 'Usuarios', href: '/admin/users', icon: Users, roles: ['admin'] },
    { name: 'Custodia', href: '/admin/custodia', icon: Briefcase, roles: ['admin', 'worker'] },
    { name: 'Métricas Bot', href: '/admin/metrics', icon: BarChart, roles: ['developer'] },
    { name: 'Conversaciones', href: '/admin/conversations', icon: Headphones, roles: ['admin', 'worker'] },
    { name: 'Galería', href: '/admin/gallery', icon: ImageIcon, roles: ['admin', 'worker'] },
    { name: 'Testimonios', href: '/admin/testimonials', icon: MessageSquare, roles: ['admin', 'worker'] },
    { name: 'Configuración', href: '/admin/settings', icon: Settings, roles: ['admin'] },
]

export default function AdminSidebar({ user, role }: AdminSidebarProps) {
    const pathname = usePathname()
    const [isCollapsed, setIsCollapsed] = useState(false)

    // Filter items based on role — strict match against roles array
    const navItems = allNavItems.filter(item =>
        role != null && item.roles.includes(role)
    )

    return (
        <motion.aside
            initial={false}
            animate={{ width: isCollapsed ? 80 : 280 }}
            className="admin-sidebar relative flex flex-col"
        >
            {/* Logo */}
            <div className="sidebar-brand flex items-center justify-between">
                <Link href="/admin" aria-label="Blue Ocean, panel"><Image unoptimized src="/logo.png" alt="Blue Ocean" width={45} height={45} />{!isCollapsed && <span><strong>Blue Ocean</strong><small>OPERACIONES / PARACAS</small></span>}</Link>

                <button
                    aria-label={isCollapsed ? 'Expandir navegación' : 'Contraer navegación'}
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
                >
                    <ChevronLeft className={`h-5 w-5 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 p-4">
                {navItems.map((item) => {
                    const isActive = item.href === '/admin'
                        ? pathname === item.href
                        : pathname === item.href || pathname.startsWith(item.href + '/')
                    const Icon = item.icon

                    return (
                        <Link
                            key={item.href}
                            aria-current={isActive ? 'page' : undefined}
                            title={item.name}
                            href={item.href}
                            className={`
                group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all
                ${isActive
                                    ? 'bg-blue-50 text-blue-700'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                }
              `}
                        >
                            <Icon className={`h-5 w-5 flex-shrink-0 ${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`} />

                            {!isCollapsed && (
                                <motion.span
                                    initial={false}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {item.name}
                                </motion.span>
                            )}

                            {isActive && (
                                <motion.div
                                    layoutId="activeIndicator"
                                    className="absolute left-0 h-full w-1 rounded-r-full bg-blue-600"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </Link>
                    )
                })}
            </nav>

            <form className="sidebar-mobile-signout" action={signout}><button type="submit" aria-label="Cerrar sesión"><LogOut size={18} /></button></form>
            {/* User Section */}
            <div className="border-t border-gray-200 p-4">
                <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center' : ''}`}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-semibold flex-shrink-0">
                        {user.email?.[0].toUpperCase()}
                    </div>

                    {!isCollapsed && (
                        <motion.div
                            initial={false}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex-1 min-w-0"
                        >
                            <p className="text-sm font-medium text-gray-900 truncate">{user.email}</p>
                            <form action={signout}>
                                <button
                                    type="submit"
                                    className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-600 transition-colors"
                                >
                                    <LogOut className="h-3 w-3" />
                                    Cerrar sesión
                                </button>
                            </form>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.aside>
    )
}
