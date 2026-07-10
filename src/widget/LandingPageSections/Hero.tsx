import heroImage from "@/assets/hero.webp";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Desktop */}
      <div className="absolute inset-0 hidden lg:block">
        {/* Imagem */}
        <div className="absolute inset-0 left-1/2">
          <img
            src={heroImage}
            alt="Professor utilizando Inteligência Artificial"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Gradiente Desktop */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-r

            from-background
            via-background/10
            via-30%
            to-primary/80
          "
        />

        {/* Glow */}
        <div className="absolute inset-0 bg-primary/10 backdrop-blur-[1px]" />
      </div>

      <Container>
        <div
          className="
            relative
            z-10

            flex
            min-h-[calc(100vh-80px)]
            items-center

            py-10

            lg:py-0
          "
        >
          <div
            className="
              flex
              w-full
              flex-col

              text-center

              lg:w-1/2
              lg:pr-20
              lg:text-left
            "
          >
            <span
              className="
                mx-auto
                mb-5
                inline-flex
                w-fit
                rounded-full
                border
                border-primary/20
                bg-primary/10
                px-4
                py-2
                text-xs
                font-semibold
                text-primary

                sm:text-sm

                lg:mx-0
              "
            >
              ✨ Inteligência Artificial para Professores
            </span>

            <h1
              className="
                mx-auto
                max-w-xl

                text-4xl
                font-extrabold
                leading-tight
                tracking-tight

                sm:text-5xl

                lg:mx-0
                lg:text-6xl
              "
            >
              O assistente que todo{" "}
              <span className="text-primary">professor</span> precisava.
            </h1>

            <p
              className="
                mx-auto
                mt-5
                max-w-lg

                text-lg
                leading-8

                text-muted-foreground

                sm:text-xl
                sm:leading-9

                lg:mx-0
              "
            >
              Economize tempo e foque no que importa: o aprendizado de seus
              alunos. Planejamentos, atividades e correções em segundos.
            </p>

            <div
              className="
                mt-8

                flex
                flex-col
                gap-3

                sm:flex-row
                sm:justify-center

                lg:justify-start
              "
            >
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Quero Participar
              </Button>

              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Como funciona?
              </Button>
            </div>

            <p
              className="
                mt-8

                text-sm
                text-muted-foreground

                sm:text-base

                lg:mt-10
              "
            >
              A IA é um assistente e não substitui o trabalho do professor.
            </p>

            {/* Imagem Mobile */}
            <div className="relative mt-2 -mx-4 sm:-mx-6 lg:hidden">
              <div className="relative h-[460px] overflow-hidden">
                <img
                  src={heroImage}
                  alt="Professor utilizando Inteligência Artificial"
                  className="h-full w-full object-cover object-top"
                />

                {/* Gradiente SOBRE a imagem */}
                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-b

                    from-background
                    from-[2%]


                    via-transparent
                    via-[25%]

                    to-primary/80
                  "
                />

                {/* Glow */}
                <div className="absolute inset-0 bg-primary/10 backdrop-blur-[1px]" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
