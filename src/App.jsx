import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import QuotePopup from "./components/QuotePopup";
import QuotePopupProvider from "./context/QuotePopupProvider";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <QuotePopupProvider>
      <ScrollToTop />

      <div className="flex min-h-screen flex-col bg-cream">
        <Topbar />

        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        <QuotePopup />
      </div>
    </QuotePopupProvider>
  );
}