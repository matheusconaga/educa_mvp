import { WhyCard } from "@/components/ui/why_card";
import { Clock3, Palette, ChartSpline } from "lucide-react";

export default function Why() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-[1200px] pb-8">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-3xl text-center">
          <h1
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
            Por que o EducAssist?
          </h1>

          <p
            className="
              mt-2
              text-base
              font-medium
              leading-7
              text-muted-foreground

              sm:text-lg
            "
          >
            Economize seu tempo e aumente o engajamento de suas aulas de forma
            inteligente.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2

            lg:mt-14
            lg:grid-cols-3
          "
        >
          <WhyCard
            icon={<Clock3 size={70} strokeWidth={2.5} />}
            title="Economia de Tempo"
            subtitle="Economize até 40% de tempo ao preparar planos de aula, provas e correções de atividades, levando apenas minutos ao invés de horas."
          />

          <WhyCard
            icon={<Palette size={70} strokeWidth={2.5} />}
            title="Personalização"
            subtitle="Adapte automaticamente os níveis de leitura e atividades para as necessidades específicas de cada aluno."
          />

          <WhyCard
            className="
              sm:col-span-2
              sm:mx-auto
              sm:max-w-md

              lg:col-span-1
              lg:max-w-none
            "
            icon={<ChartSpline size={70} strokeWidth={2.5} />}
            title="Informações de Desempenho"
            subtitle="Veja os dados referentes a cada aluno para identificar áreas que precisam de intervenção ou aprendizagem acelerada."
          />
        </div>
      </div>
    </section>
  );
}