import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Aboutus from "./Componets/Aboutus";
import Faq from "./Componets/Faq";
import LoginPages from "./pages/LoginPages";
import SignupPages from "./pages/SignupPages";
import ApplyNowpage from "./pages/ApplyNowpage";
import LeanerNavbar from "./Componets/LeanerNavbar";
import LeanerDashboard from "./pages/Leanerpages/LeanerDashboard";
import OneOnOne from "./pages/Leanerpages/OneOnOne";

import TutorDetails from "./Componets/TutorDetails";
import Group4 from "./pages/Leanerpages/Group4";
import Group4plus from "./pages/Leanerpages/Group4plus";
import LearnerQuestions from "./pages/Leanerpages/LearnerQuestions";
import AskQuestion from "./pages/Leanerpages/AskQuestion";
import Contact from "./pages/Leanerpages/Contact";
import Review from "./pages/Leanerpages/Review";
import LeanerFaq from "./pages/Leanerpages/LeanerFaq";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Define the routes for the main pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/loginpage" element={<LoginPages />} />
          <Route path="/signuppages" element={<SignupPages />} />
          <Route path="/applynow" element={<ApplyNowpage />} />

          {/* Nested routing under LeanerNavbar */}
          <Route path="/leanernavbar" element={<LeanerNavbar />}>
            <Route path="dashboard" element={<LeanerDashboard />} />
            <Route path="oneonone" element={<OneOnOne />} />

            <Route path="group4" element={<Group4 />} />
            <Route path="group4plus" element={<Group4plus />} />
            <Route path="leanerquestions" element={<LearnerQuestions />} />
            <Route path="askquestion" element={<AskQuestion />} />
            <Route path="contact" element={<Contact />} />
            <Route path="review" element={<Review />} />
            <Route path="leanerfaq" element={<LeanerFaq />} />
          </Route>

          <Route path="/tutordetails/:id" element={<TutorDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
