import { FeatureCard } from "@/components/ui/feature_card";
import { BatteryLow, CalendarX2, UsersRound } from "lucide-react";

export default function Pain() {
  return (
    <section className="relative overflow-hidden bg-light">
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
            Menos burocracia, mais tempo para ensinar.
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
            Sabemos que a sua rotina vai muito além da sala de aula.
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
          <FeatureCard
            icon={<CalendarX2 size={30} />}
            title="O Domingo à noite sagrado"
            description="Horas perdidas preenchendo papeladas, alinhando conteúdos à BNCC e criando provas do zero."
          />

          <FeatureCard
            icon={<BatteryLow size={30} />}
            title='A exaustão do "trabalho invisível"'
            description="Planejar e corrigir consome o tempo que você deveria usar para descansar ou dar atenção individual aos alunos."
          />

          <FeatureCard
            className="
      sm:col-span-2
      sm:mx-auto
      sm:max-w-md

      lg:col-span-1
      lg:max-w-none
    "
            icon={<UsersRound size={30} />}
            title="O desafio da personalização"
            description="Uma sala, 30 realidades diferentes. Como adaptar a mesma matéria para quem está avançado e para quem está com dificuldades?"
          />
        </div>
      </div>
    </section>
  );
}
