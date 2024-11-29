
import About from "./component/about";
import Contact from "./component/contact";
import Hero from "./component/Hero";
import Skill from "./component/skill";


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Contact />
    </div>
  );
}
