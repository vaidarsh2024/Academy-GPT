import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Herosection from "../Componets/Herosection";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";

const HomePage = () => {
  const aboutUsRef = useRef(null); // Ref for About Us section
  const faqRef = useRef(null); // Ref for FAQ section
  const location = useLocation();

  // Scroll to specific sections based on location.state
  useEffect(() => {
    if (location.state?.scrollToAbout) {
      aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState({}, document.title); // Clear state after scroll
    }
    if (location.state?.scrollToFaq) {
      faqRef.current?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Herosection />
      <Footer />
    </>
  );
};

export default HomePage;
