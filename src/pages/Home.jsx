import Hero from "../components/home/Hero.jsx";
import FeaturedProjects from "../components/home/FeaturedProjects.jsx";
import AboutPreview from "../components/home/AboutPreview.jsx";
import Skills from "../components/home/Skills.jsx";
import ExperienceEducation from "../components/home/ExperienceEducation.jsx";
import GitHubActivity from "../components/home/GitHubActivity.jsx";
import ContactCTA from "../components/home/ContactCTA.jsx";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <AboutPreview />
      <Skills />
      <ExperienceEducation />
      <GitHubActivity />
      <ContactCTA />
    </>
  );
}

export default Home;
