import './App.css'
import { AboutMe } from './Components/AboutMe'
import { ContactSection } from './Components/Contact'
import { Header } from './Components/Header'
import { Hero } from './Components/Hero'
import { Projects } from './Components/Projects'
import { Skills } from './Components/Skills'

function App() {


  return (
   <div className='flex flex-col items-center bg-[#070707]'>
        <Header/>
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <ContactSection/>
   </div>
  )
}

export default App
