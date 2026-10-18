import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesBorderGlow from '@/components/sections/features/FeaturesBorderGlow';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import { Globe, LayoutDashboard, Lightbulb } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplit
      tag="Consultoria em IA"
      title="Transforme inteligência artificial em vantagem competitiva"
      description="Soluções inteligentes, automação de processos e desenvolvimento digital de alta performance para levar sua empresa ao próximo nível."
      primaryButton={{
        text: "Quero transformar minha empresa",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Explorar projetos",
        href: "#projects",
      }}
      imageSrc="https://images.pexels.com/photos/20337648/pexels-photo-20337648.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="solutions" data-section="solutions">
    <SectionErrorBoundary name="solutions">
          <FeaturesBorderGlow
      tag="Nossas Soluções"
      title="Expertise em IA e Automação"
      description="Focamos em eficiência operacional, inovação digital e resultados mensuráveis."
      features={[
        {
          icon: Lightbulb,
          title: "Consultoria em IA",
          description: "Estratégia personalizada para implementação de inteligência artificial em processos críticos.",
        },
        {
          icon: LayoutDashboard,
          title: "Automação",
          description: "Otimização de rotinas operacionais com RPA e automação inteligente de alto nível.",
        },
        {
          icon: Globe,
          title: "Experiência Digital",
          description: "Desenvolvimento de produtos digitais com foco total em conversão e usabilidade premium.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="projects" data-section="projects">
    <SectionErrorBoundary name="projects">
          <FeaturesImageBento
      tag="Portfólio"
      title="Projetos em destaque"
      description="Cinco demonstrações da nossa capacidade técnica e design sofisticado."
      items={[
        {
          title: "Logistics AI",
          description: "Otimização de rotas com IA.",
          imageSrc: "https://images.pexels.com/photos/16902140/pexels-photo-16902140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          href: "#",
        },
        {
          title: "Process Flow",
          description: "Automação inteligente de tarefas.",
          imageSrc: "https://images.pexels.com/photos/590011/pexels-photo-590011.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          href: "#",
        },
        {
          title: "Web Platform",
          description: "Interface digital corporativa.",
          imageSrc: "https://images.pexels.com/photos/25078930/pexels-photo-25078930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          href: "#",
        },
        {
          title: "Data Insights",
          description: "Analytics preditivo avançado.",
          imageSrc: "https://images.pexels.com/photos/34804021/pexels-photo-34804021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          href: "#",
        },
        {
          title: "Smart Infrastructure",
          description: "Conexão de sistemas inteligentes.",
          imageSrc: "https://images.pexels.com/photos/7190947/pexels-photo-7190947.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          href: "#",
        },
        {
          title: "Future Tech",
          description: "Exploração tecnológica.",
          imageSrc: "https://images.pexels.com/photos/6192324/pexels-photo-6192324.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          href: "#",
        },
        {
          title: "Growth Engine",
          description: "Implementação de resultados.",
          imageSrc: "https://images.pexels.com/photos/8566523/pexels-photo-8566523.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          href: "#",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <MetricsFeatureCards
      tag="Diferenciais Aion"
      title="Por que nos escolher?"
      description="Nossa abordagem combina visão estratégica e execução de alto padrão."
      metrics={[
        {
          value: "Estratégia",
          title: "Visão focada",
          features: [
            "Orientação por dados",
            "Consultoria 360º",
            "Soluções sob medida",
          ],
        },
        {
          value: "Design",
          title: "Padrão Premium",
          features: [
            "Estética tecnológica",
            "Usabilidade intuitiva",
            "Foco em performance",
          ],
        },
        {
          value: "IA",
          title: "IA Aplicada",
          features: [
            "IA ética e funcional",
            "Escalabilidade real",
            "Resultados mensuráveis",
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="how-it-works" data-section="how-it-works">
    <SectionErrorBoundary name="how-it-works">
          <FaqSplitMedia
      tag="Processo"
      title="Como funcionamos?"
      description="Um fluxo claro e direto para trazer sua visão à realidade."
      items={[
        {
          question: "Diagnóstico",
          answer: "Analise profunda de sua necessidade técnica e de negócios.",
        },
        {
          question: "Estratégia",
          answer: "Planejamento detalhado para otimização com IA.",
        },
        {
          question: "Desenvolvimento",
          answer: "Construção técnica de alto nível com design refinado.",
        },
        {
          question: "Evolução",
          answer: "Acompanhamento contínuo e melhorias constantes.",
        },
      ]}
      imageSrc="https://images.pexels.com/photos/6203316/pexels-photo-6203316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Contato"
      text="Pronto para transformar sua empresa?"
      primaryButton={{
        text: "Falar pelo WhatsApp",
        href: "https://wa.me/5511970224588",
      }}
      secondaryButton={{
        text: "Instagram",
        href: "https://www.instagram.com/aionlabs.ia/",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
