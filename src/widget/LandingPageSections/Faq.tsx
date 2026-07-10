import { FaqAccordion } from "@/components/ui/FAQ/faq_accordion";
import { faqItems } from "@/data/faq_data";


export default function Faq() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-[900px] px-4">
        <h1 className="text-center text-4xl font-extrabold text-primary">
          Perguntas Frequentes
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-center leading-8 text-muted-foreground">
          Tire suas dúvidas sobre o EducAssist e descubra como a plataforma pode
          transformar o planejamento das suas aulas.
        </p>

        <div className="mt-8">
          <FaqAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}