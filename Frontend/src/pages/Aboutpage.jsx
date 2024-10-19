import Aboutus from "../Componets/Aboutus";
import Footer from "../Componets/Footer";
import Navbar from "../Componets/Navbar";
import Courses from "../Componets/Courses";
import Faq from "../Componets/Faq";

const Aboutpage = () => {
  return (
    <>
      <Navbar />
        <Aboutus/>
      <Courses/>
        <Faq />
      <Footer />
    </>
  );
}

export default Aboutpage;