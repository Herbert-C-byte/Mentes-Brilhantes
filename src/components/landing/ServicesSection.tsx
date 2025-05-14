import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Cpu, BrainCog, CodeXml, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
}

const services: Service[] = [
  {
    icon: Cpu,
    title: 'Soluções de TI Completas',
    description: 'Infraestrutura, suporte e consultoria para otimizar suas operações.',
    details: ['Gerenciamento de Redes', 'Suporte Técnico Especializado', 'Segurança Cibernética', 'Consultoria em TI']
  },
  {
    icon: BrainCog,
    title: 'Implementação de IA',
    description: 'Integramos Inteligência Artificial para automatizar e impulsionar seus negócios.',
    details: ['Automação de Processos', 'Análise Preditiva de Dados', 'Chatbots Inteligentes', 'Soluções Personalizadas de IA']
  },
  {
    icon: CodeXml,
    title: 'Desenvolvimento Web Moderno',
    description: 'Criamos websites e aplicações web responsivas, performáticas e otimizadas.',
    details: ['Websites Institucionais', 'Lojas Virtuais (E-commerce)', 'Sistemas Web Customizados', 'Landing Pages de Alta Conversão']
  },
  {
    icon: Zap,
    title: 'No-Code & Low-Code',
    description: 'Aceleramos o desenvolvimento e reduzimos custos com plataformas No-Code.',
    details: ['Prototipagem Rápida', 'Desenvolvimento Ágil', 'MVPs Eficientes', 'Integração de Ferramentas']
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nossos Serviços</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos um portfólio completo de soluções tecnológicas para levar sua empresa ao próximo nível.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex flex-row items-start gap-4 pb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                   <service.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground mt-1">{service.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm text-foreground/90">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-accent flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
