import Navbar from "./components/Navbar";
import Masthead from "./components/Masthead";
import HeroSection from "./components/HeroSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import CertificationsSection from "./components/CertificationsSection";
import Footer from "./components/Footer";
import FadeInSection from "./components/FadeInSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <FadeInSection>
          <Masthead />
        </FadeInSection>

        <FadeInSection delay={200}>
          <HeroSection />
        </FadeInSection>

        <FadeInSection delay={100}>
          <EducationSection />
        </FadeInSection>

        <FadeInSection delay={100}>
          <ExperienceSection />
        </FadeInSection>

        <FadeInSection delay={100}>
          <ProjectsSection />
        </FadeInSection>

        <FadeInSection delay={100}>
          <SkillsSection />
        </FadeInSection>

        <FadeInSection delay={100}>
          <CertificationsSection />
        </FadeInSection>
      </main>
      <Footer />
    </>
  );
}
