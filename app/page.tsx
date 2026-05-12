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
import RunningFooter from "./components/RunningFooter";

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

        <div className="ornament newspaper-container">— ✦ —</div>

        <FadeInSection delay={100}>
          <EducationSection />
        </FadeInSection>

        <div className="ornament newspaper-container">— ✦ —</div>

        <FadeInSection delay={100}>
          <ExperienceSection />
        </FadeInSection>

        <div className="ornament newspaper-container">— ✦ —</div>

        <FadeInSection delay={100}>
          <ProjectsSection />
        </FadeInSection>

        <div className="ornament newspaper-container">— ✦ —</div>

        <FadeInSection delay={100}>
          <SkillsSection />
        </FadeInSection>

        <div className="ornament newspaper-container">— ✦ —</div>

        <FadeInSection delay={100}>
          <CertificationsSection />
        </FadeInSection>
      </main>
      <Footer />
      <RunningFooter />
    </>
  );
}

