import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ManagementTeam from "./pages/ManagementTeam";
import Gallery from "./pages/Gallery";

import Investors from "./pages/Investors";
import BusinessDetails from "./pages/Investors/BusinessDetails";
import KMP from "./pages/Investors/KMP";
import BOD from "./pages/Investors/BOD";
import ShareDocs from "./pages/Investors/ShareDocs";
import FinancialResults from "./pages/Investors/FinancialResults";
import SharePatterns from "./pages/Investors/SharePatterns";
import Banking from "./pages/Investors/Banking";
import BoardNotice from "./pages/Investors/BoardNotice";
import SubsidaryFinance from "./pages/Investors/SubsidaryFinance.jsx";
import CorporatePolicies from "./pages/Investors/CorporatePolicies";
import AnnualReports from "./pages/Investors/AnnualReports";
import IPO from "./pages/Investors/IPO";
import BoardCommittee from "./pages/Investors/BoardCommittee";
import AnnualReturns from "./pages/Investors/AnnualReturns";
import NewsInfo from "./pages/Investors/NewsInfo";
import CorporateAnnounce from "./pages/Investors/CorporateAnnounce";
import CorporateInfo from "./pages/Investors/CorporateInfo";
import AGM from "./pages/Investors/AGM";
import MaterialCredit from "./pages/Investors/MaterialCredit";
import MaterialContract from "./pages/Investors/MaterialContract";
import MaterialDocs from "./pages/Investors/MaterialDocs";
import SecretorialReport from "./pages/Investors/SecretorialReport";


import Contact from "./pages/Contact";
import Updates from "./pages/Updates";
import ProjectsPage from "./pages/Projects";
import ServicePage from "./pages/Services";
import ProductPage from "./pages/Products";
import MarqueeNews from "./Landing/Marquee";
import ChatbotScriptsLoader from "./scripts/ChatbotScriptsLoader";


const App = () => {
  return (
    <>
    <Router> {/* Ensure Router is wrapping everything */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
          <Route path="*" element={<Home/>} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/management-team" element={<ManagementTeam />} />
            <Route path="/gallery" element={<Gallery />} />

            <Route path="/investors" element={<Investors />} />
            <Route path="/business-details" element={<BusinessDetails />} />
            <Route path="/kmp" element={<KMP />} />
            <Route path="/board-of-directors" element={<BOD />} />
            <Route path="/board-committee" element={<BoardCommittee />} />
            <Route path="/share-docs" element={<ShareDocs />} />
            <Route path="/share-patterns" element={<SharePatterns />} />
            <Route path="/banking" element={<Banking />} />
            <Route path="/financial-results" element={<FinancialResults />} />
            <Route path="/board-notice" element={<BoardNotice />} />
            <Route path="/subsidary-finance" element={<SubsidaryFinance />} />
            <Route path="/corporate-policies" element={<CorporatePolicies />} />
            <Route path="/ipo" element={<IPO />} />
            <Route path="/reports" element={<AnnualReports />} />
            <Route path="/annual-returns" element={<AnnualReturns />} />
            <Route path="/news-information" element={<NewsInfo />} />
            <Route path="/corporate-announcements" element={<CorporateAnnounce />} />
            <Route path="/corporate-information" element={<CorporateInfo />} />
            <Route path="/agm-notice" element={<AGM />} />
            <Route path="/material-creditors" element={<MaterialCredit />} />
            <Route path="/material-contracts" element={<MaterialContract />} />
            <Route path="/material-documents" element={<MaterialDocs />} />
            <Route path="/secretarial-components-report" element={<SecretorialReport />} />

            
            <Route path="/investors/latestupdates" element={<Updates/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<ProjectsPage/>} />
            <Route path="/services" element={<ServicePage/>} />
            <Route path="/products" element={<ProductPage/>} />
            
          </Routes>
        
        </div>
        <Footer />
      </div>
    </Router>
<ChatbotScriptsLoader/>
    </>
  );
};

export default App;
