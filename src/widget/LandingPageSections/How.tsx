import { Step } from "@/components/ui/step";
import { VideoPresentation } from "@/components/ui/video_presentation";

export default function How() {
  return (
    <section className="relative overflow-hidden bg-background2">
      <div
        className="mx-auto max-w-[1200px] pt-12 pb-16 px-2
    sm:px-4
    lg:px-0"
      >
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
            Como Funciona?
          </h1>

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
            Um fluxo linear projetado para facilitar a maneira que você ensina.
          </p>
        </div>

        {/* Conteúdo */}
        <div
          className="
            mt-4

            flex
            flex-col
            gap-10

            lg:mt-14
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:gap-12
          "
        >
          {/* Vídeo */}
          <div className="w-full lg:w-1/2">
            <VideoPresentation videoUrl="" />
          </div>

          {/* Passos */}
          <div
            className="
              w-full

              space-y-6

              sm:space-y-8

              lg:w-1/2
            "
          >
            <Step
              number={1}
              title="Crie sua turma"
              description="Insira a disciplina e os alunos referentes para uma geração de conteúdos mais precisa."
            />

            <Step
              number={2}
              title="Envie os materiais"
              description="Envie PDFs, imagens e outros materiais da disciplina, como o plano anual."
            />

            <Step
              number={3}
              title="Gere e refine"
              description="A IA cria planos de aula, atividades e avaliações. Depois, personalize tudo do seu jeito."
            />

            <Step
              number={4}
              title="Revise e ensine"
              description="Compartilhe os conteúdos diretamente no sistema escolar ou exporte em PDF e DOCX."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
