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
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-20 bg-black flex flex-col items-center py-6">
        {/* Logo */}
        <Link href="/" className="mb-8">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black font-bold text-xl">
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
                className={`group relative flex flex-col items-center justify-center w-14 h-14 rounded-lg transition-all ${
                  isActive
                    ? 'bg-white text-black'
                    : 'text-gray-400 hover:bg-gray-900'
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
          <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:bg-gray-700 transition-colors">
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
