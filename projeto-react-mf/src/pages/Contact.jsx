import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import Banner from "../componentes/Banner";
import ContactForm from "../componentes/ContactForm";

function Contact() {
  return (
    <>
      <Header />
      <Banner title="Contact" image="contact.jpg" />
      <div className="container">
        <ContactForm />
      </div>

      <Footer />
    </>
  );
}

export default Contact;
