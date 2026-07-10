import logo from "@/assets/logo.svg";

import { Button } from "@/components/ui/button";
import { ContactBadge } from "@/components/ui/contact_badge";
import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";

import { ArrowUpRight, Heart, Mail } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const navigation = [
    {
      label: "Desafios",
      href: "#pain",
    },
    {
      label: "Benefícios",
      href: "#why",
    },
    {
      label: "Como funciona",
      href: "#how",
    },
    {
      label: "Depoimentos",
      href: "#barrier",
    },
    {
      label: "Planos",
      href: "#much",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(var(--primary-rgb),0.08),transparent_40%)]" />

      <Container className="relative py-12">
        {/* TOP */}
        <div
          className="
            grid
            gap-10

            md:gap-12

            lg:grid-cols-[1.6fr_1fr_1fr]
          "
        >
          {/* ================================================= */}
          {/* BRAND */}
          {/* ================================================= */}

          <div
            className="
              flex
              flex-col
              items-start
              gap-6
            "
          >
            <span className="w-fit rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              ✨ Feito para professores brasileiros
            </span>

            <img src={logo} alt="EducAssist" />

            <p className="max-w-md leading-7 text-muted-foreground">
              Reduza o tempo gasto com planejamento, avaliações e burocracias. O
              EducAssist ajuda professores a recuperarem tempo para focar no que
              realmente importa: ensinar.
            </p>

            <a href="#cta">
              <Button size="md">Quero participar da lista de espera</Button>
            </a>
          </div>

          {/* ================================================= */}
          {/* NAVEGAÇÃO */}
          {/* ================================================= */}

          <div className="flex flex-col items-start">
            <h3 className="mb-6 text-xl font-bold text-secondary">Navegação</h3>

            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-muted-foreground
                    transition
                    hover:text-primary
                    active:text-primary
                  "
                >
                  <ArrowUpRight
                    className="
                      size-4
                      -translate-x-2
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100

                      group-active:translate-x-0
                      group-active:opacity-100
                    "
                  />

                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* ================================================= */}
          {/* CONTATO */}
          {/* ================================================= */}

          <div
            className="
              flex
              flex-col
              items-start
              gap-6
            "
          >
            <h3 className="text-xl font-bold text-secondary">Contato</h3>

            <div className="flex items-start gap-3">
              <ContactBadge className="cursor-default">
                <Mail size={18} />
              </ContactBadge>

              <div>
                <p className="font-semibold text-secondary">E-mail</p>

                <a
                  href="mailto:contato@educassist.com.br"
                  className="text-muted-foreground transition hover:text-primary active:text-primary"
                >
                  contato@educassist.com.br
                </a>
              </div>
            </div>

            <div>
              <p className="mb-4 font-semibold text-secondary">Redes sociais</p>

              <div
                className="
                  flex
                  justify-start
                  gap-3
                "
              >
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ContactBadge>
                    <FaInstagram size={20} />
                  </ContactBadge>
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <ContactBadge>
                    <FaLinkedin size={20} />
                  </ContactBadge>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-border" />

        {/* Bottom */}

        <div
          className="
            flex
            flex-col
            items-start
            gap-4

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EducAssist. Todos os direitos
            reservados.
          </span>

          <div
            className="
              flex
              items-center
              text-sm
              text-muted-foreground
            "
          >
            Feito com
            <Heart size={15} className="mx-2 fill-primary text-primary" />
            para professores brasileiros.
          </div>

          <div className="self-start md:self-auto">
            <Link href="#hero">Voltar ao topo ↑</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
