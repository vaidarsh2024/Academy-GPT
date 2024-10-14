import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Aboutus from "./Componets/Aboutus";
import Faq from "./Componets/Faq";
import LoginPages from "./pages/LoginPages";
import SignupPages from "./pages/SignupPages";
import ApplyNowpage from "./pages/ApplyNowpage";
import LeanerNavbar from "./Componets/LeanerNavbar";
import LeanerDashboard from "./pages/LeanerDashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/loginpage" element={<LoginPages />} />
          <Route path="/signuppages" element={<SignupPages />} />
          <Route path="/applynow" element={<ApplyNowpage />} />
          <Route path="/leanernavbar" element={<LeanerNavbar />} />
          <Route path="/leanerdashboard" element={<LeanerDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
