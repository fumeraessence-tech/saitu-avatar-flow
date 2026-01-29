import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AvatarFlow - AI-Powered UGC Video Creation',
  description: 'Create ultra-realistic AI avatars from photos. Generate professional UGC videos in minutes with voice cloning and product placement.',
  keywords: 'AI avatar, UGC video, video generation, AI clone, deepfake, synthetic media, content creation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
