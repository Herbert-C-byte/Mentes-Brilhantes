import Image from "next/legacy/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Linkedin, Github, Twitter, Facebook, Instagram } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  socials?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  dataAiHint?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Samuel Trump',
    role: 'CEO & AI Specialist',
    imageUrl: 'https://placehold.co/300x300.png',
    bio: 'Lidera a visão da Mentes Brilhantes, especialista em aplicar IA para resolver desafios complexos de negócios.',
    socials: { facebook: 'https://facebook.com/samuel.trump.placeholder', instagram: '#' },
    dataAiHint: 'woman portrait professional'
  },
  {
    name: 'Cássio Herbert',
    role: 'CTO & Lead Developer',
    imageUrl: 'https://placehold.co/300x300.png',
    bio: 'Arquiteto de soluções robustas e escaláveis, apaixonado por tecnologia No-Code e desenvolvimento ágil.',
    socials: { linkedin: '#', github: 'https://github.com/Herbert-C-byte' },
    dataAiHint: 'man portrait tech'
  },
  {
    name: 'Juliana Costa',
    role: 'Head of IT Solutions',
    imageUrl: 'https://placehold.co/300x300.png',
    bio: 'Especialista em infraestrutura de TI e segurança, garantindo que as operações dos clientes funcionem perfeitamente.',
    socials: { facebook: '#', instagram: '#' },
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
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin size={22} />
                      </a>
                    )}
                    {member.socials.github && (
                      <a href={member.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={22} />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter size={22} />
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
