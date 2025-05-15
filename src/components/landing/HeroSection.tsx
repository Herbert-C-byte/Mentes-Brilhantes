import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="home" className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        {/* Decorative background pattern or image can go here */}
         <Image
            src="https://placehold.co/1920x1080.png"
            alt="Abstract background"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
            data-ai-hint="abstract tech"
          />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="md:text-left text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
              <span className="block">Mentes Brilhantes</span>
              <span className="block text-primary">Inovação e Tecnologia ao Seu Alcance</span>
            </h1>
            <p className="mx-auto md:mx-0 max-w-2xl text-lg md:text-xl text-muted-foreground mb-10">
              Transformamos ideias em realidade digital com soluções de TI, Inteligência Artificial e desenvolvimento web, utilizando o poder do No-Code para acelerar seu sucesso.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
                <Link href="/#services">Nossos Serviços</Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl mt-8 md:mt-0 p-6">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Janela para o futuro tecnológico"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
              data-ai-hint="futuristic window tech"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
