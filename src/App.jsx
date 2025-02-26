import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import About from "./component/About";
import Projects from "./component/Projects";
import Clients from "./component/Clients";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Experience from "./component/Experiance";
import { BrowserRouter } from "react-router-dom";
import SocialMediaSpeedDial from "./component/SocialMedia";

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Experience />
      <SocialMediaSpeedDial />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
