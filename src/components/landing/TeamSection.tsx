import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Linkedin, Github, Twitter } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  socials?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  dataAiHint?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Ana Silva',
    role: 'CEO & AI Specialist',
    imageUrl: 'https://placehold.co/300x300.png',
    bio: 'Lidera a visão da Mentes Brilhantes, especialista em aplicar IA para resolver desafios complexos de negócios.',
    socials: { linkedin: '#', twitter: '#' },
    dataAiHint: 'woman portrait professional'
  },
  {
    name: 'Carlos Pereira',
    role: 'CTO & Lead Developer',
    imageUrl: 'https://placehold.co/300x300.png',
    bio: 'Arquiteto de soluções robustas e escaláveis, apaixonado por tecnologia No-Code e desenvolvimento ágil.',
    socials: { linkedin: '#', github: '#' },
    dataAiHint: 'man portrait tech'
  },
  {
    name: 'Juliana Costa',
    role: 'Head of IT Solutions',
    imageUrl: 'https://placehold.co/300x300.png',
    bio: 'Especialista em infraestrutura de TI e segurança, garantindo que as operações dos clientes funcionem perfeitamente.',
    socials: { linkedin: '#', twitter: '#' },
    dataAiHint: 'woman portrait corporate'
  },
   {
    name: 'Ricardo Alves',
    role: 'No-Code Evangelist',
    imageUrl: 'https://placehold.co/300x300.png',
    bio: 'Promove e implementa soluções No-Code, capacitando empresas a inovar mais rapidamente.',
    socials: { linkedin: '#', github: '#' },
    dataAiHint: 'man portrait friendly'
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Conheça Nossa Equipe</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Profissionais apaixonados por tecnologia e dedicados a entregar resultados brilhantes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center overflow-hidden">
              <div className="relative h-48 w-full bg-muted">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={member.dataAiHint}
                />
              </div>
              <CardHeader className="pt-6">
                <CardTitle className="text-xl font-semibold text-foreground">{member.name}</CardTitle>
                <CardDescription className="text-primary">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                {member.socials && (
                  <div className="flex justify-center space-x-3">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.socials.github && (
                      <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter size={20} />
                      </a>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
