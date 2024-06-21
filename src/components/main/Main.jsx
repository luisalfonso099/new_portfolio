import useTheme from "../../hooks/useTheme";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Precentation from "../precentacion/Precentation";
import Projects from "../projects/Projects";
// import Services from "../services/Services";
import Tools from "../tools/Tools";

const Main = () => {
    const { darkTheme } = useTheme();

    return (
      <>
        <Navbar />
        <main className={`container-main ${!darkTheme && ' border-ligth'}`}>
          <Precentation/>
          {/* <Services /> */}
          <Projects />
          <Contact/>
        </main>
        <Footer />
        <Tools />
      </>
    );
  };

export default Main
