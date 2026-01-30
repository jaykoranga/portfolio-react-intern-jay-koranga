import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import { data } from './utility/utility'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Form from './components/Form'

import { useEffect, useState } from 'react'
function App() {
  const sections: string[] = ['hero', 'about', 'skills', 'projects']

  const [activeSection, setActiveSection] = useState<string>(sections[0])
  const [isModalActive, setIsModalActive] = useState<boolean>(false)

  useEffect(() => {
    const targets = document.querySelectorAll('.sections')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        console.log(entries)
        if (e.isIntersecting) {
          setActiveSection(() => {
            const targetId = e.target.id;
            console.log(targetId, "type:", typeof targetId)
            return targetId
          })
        }
      })
    }, { threshold: 0.6 })
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect();

  }, [])

  return (
    <>
      <Header sections={sections} activeSection={activeSection} ></Header>
      <section id={sections[0]} className=" sections mt-5 md:min-h-screen md:scroll-mt-15 ">
        <Hero></Hero>
      </section  >

      <section id={sections[1]} className=" sections mt-5 min-h-screen md:scroll-mt-15">
        <About aboutData={data}></About>
      </section>

      <section id={sections[2]} className=" sections mt-5 min-h-screen md:scroll-mt-15">
        <Skills></Skills>
      </section>
      <section id={sections[3]} className="  sections mt-5  md:scroll-mt-15">
        <Projects></Projects>
      {isModalActive?<Form isModalActive={isModalActive} setIsModalActive={setIsModalActive}></Form>:<></>}

        <Footer isModalActive={isModalActive} setIsModalActive={setIsModalActive}></Footer>
      </section>


    </>
  )
}

export default App
