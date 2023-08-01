import AboutMeSection from "@/components/feature/sections/AboutMe";
import ContactMeSection from "@/components/feature/sections/ContactMe";
import ExperiencesSection from "@/components/feature/sections/Experiences";
import HeroSection from "@/components/feature/sections/Hero";
import ProjectsSection from "@/components/feature/sections/Projects";
import SkillsSection from "@/components/feature/sections/Skills";

export default function Home() {
  // const sections = [
  //   HeroSection,
  //   AboutMeSection,
  //   SkillsSection,
  //   ExperiencesSection,
  //   ProjectsSection,
  //   ContactMeSection
  // ];
  return (
    <>
      {/* {sections?.map((section, index) => section(index))} */}
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ExperiencesSection />
      <ProjectsSection />
      <ContactMeSection />
    </>
  );
}
