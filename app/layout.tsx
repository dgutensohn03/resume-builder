import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: { default: 'Daniel Gutensohn | Resumes', template: '%s | Daniel Gutensohn' }, description: 'Senior engineering experience in accessible interfaces, enterprise applications, and full-stack delivery.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body><a className="skip" href="#main">Skip to content</a>{children}</body></html>; }
