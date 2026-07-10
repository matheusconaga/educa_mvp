import logo from "@/assets/logo.svg";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { MobileMenu } from "./MobileMenu";

export default function Header() {
  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-[999]
        border-b
        border-border
        bg-background/90
        backdrop-blur-xl
        shadow-sm
      "
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="transition-opacity hover:opacity-80"
          >
            <img
              src={logo}
              alt="EducAssist"
              className="h-10 w-auto"
            />
          </a>

          <nav className="hidden items-center gap-10 min-[1200px]:flex">
            <Link href="#pain">Desafios</Link>
            <Link href="#why">Benefícios</Link>
            <Link href="#how">Como funciona?</Link>
            <Link href="#barrier">Depoimentos</Link>
            <Link href="#much">Planos</Link>
            <Link href="#faq">FAQ</Link>
          </nav>

          {/* Botão Desktop - Ativa apenas a partir de 1200px */}
          <div className="hidden min-[1200px]:block">
            <a href="#cta">
              <Button>Quero participar</Button>
            </a>
          </div>

          {/* Tablet / Mobile - Visível para telas menores que 1200px */}
          <div className="flex items-center gap-3 min-[1200px]:hidden">
            {/* Tablet */}
            <a href="#cta" className="hidden sm:block">
              <Button size="sm">
                Quero participar
              </Button>
            </a>

            {/* Menu */}
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}