import Link from 'next/link';
import { Linkedin, Github } from 'lucide-react';
import { Logo } from '@/components/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
  ];

  const mainNavs = [
      { label: "Home", href: "/#home"},
      { label: "Sobre Nós", href: "/#about"},
      { label: "Serviços", href: "/#services"},
      { label: "Equipe", href: "/#team"},
  ];

  const legalNavs = [
      { label: "Política de Privacidade", href: "#"}, // Placeholder
      { label: "Termos de Uso", href: "#"} // Placeholder
  ];

  return (
    <footer className="bg-muted text-muted-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo className="mb-4" />
            <p className="text-sm max-w-xs">
              Mentes Brilhantes: Potencializando o futuro com soluções tecnológicas inovadoras e personalizadas.
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold text-foreground mb-4 text-lg">Navegação</h5>
            <ul className="space-y-2">
              {mainNavs.map(nav => (
                <li key={nav.label}>
                  <Link href={nav.href} className="text-sm hover:text-primary transition-colors">
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h5 className="font-semibold text-foreground mb-4 text-lg">Legal</h5>
            <ul className="space-y-2">
               {legalNavs.map(nav => (
                <li key={nav.label}>
                  <Link href={nav.href} className="text-sm hover:text-primary transition-colors">
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {currentYear} Cássio Herbert. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="hover:text-primary transition-colors"
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
