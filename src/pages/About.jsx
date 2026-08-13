import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck, Target, Users, Gauge, CheckCircle2, X, ZoomIn } from "lucide-react";
import PageHeader from "../components/PageHeader";
import AnimatedSection from "../components/AnimatedSection";
import { stats } from "../data/siteContent";

const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "Every site follows strict PPE, training and inspection protocols before a single brick is laid.",
  },
  {
    icon: Target,
    title: "Precision Delivery",
    desc: "Detailed planning and daily site tracking keep projects on schedule and on budget.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    desc: "We treat every project like our own — clear communication from first site visit to handover.",
  },
  {
    icon: Gauge,
    title: "Quality Materials",
    desc: "Sourced, tested and approved materials so what we build stands for decades.",
  },
];

const highlights = [
  "Licensed & fully insured contractor",
  "Dedicated site safety officer on every project",
  "Transparent, itemised billing — no hidden costs",
  "Fixed-timeline delivery with weekly progress updates",
];

const aboutImage = {
  src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
  alt: "Dure Construction site team at work",
};

export default function About() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div>
      <PageHeader
        eyebrow="About Us"
        title="TWELVE YEARS ON SITE"
        subtitle="Dure Construction Private Limited started as a small residential contractor and has grown into a full-scale construction partner across Maharashtra."
      />

      {/* Story */}
      <AnimatedSection className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-orange">
              Our Story
            </p>
            <h2 className="mb-5 font-display text-4xl text-charcoal md:text-5xl">
              FOUNDED ON DOING THE JOB RIGHT
            </h2>
            <p className="mb-4 leading-relaxed text-concrete">
              Dure Construction Private Limited was built on a simple idea:
              a construction company should be judged by the buildings still
              standing strong years later, not by the pitch. We started with
              small residential contracts and, project by project, earned our
              way into commercial and industrial work.
            </p>
            <p className="mb-6 leading-relaxed text-concrete">
              Today our teams manage everything from site planning to final
              handover — keeping every stakeholder, from the client to the
              site engineer, working off the same clear plan.
            </p>

            <ul className="space-y-2.5">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-charcoal">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange" strokeWidth={2.5} />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Animated image — hover zoom + click to open lightbox popup */}
          <motion.button
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label="View full image"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative aspect-[4/5] overflow-hidden text-left"
          >
            <motion.img
              src={aboutImage.src}
              alt={aboutImage.alt}
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/30" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange">
                <ZoomIn className="h-5 w-5 text-charcoal" />
              </div>
            </div>
          </motion.button>
        </div>
      </AnimatedSection>

      {/* Lightbox popup */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="relative max-h-[85vh] max-w-4xl overflow-hidden"
            >
              <img
                src={aboutImage.src}
                alt={aboutImage.alt}
                className="max-h-[85vh] w-full object-contain"
              />
              <button
                onClick={() => setLightboxOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/70 text-cream backdrop-blur hover:text-orange"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Values */}
      <AnimatedSection className="bg-charcoal py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-orange">
            What We Stand For
          </p>
          <h2 className="mb-12 font-display text-4xl text-cream md:text-5xl">
            OUR VALUES ON EVERY SITE
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <AnimatedSection
                key={v.title}
                delay={i * 0.08}
                className="border border-white/10 p-6 transition-colors hover:border-orange"
              >
                <v.icon className="mb-4 h-8 w-8 text-orange" strokeWidth={1.5} />
                <h3 className="mb-2 font-display text-xl tracking-wide text-cream">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-concrete-light">{v.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Stats */}
      <AnimatedSection className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-orange pl-4 text-left">
              <p className="font-display text-4xl text-charcoal md:text-5xl">{s.value}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-concrete">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}