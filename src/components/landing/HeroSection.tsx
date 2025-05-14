import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="home" className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        {/* Decorative background pattern or image can go here */}
        {/* For example, a subtle geometric pattern or an abstract tech image */}
         <Image 
            src="https://placehold.co/1920x1080.png" 
            alt="Abstract background" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-20"
            data-ai-hint="abstract tech"
          />
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
          <span className="block">Mentes Brilhantes</span>
          <span className="block text-primary">Inovação e Tecnologia ao Seu Alcance</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground mb-10">
          Transformamos ideias em realidade digital com soluções de TI, Inteligência Artificial e desenvolvimento web, utilizando o poder do No-Code para acelerar seu sucesso.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
            <Link href="/#services">Nossos Serviços</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg transition-transform hover:scale-105 border-primary text-primary hover:bg-primary/10">
            <Link href="/#contact">Entre em Contato</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
