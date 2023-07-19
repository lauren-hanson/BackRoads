import { About } from "./components/About"
import { NavBar } from "./components/NavBar"
import { Services } from "./components/Services"
import { Tours } from "./components/Tours"
import { Hero } from "./components/Hero"
import { Footer } from "./components/Footer"

function BackRoads() {
  return (
    <>
      <NavBar /> 
      <Hero />
      <About />
      <Services /> 
      <Tours /> 
      <Footer />
      </>
  )
}

export default BackRoads;
