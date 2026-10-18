import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Soluções",
    "href": "#solutions"
  },
  {
    "name": "Demos",
    "href": "#projects"
  },
  {
    "name": "Diferenciais",
    "href": "#features"
  },
  {
    "name": "Contato",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "How It Works",
    "href": "#how-it-works"
  }
];

  return (
    <StyleProvider buttonVariant="expand" siteBackground="gridDots" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarCentered
      logo="Aion"
      ctaButton={{
        text: "Quero transformar",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Navegação",
          items: [
            {
              label: "Soluções",
              href: "#solutions",
            },
            {
              label: "Projetos",
              href: "#projects",
            },
            {
              label: "Contato",
              href: "#contact",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Instagram",
              href: "https://www.instagram.com/aionlabs.ia/",
            },
            {
              label: "WhatsApp",
              href: "https://wa.me/5511970224588",
            },
          ],
        },
      ]}
      leftText="© 2024 Aion AI Consulting. Todos os direitos reservados."
      rightText="Tecnologia que amplia possibilidades."
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
