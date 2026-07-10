import { PriceCard } from "@/components/ui/price_card";
import { Container } from "@/components/ui/container";
import {
  Download,
  File,
  GraduationCap,
  Layers,
  Mail,
  PlusCircle,
  Sparkle,
  Sparkles,
} from "lucide-react";

export default function Much() {
  return (
    <section className="relative overflow-hidden bg-background">
      <Container>
        <div className="py-12 sm:py-16 lg:py-20">
          {/* Cabeçalho */}
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="
                text-3xl
                font-extrabold
                leading-tight
                tracking-tight
                text-primary

                sm:text-4xl
                lg:text-5xl
              "
            >
              Planos
            </h2>

            <p
              className="
                mt-4
                text-base
                font-medium
                leading-7
                text-muted-foreground

                sm:text-lg
              "
            >
              Com valores que cabem no seu bolso e de acordo com sua
              necessidade.
            </p>
          </div>

          {/* Cards */}
          <div
            className="
    mx-auto
    mt-10

    grid
    grid-cols-1
    gap-8

    sm:grid-cols-2
    sm:gap-6

    xl:grid-cols-3
  "
          >
            <PriceCard
              title="Plano"
              highlight="Gratuito"
              subtitle="Para conhecer a plataforma."
              price="R$ 0"
              currentPlan
              benefits={[
                {
                  icon: <Sparkles size={18} />,
                  label: "5 créditos inteligentes/mês",
                },
                {
                  icon: <File size={18} />,
                  label: "Até 2 documentos",
                },
                {
                  icon: <GraduationCap size={18} />,
                  label: "1 turma",
                },
                {
                  icon: <Layers size={18} />,
                  label: "Banco de documentos limitado",
                },
                {
                  icon: <Mail size={18} />,
                  label: "Suporte por e-mail",
                },
              ]}
            />

            <PriceCard
              title="Plano"
              variant="featured"
              highlight="Essencial"
              badge="Mais popular"
              subtitle="Para professores que utilizam a plataforma semanalmente."
              price="R$ 14,90"
              benefits={[
                {
                  icon: <PlusCircle size={18} />,
                  label: "Tudo do Básico, mais:",
                },
                {
                  icon: <Sparkles size={18} />,
                  label: "35 créditos inteligentes/mês",
                },
                {
                  icon: <File size={18} />,
                  label: "Até 30 documentos",
                },
                {
                  icon: <Download size={18} />,
                  label: "Exportação em Word/PDF",
                },
                {
                  icon: <GraduationCap size={18} />,
                  label: "Até 5 turmas",
                },
                {
                  icon: <Sparkles size={18} />,
                  label: "Geração de atividades",
                },
              ]}
            />

            <PriceCard
              className="
      sm:col-span-2
      sm:mx-auto
      sm:max-w-md

      xl:col-span-1
      xl:max-w-none
    "
              title="Plano"
              highlight="Pro"
              subtitle="Para quem utiliza a plataforma praticamente todos os dias."
              price="R$ 39,90"
              benefits={[
                {
                  icon: <PlusCircle size={18} />,
                  label: "Tudo do Essencial, mais:",
                },
                {
                  icon: <Sparkle size={18} />,
                  label: "100 créditos inteligentes/mês",
                },
                {
                  icon: <File size={18} />,
                  label: "Até 150 documentos",
                },
                {
                  icon: <GraduationCap size={18} />,
                  label: "Turmas ilimitadas",
                },
                {
                  icon: <Sparkles size={18} />,
                  label: "IA mais avançada",
                },
                {
                  icon: <Sparkles size={18} />,
                  label: "Novos recursos em primeira mão",
                },
              ]}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
