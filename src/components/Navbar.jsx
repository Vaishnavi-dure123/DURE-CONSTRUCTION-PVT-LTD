
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall } from "lucide-react";
import useQuotePopup from "../context/useQuotePopup";
import TopBar from "./TopBar";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

function HamburgerIcon({ open }) {
  const bar = "absolute left-0 h-0.5 w-7 rounded-full bg-cream";
  return (
    <div className="relative h-5 w-7">
      <motion.span
        className={bar}
        animate={open ? { top: "50%", rotate: 45, y: "-50%" } : { top: 0, rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      />
      <motion.span
        className={`${bar} top-1/2 -translate-y-1/2`}
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className={bar}
        animate={open ? { top: "50%", rotate: -45, y: "-50%" } : { top: "100%", rotate: 0, y: "-100%" }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openPopup } = useQuotePopup();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const linkClass = ({ isActive }) =>
    `font-body text-sm font-semibold tracking-wide uppercase transition-colors ${
      isActive ? "text-orange" : "text-cream/90 hover:text-orange"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `font-display text-3xl tracking-wide transition-colors ${
      isActive ? "text-orange" : "text-cream hover:text-orange"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-charcoal/95 backdrop-blur shadow-lg shadow-black/20"
          : "bg-charcoal/40 backdrop-blur-sm"
      }`}
    >
      <TopBar />

      <div className="tick-divider absolute bottom-0 left-0" />
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-2 md:px-8">
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <img
            src="/logo.png"
            alt="Dure Construction Pvt. Ltd."
            className="h-14 w-auto object-contain md:h-16"
          />
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={openPopup}
            className="flex items-center gap-2 bg-orange px-5 py-2.5 font-body text-sm font-bold uppercase tracking-wide text-charcoal transition-transform hover:-translate-y-0.5 hover:bg-orange-dark hover:text-cream"
          >
            <PhoneCall className="h-4 w-4" />
            Get a Quote
          </button>
        </div>

        <button
          className="relative z-10 flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden bg-charcoal md:hidden"
          >
            <div className="flex h-[calc(100vh-1px)] flex-col justify-center gap-6 px-8 pb-24">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3, delay: 0.08 + i * 0.06 }}
                >
                  <NavLink
                    to={link.to}
                    className={mobileLinkClass}
                    end={link.to === "/"}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              <motion.a
                href="tel:+919892491708"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3, delay: 0.08 + navLinks.length * 0.06 }}
                className="flex items-center gap-2 font-mono text-sm text-concrete-light"
              >
                <PhoneCall className="h-4 w-4 text-orange" />
                +91 9892491708
              </motion.a>

              <motion.button
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3, delay: 0.08 + (navLinks.length + 1) * 0.06 }}
                onClick={() => {
                  setMenuOpen(false);
                  openPopup();
                }}
                className="mt-2 flex items-center justify-center gap-2 bg-orange px-5 py-3.5 font-body text-sm font-bold uppercase tracking-wide text-charcoal"
              >
                <PhoneCall className="h-4 w-4" />
                Get a Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}