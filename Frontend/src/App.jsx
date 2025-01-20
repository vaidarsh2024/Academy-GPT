// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import HomePage from "./pages/HomePage";
import Aboutus from "./Componets/Aboutus";
import Faq from "./Componets/Faq";
import LoginPages from "./pages/LoginPages";
import SignupPages from "./pages/SignupPages";
import ApplyNowpage from "./pages/ApplyNowpage";
import LeanerNavbar from "./Componets/LeanerNavbar";
import TutorNavbar from "./Componets/TutorNavbar";
import Paymentmethod from "./Componets/Paymentmethod";
import WhiteBoard from "./Componets/WhiteBoard";
import CalanderTimeSelect from './Componets/CalanderTImeSelect';

// Importing Leaner pages
import LeanerDashboard from "./pages/Leanerpages/LeanerDashboard";
import OneOnOne from "./pages/Leanerpages/OneOnOne";
import TutorDetails from "./Componets/TutorDetails";
import Group4 from "./pages/Leanerpages/Group4";
import Group4plus from "./pages/Leanerpages/Group4plus";
import LearnerQuestions from "./pages/Leanerpages/LearnerQuestions";
import AskQuestion from "./pages/Leanerpages/AskQuestion";
import Contact from "./pages/Leanerpages/Contact";
import Review from "./pages/Leanerpages/Review";
import Writereview from "./Componets/Writereview";
import LeanerProfile from "./pages/Leanerpages/LeanerProfile";
import Leanerprofileadd from "./pages/Leanerpages/Leanerprofileadd";
import Aboutpage from "./pages/Aboutpage";

// Importing Tutor pages
import TutorProfile from "./pages/Tutorpages/TutorProfile";

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
          <Route path="dashboard/paymentmethod" element={<Paymentmethod />} />
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

        {/* Nested routes under TutorNavbar */}
        <Route path="/tutornavbar" element={<TutorNavbar />}>
          <Route index element={<LeanerDashboard />} />
          <Route path="dashboard" element={<LeanerDashboard />} />
          <Route path="dashboard/paymentmethod" element={<Paymentmethod />} />
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
          <Route path="tutorprofile" element={<TutorProfile />} />
          {/* <Route
            path="tutorprofile/tutoraddprofile"
            element={<TutorAddProfile />}
          /> */}
          <Route path="paymentmethod" element={<Paymentmethod />} />
          <Route path="whiteboard" element={<WhiteBoard />} />
          <Route path="calandertimeselect" element={<CalanderTimeSelect />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
