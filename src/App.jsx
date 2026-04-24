import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Failed from "./pages/Failed";
import Footer from "./pages/Footer";
import ComplaintPolicy from "./pages/ComplaintPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsAndCondition from "./pages/TermsAndCondition";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failed" element={<Failed />} />
         <Route path="/ComplaintPolicy" element={<ComplaintPolicy/>} />
          <Route path="/RefundPolicy" element={<RefundPolicy/>} />
           <Route path="/TermsAndCondition" element={<TermsAndCondition/>} />
            <Route path="/AboutUs" element={<AboutUs/>} />
             <Route path="/ContactPage" element={<ContactPage/>} />
             <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
             

      </Routes>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;