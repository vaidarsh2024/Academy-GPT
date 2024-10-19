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
import WhiteBoard from "./Componets/WhiteBoard";
import Writereview from "./Componets/Writereview";
import Leanerprofileadd from "./pages/Leanerpages/Leanerprofileadd";
import LeanerProfile from "./pages/Leanerpages/LeanerProfile";
import Aboutpage from "./pages/Aboutpage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main routes */}
        <Route path="/" element={<HomePage />} />

        <Route path="/aboutpage" element={<Aboutpage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/loginpage" element={<LoginPages />} />
        <Route path="/signuppages" element={<SignupPages />} />
        <Route path="/applynow" element={<ApplyNowpage />} />

        {/* Nested routes under LeanerNavbar */}
        <Route path="/leanernavbar" element={<LeanerNavbar />}>
          <Route index element={<LeanerDashboard />} />
          <Route path="dashboard" element={<LeanerDashboard />} />
          <Route path="oneonone" element={<OneOnOne />} />
          <Route path="oneonone/tutordetails/:id" element={<TutorDetails />} />
          <Route path="group4" element={<Group4 />} />
          <Route path="group4/tutordetails/:id" element={<TutorDetails />} />
          <Route path="group4plus" element={<Group4plus />} />
          <Route
            path="group4plus/tutordetails/:id"
            element={<TutorDetails />}
          />
          <Route path="leanerquestions" element={<LearnerQuestions />} />
          <Route path="askquestion" element={<AskQuestion />} />
          <Route path="contact" element={<Contact />} />

          <Route path="review" element={<Review />} />
          <Route path="review/writereview" element={<Writereview />} />

          <Route path="leanerprofile" element={<LeanerProfile />} />
          <Route
            path="leanerprofile/leanerprofileadd"
            element={<Leanerprofileadd />}
          />
          <Route path="whiteboard" element={<WhiteBoard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
