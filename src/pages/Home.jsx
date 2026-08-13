


import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Home as HomeIcon, Building2, Factory, HardHat, ArrowRight, X } from "lucide-react";
import HeroSlider from "../components/HeroSlider";
import AnimatedSection from "../components/AnimatedSection";
import useQuotePopup from "../context/useQuotePopup";
import { services, stats, galleryImages } from "../data/siteContent";

const icons = { Home: HomeIcon, Building2, Factory, HardHat };

export default function Home() {
  const { openPopup } = useQuotePopup();
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div>
      {/* ---------------- Hero ---------------- */}
      <section className="relative h-[92vh] min-h-[560px] w-full">
        <HeroSlider />
        <div className="absolute inset-0 z-[5] flex items-center">
          <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-orange"
            >
              Dure Construction Private Limited
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-2xl font-display text-6xl leading-[0.95] text-cream md:text-8xl"
            >
              BUILDING
              <br />
              TOMORROW,
              <br />
              <span className="text-orange">TODAY.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-md text-concrete-light"
            >
              From foundation to finish — residential, commercial and
              industrial construction delivered with precision, safety and
              zero shortcuts.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={openPopup}
                className="flex items-center gap-2 bg-orange px-6 py-3.5 font-body text-sm font-bold uppercase tracking-wide text-charcoal transition-transform hover:-translate-y-0.5 hover:bg-orange-dark hover:text-cream"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/gallery"
                className="flex items-center gap-2 border border-cream/40 px-6 py-3.5 font-body text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:border-orange hover:text-orange"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- Stats strip ---------------- */}
      <AnimatedSection className="bg-charcoal py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 md:grid-cols-4 md:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="font-display text-4xl text-orange md:text-5xl">{s.value}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-concrete-light">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* ---------------- Services ---------------- */}
      <AnimatedSection className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-orange">
          What We Do
        </p>
        <h2 className="mb-12 max-w-xl font-display text-4xl text-charcoal md:text-5xl">
          SERVICES BUILT AROUND YOUR PROJECT
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? HardHat;
            return (
              <AnimatedSection
                key={service.title}
                delay={i * 0.08}
                className="group border border-concrete-light bg-white p-6 transition-colors hover:border-orange"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center bg-charcoal transition-colors group-hover:bg-orange">
                  <Icon className="h-5 w-5 text-orange transition-colors group-hover:text-charcoal" />
                </div>
                <h3 className="mb-2 font-display text-xl tracking-wide text-charcoal">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-concrete">{service.desc}</p>
              </AnimatedSection>
            );
          })}
        </div>
      </AnimatedSection>

      {/* ---------------- Gallery preview ---------------- */}
      <AnimatedSection className="bg-steel/5 py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-orange">
                Our Work
              </p>
              <h2 className="font-display text-4xl text-charcoal md:text-5xl">
                RECENT SITES
              </h2>
            </div>
            <Link
              to="/gallery"
              className="flex items-center gap-2 font-body text-sm font-bold uppercase tracking-wide text-charcoal transition-colors hover:text-orange"
            >
              Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryImages.slice(0, 4).map((img, i) => (
              <motion.button
                key={img.src}
                type="button"
                onClick={() => setActiveImage(img)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative aspect-[3/4] overflow-hidden text-left"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/80 via-transparent to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="font-body text-xs font-semibold text-cream">{img.title}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ---------------- CTA ---------------- */}
      <AnimatedSection className="relative overflow-hidden bg-charcoal py-24 text-center">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 14px)",
          }}
        />
        <div className="relative mx-auto max-w-2xl px-5">
          <h2 className="mb-4 font-display text-4xl text-cream md:text-5xl">
            HAVE A SITE IN MIND?
          </h2>
          <p className="mb-8 text-concrete-light">
            Tell us the scope and timeline — we'll get back with a clear,
            no-surprises estimate.
          </p>
          <button
            onClick={openPopup}
            className="bg-orange px-8 py-4 font-body text-sm font-bold uppercase tracking-wide text-charcoal transition-transform hover:-translate-y-0.5 hover:bg-orange-dark hover:text-cream"
          >
            Request a Free Estimate
          </button>
        </div>
      </AnimatedSection>

      {/* ---------------- Animated zoom popup for gallery preview ---------------- */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 p-4 backdrop-blur-sm"
          >
            <motion.div
              key="popup"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.75 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-hidden bg-charcoal"
            >
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="max-h-[70vh] w-full object-cover"
              />
              <div className="p-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-orange">
                  {activeImage.category}
                </p>
                <p className="font-display text-xl text-cream">{activeImage.title}</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveImage(null)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/70 text-cream backdrop-blur hover:text-orange"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}