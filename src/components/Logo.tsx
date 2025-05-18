import { Lightbulb } from 'lucide-react';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/#home" className={`flex items-center gap-2 text-xl font-bold text-primary hover:text-primary/90 transition-colors ${className}`}>
      <Lightbulb className="h-7 w-7" />
      <span className="whitespace-nowrap">Mentes Brilhantes PSCL</span>
    </Link>
  );
}
