import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FeatureCard } from "@/components/ui/feature_card";
import { HandHeart, Rocket, Tag } from "lucide-react";

export default function Pioneer() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <Container>
        <div
          className="
            py-12

            sm:py-16

            lg:py-20
          "
        >
          {/* Cabeçalho */}
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="
                text-3xl
                font-extrabold
                leading-tight
                tracking-tight
                text-white

                sm:text-4xl

                lg:text-5xl
              "
            >
              Seja um Professor Pioneiro.
            </h2>

            <p
              className="
                mt-4

                text-base
                leading-7
                text-white/90

                sm:text-lg
              "
            >
              Estamos refinando o EducAssist com um grupo seleto de educadores.
              Ao fazer seu pré-registro hoje, você garante:
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
              variant="glass"
              icon={<Rocket size={28} />}
              title="Acesso Antecipado"
              description="Teste a versão Beta antes de todo mundo."
            />

            <FeatureCard
              variant="glass"
              icon={<Tag size={28} />}
              title="Condições Especiais"
              description="Descontos exclusivos nos planos pagos quando a plataforma for lançada."
            />

            <FeatureCard
              className="
                sm:col-span-2
                sm:mx-auto
                sm:max-w-md

                lg:col-span-1
                lg:max-w-none
              "
              variant="glass"
              icon={<HandHeart size={28} />}
              title="Sua voz no produto"
              description="Sugira funcionalidades que atendam diretamente à sua realidade escolar."
            />
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Fazer meu pré-registro agora
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
