import { FeatureItem } from "@/components/ui/feature_item";
import { TeacherTestimonialsCarousel } from "@/components/ui/teacher_testimonials_carousel";
import { BadgeCheck, BrainCircuit } from "lucide-react";

export default function Barrier() {
  return (
    <section className="relative overflow-visible bg-background py-12 sm:py-16 lg:py-20">
      <div
        className="
          mx-auto
          grid
          max-w-[1200px]
          items-center
          gap-12

          lg:grid-cols-2
          lg:gap-16
        "
      >
        {/* Esquerda */}
        <div>
          <h2
            className="
              mx-auto
              max-w-xl

              text-center
              text-3xl
              font-extrabold
              leading-tight
              tracking-tight
              text-primary

              sm:text-4xl

              lg:mx-0
              lg:max-w-lg
              lg:text-left
            "
          >
            Inteligência Artificial com sensibilidade pedagógica.
          </h2>

          <div
            className="
              mt-8
              space-y-8

              sm:mt-10
              sm:space-y-10
            "
          >
            <FeatureItem
              icon={<BadgeCheck size={24} />}
              iconClassName="text-secondary"
              title="100% Alinhado à BNCC"
              description="O EducAssist não inventa conteúdos do nada. Ele cruza o seu plano anual e as diretrizes da BNCC para garantir um aprendizado técnico e oficial."
            />

            <FeatureItem
              icon={<BrainCircuit size={24} />}
              iconClassName="text-secondary"
              title="O copiloto, não o piloto"
              description="A IA faz o trabalho pesado de estrutura e digitação, mas o toque humano, a empatia e a palavra final são sempre seus. Você refina e valida tudo."
            />
          </div>
        </div>

        {/* Direita */}
        <div className="w-full">
          <TeacherTestimonialsCarousel />
        </div>
      </div>
    </section>
  );
}
