import Banner from "../componentes/Banner";
import Footer from "../componentes/Footer";
import Header from "../componentes/Header";
import AboutText from "../componentes/AboutText";

function About() {
  return (
    <>
      <Header />
      <Banner title="About" image="about.jpg" />
      <div className="container">
        <AboutText />
      </div>
      <Footer />
    </>
  );
}

export default About;
