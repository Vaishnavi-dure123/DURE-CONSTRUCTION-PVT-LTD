
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home as HomeIcon,
  Building2,
  Factory,
  HardHat,
  Ruler,
  ClipboardList,
  Check,
  ArrowRight,
  FileSearch,
  PencilRuler,
  Construction,
  KeyRound,
  X,
  ZoomIn,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import AnimatedSection from "../components/AnimatedSection";
import useQuotePopup from "../context/useQuotePopup";

const serviceList = [
  {
    icon: HomeIcon,
    title: "Residential Construction",
    desc: "Independent homes, bungalows and housing societies built with durable materials, transparent costing and honest timelines from foundation to handover.",
    features: [
      "Custom home construction",
      "Housing society / township projects",
      "Structural design & vastu-friendly planning",
      "Turnkey handover with snag-free finishing",
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    desc: "Offices, retail spaces and business parks engineered for scale, footfall and long-term operating efficiency.",
    features: [
      "Corporate offices & IT parks",
      "Retail & showroom fit-outs",
      "Mixed-use commercial complexes",
      "Fire-safety and compliance certification",
    ],
    image: "https://images.unsplash.com/photo-1599995903128-531fc7fb694b?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Factory,
    title: "Industrial & Infrastructure",
    desc: "Warehouses, manufacturing plants and civil infrastructure delivered to strict safety and load-bearing standards.",
    features: [
      "Warehouses & logistics parks",
      "Factory & plant construction",
      "Roads, bridges & precast structures",
      "Heavy-load foundation engineering",
    ],
    image: "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: HardHat,
    title: "Renovation & Fit-Out",
    desc: "Structural upgrades and interior fit-outs that respect the existing build while modernising function and finish.",
    features: [
      "Structural retrofitting & repairs",
      "Interior & exterior renovation",
      "Office and retail fit-outs",
      "Waterproofing & facade restoration",
    ],
    image: "https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: PencilRuler,
    title: "Structural Design & Engineering",
    desc: "In-house structural planning and drawings that balance safety, cost and buildability before a single beam is poured.",
    features: [
      "Architectural & structural drawings",
      "Load & seismic analysis",
      "Material & cost estimation",
      "Government approval documentation",
    ],
    image: "https://images.unsplash.com/photo-1579847188804-ecba0e2ea330?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: ClipboardList,
    title: "Project Management & Consultancy",
    desc: "End-to-end site supervision so clients get one point of accountability from planning through to final delivery.",
    features: [
      "Daily site progress tracking",
      "Vendor & subcontractor coordination",
      "Budget and timeline control",
      "Quality & safety audits",
    ],
    image: "https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?auto=format&fit=crop&w=900&q=80",
  },
];

const process = [
  {
    icon: FileSearch,
    title: "Site Assessment",
    desc: "We visit the site, understand requirements and study feasibility before quoting.",
  },
  {
    icon: PencilRuler,
    title: "Design & Planning",
    desc: "Structural drawings, material selection and a fixed project timeline are finalised.",
  },
  {
    icon: Construction,
    title: "Construction",
    desc: "Work begins on-site with daily supervision, safety checks and progress reports.",
  },
  {
    icon: KeyRound,
    title: "Handover",
    desc: "Final inspection, snag-fixing and documentation before keys are handed over.",
  },
];

export default function Services() {
  const { openPopup } = useQuotePopup();
  const [activeService, setActiveService] = useState(null);

  return (
    <div>
      <PageHeader
        eyebrow="What We Do"
        title="OUR SERVICES"
        subtitle="From the first site visit to final handover — construction services built around your project, not a template."
      />

      {/* ---------------- Service list ---------------- */}
      <AnimatedSection className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="space-y-20">
          {serviceList.map((service, i) => {
            const reversed = i % 2 === 1;
            return (
              <AnimatedSection
                key={service.title}
                className={`grid items-center gap-10 md:grid-cols-2 ${
                  reversed ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveService(service)}
                  className="group relative aspect-[4/3] overflow-hidden text-left"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 transition-colors group-hover:bg-charcoal/30" />
                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/60 text-cream opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                </button>

                <div>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center bg-charcoal">
                    <service.icon className="h-5 w-5 text-orange" />
                  </div>
                  <h2 className="mb-3 font-display text-3xl text-charcoal md:text-4xl">
                    {service.title.toUpperCase()}
                  </h2>
                  <p className="mb-5 leading-relaxed text-concrete">{service.desc}</p>
                  <ul className="space-y-2.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-charcoal">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" strokeWidth={2.5} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </AnimatedSection>

      {/* ---------------- Process ---------------- */}
      <AnimatedSection className="bg-charcoal py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-orange">
            How We Work
          </p>
          <h2 className="mb-12 max-w-xl font-display text-4xl text-cream md:text-5xl">
            FOUR STEPS, ONE POINT OF CONTACT
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <AnimatedSection
                key={step.title}
                delay={i * 0.08}
                className="relative border border-white/10 p-6 transition-colors hover:border-orange"
              >
                <span className="mb-4 block font-mono text-xs text-orange">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <step.icon className="mb-4 h-7 w-7 text-orange" strokeWidth={1.5} />
                <h3 className="mb-2 font-display text-xl tracking-wide text-cream">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-concrete-light">{step.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ---------------- CTA ---------------- */}
      <AnimatedSection className="relative overflow-hidden bg-cream py-24 text-center">
        <div className="relative mx-auto max-w-2xl px-5">
          <h2 className="mb-4 font-display text-4xl text-charcoal md:text-5xl">
            NOT SURE WHICH SERVICE FITS?
          </h2>
          <p className="mb-8 text-concrete">
            Tell us about your site and requirements — we'll recommend the
            right scope and a clear estimate.
          </p>
          <button
            onClick={openPopup}
            className="inline-flex items-center gap-2 bg-orange px-8 py-4 font-body text-sm font-bold uppercase tracking-wide text-charcoal transition-transform hover:-translate-y-0.5 hover:bg-orange-dark hover:text-cream"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </AnimatedSection>

      {/* ---------------- Animated zoom popup for service image ---------------- */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveService(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 p-4 backdrop-blur-sm"
          >
            <motion.div
              key="popup"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.75 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden bg-charcoal"
            >
              <img
                src={activeService.image}
                alt={activeService.title}
                className="max-h-[65vh] w-full object-cover"
              />

              <div className="flex items-center gap-3 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-orange/10">
                  <activeService.icon className="h-5 w-5 text-orange" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-orange">
                    Our Service
                  </p>
                  <p className="font-display text-xl text-cream">{activeService.title}</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveService(null)}
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
