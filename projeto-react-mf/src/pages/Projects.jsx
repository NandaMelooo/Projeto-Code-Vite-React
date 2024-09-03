import Banner from "../componentes/Banner";
import Footer from "../componentes/Footer";
import Hero from "../componentes/Hero";
import ProjectList from "../componentes/ProjectList";
import Header from "../componentes/Header";

function Projects() {
  return (
    <>
      <Header />
      <Banner title="Projects" image="projects.jpg" />
      <div className="container">
        <ProjectList />
      </div>

      <Footer />
    </>
  );
}

export default Projects;
