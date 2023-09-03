import HeroContent from "./Hero";
import AboutMeContent from "./AboutMe";
import SkillsContent from "./Skills";
import ExperiencesContent from "./experiences";
import ProjectsContent from "./Projects";
import ContactMeContent from "./ContactMe";
import { SECTIONS_AND_NAV_LINKS } from "@/helper";
import Section from "@/components/common/section";
import { Section as SectionType } from "@/types";

const Sections = () => {
  const renderSectionContentById = (id: string) => {
    switch (id) {
      case "hero":
        return <HeroContent />;
      case "about":
        return <AboutMeContent />;
      case "skills":
        return <SkillsContent />;
      case "experiences":
        return <ExperiencesContent />;
      case "projects":
        return <ProjectsContent />;
      case "contactMe":
        return <ContactMeContent />;
      default:
        return null;
    }
  };

  return SECTIONS_AND_NAV_LINKS?.filter(
    (section: SectionType) => Boolean(section?.isInActive) === false
  )?.map((section, index) => (
    <Section key={section.id} id={section.id} isAlternative={Boolean(index % 2)}>
      {renderSectionContentById(section.id)}
    </Section>
  ));
};

export default Sections;
