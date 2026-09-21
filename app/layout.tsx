import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Abdullah Al Hassan — Digital Marketer & Freelancer',
  description: 'Premium portfolio of Abdullah Al Hassan — digital marketing, Meta Ads, creative design, lead generation, websites, SEO, AI workflows and business tools.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
