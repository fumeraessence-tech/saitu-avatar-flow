'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', label: 'Home', icon: '🏠' },
    { href: '/dashboard/studio', label: 'Studio', icon: '🎬' },
    { href: '/dashboard/actors', label: 'Actors', icon: '👥' },
    { href: '/dashboard/campaigns', label: 'Campaigns', icon: '📊' },
    { href: '/dashboard/ugc-builder', label: 'UGC Builder', icon: '✨' },
    { href: '/dashboard/lipsync', label: 'Lipsync Studio', icon: '💬' },
    { href: '/dashboard/assets', label: 'Assets', icon: '📁' },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar */}
      <aside className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6">
        {/* Logo */}
        <Link href="/" className="mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
            A
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 w-full space-y-3 px-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all ${
                  isActive
                    ? 'bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg scale-110'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                title={item.label}
              >
                <span className="text-2xl">{item.icon}</span>
                {!isActive && (
                  <span className="absolute left-full ml-4 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="mt-auto">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:scale-110 transition-transform">
            D
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
