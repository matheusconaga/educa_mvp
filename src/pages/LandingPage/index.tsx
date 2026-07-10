import Why from "@/widget/LandingPageSections/Why";
import Hero from "../../widget/LandingPageSections/Hero";
import How from "@/widget/LandingPageSections/How";
import Much from "@/widget/LandingPageSections/Much";
import Pain from "@/widget/LandingPageSections/Pain";
import Barrier from "@/widget/LandingPageSections/Barrier";
import Pioneer from "@/widget/LandingPageSections/Pioneer";
import Faq from "@/widget/LandingPageSections/Faq";
import Cta from "@/widget/LandingPageSections/Cta";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-16">
      <Section id="hero">
          <Hero />
      </Section>
      <Section id="pain">
        <Container>
          <Pain />
        </Container>
      </Section>
      <Section id="why">
        <Container>
          <Why />
        </Container>
      </Section>
      <Section id="how">
          <How />
      </Section>
      <Section id="barrier">
        <Container>
          <Barrier />
        </Container>
      </Section>
      <Section id="pioneer">
          <Pioneer />
      </Section>
      <Section id="much">
        <Container>
          <Much />
        </Container>
      </Section>
      <Section id="faq">
        <Container>
          <Faq />
        </Container>
      </Section>
      <Section id="cta">
          <Cta />
      </Section>
    </div>
  );
}
