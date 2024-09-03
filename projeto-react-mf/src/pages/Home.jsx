/*import Banner from "../componentes/Banner";*/
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import Button from "../componentes/Button";
import Hero from "../componentes/Hero";

function Home() {
  return (
    <>
      <Header />
      <h1>Home</h1>
      <p>Subtitle</p>
      <Button buttonStyle="primary" arrow>
        Olá
      </Button>
      <div className="container">
        <Hero />
      </div>

      <Footer />
    </>
  );
}

export default Home;
