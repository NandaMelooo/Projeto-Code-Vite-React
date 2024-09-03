import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import Hero from "../componentes/Hero";
import ProjectList from "../componentes/ProjectList";

function Home() {
  return (
    <>
      <Header />

      <div className="container">
        <Hero />
        <ProjectList />
      </div>

      <Footer />
    </>
  );
}

export default Home;
