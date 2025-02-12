import './App.css'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import HelperSection from './components/HelperSection'
import HeroGradient from './components/heroSection/HeroGradient'
import HeroMain from './components/heroSection/HeroMain'
import SubHerosection from './components/heroSection/SubHerosection'
import Navbarmain from './components/navbar/Navbarmain'
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

      <HelperSection/>
       </main>
  )
}

export default App
