import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Header from "./Header";
import Mail from "./Mail";
import Project from "./Project";
import Skills from "./Skills";
import Social from "./Social";

const HomePage = () => {
  return (
    <>
      <Header />
      <About /> 
      <Project/>
      <Skills/>
      <Experience/>
      <Contact/>
       <Mail /> 
      <Social />
    </>
  );
};
export default HomePage;
