
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Linkedin, Github, Facebook, Instagram } from 'lucide-react';
import Image from "next/legacy/image";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string; // Re-added
  dataAiHint: string; // Re-added
  socials?: {
    linkedin?: string;
    github?: string;
    facebook?: string;
    instagram?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'Samuel Trump',
    role: 'CEO & AI Specialist',
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'man portrait ceo',
    bio: 'Lidera a visão da Mentes Brilhantes, especialista em aplicar IA para resolver desafios complexos de negócios.',
    socials: { facebook: 'https://facebook.com/samuel.trump.placeholder', instagram: '#' },
  },
  {
    name: 'Cássio Herbert',
    role: 'CTO & Lead Full-Stack Developer',
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'man portrait developer',
    bio: 'Responsável técnico pelo projeto e desenvolvimento full-stack, transformando conceitos em soluções digitais robustas e escaláveis.',
    socials: { linkedin: '#', github: 'https://github.com/Herbert-C-byte' },
  },
  {
    name: 'Juliana Costa',
    role: 'Head of IT Solutions',
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'woman portrait corporate',
    bio: 'Especialista em infraestrutura de TI e segurança, garantindo que as operações dos clientes funcionem perfeitamente.',
    socials: { facebook: '#', instagram: '#' },
  },
   {
    name: 'Ricardo Alves',
    role: 'No-Code Evangelist & Solutions Architect',
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'man portrait architect',
    bio: 'Promove e implementa soluções No-Code/Low-Code, ao mesmo tempo que projeta arquiteturas de software inovadoras, capacitando empresas a inovar mais rapidamente.',
    socials: { linkedin: '#', github: '#' },
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
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin size={22} />
                      </a>
                    )}
                    {member.socials.github && (
                      <a href={member.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={22} />
                      </a>
                    )}
                    {member.socials.facebook && (
                      <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                        <Facebook size={22} />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                        <Instagram size={22} />
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
