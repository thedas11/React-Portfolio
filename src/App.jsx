import './App.css'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import ContactMeMain from './components/contactMeSection.jsx/ContactMeMain'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import FooterMain from './components/footer/FooterMain'
import HelperSection from './components/HelperSection'
import HeroGradient from './components/heroSection/HeroGradient'
import HeroMain from './components/heroSection/HeroMain'
import SubHerosection from './components/heroSection/SubHerosection'
import Navbarmain from './components/navbar/Navbarmain'
import ProjectsMain from './components/projectsSection/ProjectsMain'
import SkillsMain from './components/skillsSection/SkillsMain'
import SubSkills from './components/skillsSection/SubSkills'
const App =()=>{
  return (
    <main className='font-body'>
      <Navbarmain/>
      <HeroMain/>
      <HeroGradient/>
      <SubHerosection/>
      <AboutMeMain/>
      <SkillsMain/>
      <SubSkills/>
      <ExperienceMain/>
      <ProjectsMain/>
      <ContactMeMain/>
      <FooterMain/>
       </main>
  )
}

export default App
