
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Cpu, BrainCog, CodeXml, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from "next/legacy/image";

interface ServiceOption {
  name: string;
  price: string;
}
interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
  details?: string[];
  options?: ServiceOption[];
}

const services: Service[] = [
  {
    icon: Cpu,
    title: 'Consultoria TI Estratégica',
    description: 'Alinhamos sua TI aos seus objetivos de negócio com planos robustos.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8YnVzaW5lc3MlMjByZXVuaW9ufGVufDB8fHx8MTc0NzU0NzE2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'strategy plan',
    options: [
      { name: 'Diagnóstico Inicial + Plano Estratégico (Pequena Empresa)', price: 'AOA 150.000,00' },
      { name: 'Consultoria Mensal (Retainer)', price: 'A partir de AOA 80.000,00/mês' },
      { name: 'Gestão de Projeto TI (por hora)', price: 'AOA 25.000,00/hora' },
    ],
    details: ['Análise de infraestrutura', 'Otimização de processos', 'Segurança de dados']
  },
  {
    icon: BrainCog,
    title: 'Soluções com Inteligência Artificial',
    description: 'Implementamos IA para otimizar processos e gerar insights valiosos.',
    imageUrl: 'https://images.unsplash.com/photo-1710993011836-108ba89ebe51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8QUklMjBzb2x1dGlvbnN8ZW58MHx8fHwxNzQ3NTQ2NTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'ai brain',
     options: [
      { name: 'Chatbot Básico para Atendimento', price: 'AOA 95.000,00 (Setup)' },
      { name: 'Análise de Dados com IA (Projeto Piloto)', price: 'AOA 200.000,00' },
      { name: 'Automação de Tarefas Repetitivas', price: 'Sob consulta' },
    ],
    details: ['Modelos preditivos', 'Processamento de linguagem natural', 'Visão computacional']
  },
  {
    icon: CodeXml,
    title: 'Desenvolvimento Web Sob Medida',
    description: 'Criamos plataformas web performáticas, responsivas e focadas em UX.',
    imageUrl: 'https://images.unsplash.com/photo-1590608897129-79da98d15969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHx3ZWIlMjBkZXZ8ZW58MHx8fHwxNzQ3NTIyNTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'web design',
    options: [
      { name: 'Website Institucional Moderno (até 5 páginas)', price: 'AOA 180.000,00' },
      { name: 'Landing Page de Alta Conversão', price: 'AOA 70.000,00' },
      { name: 'E-commerce Básico (Integração Pagamento)', price: 'A partir de AOA 300.000,00' },
    ],
    details: ['Tecnologias atuais', 'SEO Friendly', 'Design personalizado']
  },
  {
    icon: Zap,
    title: 'Projetos No-Code/Low-Code',
    description: 'Entregamos soluções digitais de forma ágil e econômica.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx3ZWIlMjBkZXZ8ZW58MHx8fHwxNzQ3NTIyNTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'visual builder',
    options: [
      { name: 'MVP (Produto Mínimo Viável) Interativo', price: 'AOA 250.000,00' },
      { name: 'Automação de Fluxos de Trabalho Internos', price: 'AOA 150.000,00' },
      { name: 'Criação de App Interno Simples', price: 'A partir de AOA 180.000,00' },
    ],
    details: ['Rápida implementação', 'Redução de custos', 'Fácil manutenção']
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nossos Serviços</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos um portfólio completo de soluções tecnológicas, com opções flexíveis para levar sua empresa ao próximo nível.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden rounded-lg">
              {service.imageUrl && (
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={service.imageUrl}
                    alt={`Ilustração para ${service.title}`}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={service.dataAiHint}
                  />
                </div>
              )}
              <CardHeader className="flex flex-row items-start gap-4 pb-4 pt-6">
                <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                   <service.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground mt-1 text-sm">{service.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between pt-0">
                {service.options && service.options.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium text-foreground/90 mb-2 text-sm">Opções e Preços (Exemplos):</h4>
                    <ul className="space-y-1.5 text-sm text-foreground/80">
                      {service.options.map((option) => (
                        <li key={option.name} className="flex justify-between items-center">
                          <span>{option.name}</span>
                          <span className="font-semibold text-accent whitespace-nowrap ml-2">{option.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {service.details && service.details.length > 0 && (
                   <div>
                    <h4 className="font-medium text-foreground/90 mb-2 text-sm">Inclui:</h4>
                    <ul className="space-y-1.5 text-sm text-foreground/80">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-center">
                          <Zap className="h-4 w-4 mr-2 text-accent flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="text-center mt-12 md:mt-16">
            <p className="text-muted-foreground">
                Valores são exemplificativos e podem variar conforme escopo do projeto. <a href="/#contact" className="text-primary hover:underline">Entre em contato</a> para um orçamento personalizado.
            </p>
        </div>
      </div>
    </section>
  );
}
