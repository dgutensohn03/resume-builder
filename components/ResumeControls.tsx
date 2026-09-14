'use client';
import Link from 'next/link';
export function ResumeControls() { return <nav className="controls" aria-label="Resume actions"><Link href="/">← All resumes</Link><button onClick={() => window.print()}>Print / Save PDF</button></nav>; }
