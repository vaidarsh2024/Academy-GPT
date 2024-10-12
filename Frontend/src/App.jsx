import "./App.css";
import Herosection from "./Componets/Herosection";
import Navbar from "./Componets/Navbar";
import Aboutus from "./Componets/Aboutus";
import Courses from "./Componets/Courses";
import Faq from "./Componets/Faq";
import Footer from "./Componets/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Aboutus />
      <Courses />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
