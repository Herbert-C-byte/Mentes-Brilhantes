
import Image from "next/legacy/image";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, BookOpen, Users, Lightbulb, ShieldCheck, Handshake } from 'lucide-react';

export function AboutSection() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Inovação Contínua',
      description: 'Buscamos constantemente novas tecnologias e abordagens para oferecer o que há de mais moderno e eficaz.',
    },
    {
      icon: Users,
      title: 'Foco no Cliente',
      description: 'O sucesso dos nossos clientes é o nosso sucesso. Trabalhamos em estreita colaboração para entender suas necessidades e superar suas expectativas.',
    },
    {
      icon: ShieldCheck,
      title: 'Integridade e Transparência',
      description: 'Construímos relações de confiança através de uma comunicação clara e honesta em todas as nossas interações.',
    },
    {
      icon: Handshake,
      title: 'Excelência e Qualidade',
      description: 'Comprometemo-nos com os mais altos padrões de qualidade em cada solução que entregamos.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nossa Jornada: Paixão por Inovação e Resultados</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubra como a Mentes Brilhantes PSCL se tornou referência em soluções tecnológicas, impulsionando o futuro de negócios em Angola.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12 md:mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Nossa História</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A Mentes Brilhantes PSCL é uma organização angolana composta por jovens talentos e profissionais multidisciplinares, criada para desenvolver soluções inteligentes que conectem ideias, tecnologia e impacto social.
            </p>
            <p className="text-muted-foreground leading-relaxed">
            Foi fundada oficialmente em 15 de Maio de 2016, na província de Cabinda, por três cofundadores: Pedro Samuel Conde Lubuku, João Maria Nvula e José da Conceição Ferreira. Inicialmente conhecida como Mentes Pensantes, passou por uma reestruturação visual e conceitual até consolidar-se em 2025 como Mentes Brilhantes PSCL.
            </p>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Equipe Mentes Brilhantes em colaboração"
              layout="fill"
              objectFit="cover"
              data-ai-hint="office team collaboration"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12 md:mb-16">
           <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl md:order-first">
            <Image
              src="https://placehold.co/600x338.png" 
              alt="Visão de futuro da Mentes Brilhantes"
              layout="fill"
              objectFit="cover"
              priority
              data-ai-hint="global connection network"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Target className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Nossa Missão</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Capacitar empresas angolanas com soluções tecnológicas inovadoras, personalizadas e de vanguarda, impulsionando o crescimento sustentável, a eficiência operacional e a competitividade no mercado digital. Acreditamos no poder transformador da tecnologia para criar um futuro mais brilhante para os negócios e para a sociedade.
            </p>
             <p className="text-muted-foreground leading-relaxed">
              Buscamos ser o parceiro tecnológico de confiança, traduzindo desafios complexos em oportunidades de inovação e sucesso para cada cliente.
            </p>
          </div>
        </div>

        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">Nossos Valores Fundamentais</h3>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            Os pilares que guiam cada decisão e ação na Mentes Brilhantes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <Card key={value.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center bg-muted/30">
              <CardHeader className="items-center pb-4">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
