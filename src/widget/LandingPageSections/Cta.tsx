import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FeatureCard } from "@/components/ui/feature_card";
import { ChevronDown, HandHeart, Rocket, Sparkles, Tag } from "lucide-react";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)]" />

      <Container>
        <div
          className="
            relative

            py-12

            sm:py-10

            lg:py-20
          "
        >
          {/* Badge */}
          <div className="flex justify-center lg:justify-start">
            <span
              className="
                inline-flex

                rounded-full

                bg-white/10

                px-4
                py-2

                text-xs
                font-semibold
                text-white

                backdrop-blur-md

                sm:text-sm
              "
            >
              🚀 Pré-registro aberto
            </span>
          </div>

          {/* Conteúdo */}
          <div
            className="
              mt-6

              flex
              flex-col

              gap-12

              lg:mt-4
              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:gap-16
            "
          >
            {/* Lado esquerdo */}
            <div className="flex-1 text-center lg:text-left">
              <h1
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
                Recupere o seu tempo e transforme suas aulas.
              </h1>

              <p
                className="
                  mx-auto
                  mt-5

                  max-w-xl

                  text-base
                  leading-7

                  text-white/80

                  sm:text-lg
                  sm:leading-8

                  lg:mx-0
                "
              >
                Faça parte dos primeiros professores a utilizar o EducAssist e
                ajude a construir uma plataforma criada por educadores para
                educadores.
              </p>

              {/* Cards */}
              <div
                className="
                  mt-8

                  grid
                  grid-cols-1
                  gap-4

                  sm:grid-cols-2

                  lg:max-w-xl
                "
              >
                <FeatureCard
                  size="sm"
                  variant="glass"
                  icon={<Rocket size={22} />}
                  title="Acesso antecipado"
                  description="Teste a versão Beta antes do lançamento oficial."
                />

                <FeatureCard
                  size="sm"
                  variant="glass"
                  icon={<Tag size={22} />}
                  title="Desconto exclusivo"
                  description="Garanta condições especiais para sempre."
                />

                <FeatureCard
                  size="sm"
                  variant="glass"
                  icon={<Sparkles size={22} />}
                  title="Novos recursos"
                  description="Receba funcionalidades antes dos demais usuários."
                />

                <FeatureCard
                  size="sm"
                  variant="glass"
                  icon={<HandHeart size={22} />}
                  title="Influencie o produto"
                  description="Ajude a construir a plataforma com seu feedback."
                />
              </div>
            </div>

            {/* Formulário */}
            <div
              className="
                w-full

                max-w-md

                self-center

                rounded-3xl

                border
                border-white/20

                bg-white/10

                p-6

                shadow-2xl

                backdrop-blur-xl

                sm:p-8
              "
            >
              <h2
                className="
                  text-center

                  text-2xl
                  font-bold
                  text-white

                  lg:text-left
                "
              >
                Faça seu pré-registro
              </h2>

              <p
                className="
                  mt-2

                  text-center
                  text-white/70

                  lg:text-left
                "
              >
                Leva menos de 1 minuto.
              </p>

              <form className="mt-6 space-y-4">
                <input
                  placeholder="Nome completo"
                  className="
                    h-12
                    w-full

                    rounded-xl

                    border
                    border-white/20

                    bg-white/10

                    px-4

                    text-white

                    placeholder:text-white/50

                    outline-none

                    transition

                    focus:border-white/50
                  "
                />

                <input
                  type="email"
                  placeholder="E-mail"
                  className="
                    h-12
                    w-full

                    rounded-xl

                    border
                    border-white/20

                    bg-white/10

                    px-4

                    text-white

                    placeholder:text-white/50

                    outline-none

                    transition

                    focus:border-white/50
                  "
                />

                {/* Cargo */}
                <div className="relative">
                  <select
                    defaultValue=""
                    className="
                      h-12
                      w-full

                      appearance-none
                      hover:cursor-pointer
                      rounded-xl

                      border
                      border-white/20

                      bg-white/10

                      px-4
                      pr-12

                      text-white

                      outline-none

                      transition

                      focus:border-white/50
                    "
                  >
                    <option value="" disabled className="text-black">
                      Qual é seu cargo?
                    </option>

                    <option className="text-black">Professor(a)</option>
                    <option className="text-black">Coordenador(a)</option>
                    <option className="text-black">Diretor(a)</option>
                    <option className="text-black">Supervisor(a)</option>
                    <option className="text-black">Outro</option>
                  </select>

                  <ChevronDown
                    size={18}
                    className="
                      pointer-events-none

                      absolute
                      right-4
                      top-1/2

                      -translate-y-1/2

                      text-white/70
                    "
                  />
                </div>

                {/* Área */}
                <div className="relative">
                  <select
                    defaultValue=""
                    className="
                      h-12
                      w-full

                      appearance-none

                      rounded-xl

                      border
                      border-white/20

                      bg-white/10

                      px-4
                      pr-12

                      text-white

                      outline-none

                      transition

                      focus:border-white/50
                    "
                  >
                    <option value="" disabled className="text-black">
                      Área de atuação
                    </option>

                    <option className="text-black">Educação Infantil</option>

                    <option className="text-black">Ensino Fundamental I</option>

                    <option className="text-black">
                      Ensino Fundamental II
                    </option>

                    <option className="text-black">Ensino Médio</option>

                    <option className="text-black">EJA</option>

                    <option className="text-black">Ensino Técnico</option>

                    <option className="text-black">Ensino Superior</option>

                    <option className="text-black">Outro</option>
                  </select>

                  <ChevronDown
                    size={18}
                    className="
                      pointer-events-none

                      absolute
                      right-4
                      top-1/2

                      -translate-y-1/2

                      text-white/70
                    "
                  />
                </div>

                <Button variant="secondary" size="lg" className="mt-2 w-full">
                  Quero participar da lista de espera
                </Button>

                <p
                  className="
                    text-center

                    text-sm
                    leading-6

                    text-white/60
                  "
                >
                  🔒 Seus dados estão seguros. Entraremos em contato apenas
                  sobre o lançamento do EducAssist.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
