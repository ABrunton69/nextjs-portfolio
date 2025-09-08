import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <Hero />
      <About />
      <Projects index={3} />
      <Skills />
      <Contact />
    </>
  );
}
