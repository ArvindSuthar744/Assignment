import './App.css'
import Navigation from './Component/Navigation'
import HeaderSection from './Component/HeaderSection'
import AboutSection from './Component/AboutSection'
import SkillSection from './Component/SkillSection'
import ProjectSection from './Component/ProjectSection'
import FooterSection from './Component/FooterSection'
import ContactSection from './Component/ContactSection'

function App() {

  return (
    <>
      <div class="main">
          <Navigation />
          <HeaderSection />
          <AboutSection />
          <SkillSection/>
          <ProjectSection/>
          <ContactSection/>
          <FooterSection />
      </div>
    </>
  )
}

export default App
