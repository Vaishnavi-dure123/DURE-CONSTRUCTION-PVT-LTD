import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import PageHeader from "../components/PageHeader";
import AnimatedSection from "../components/AnimatedSection";
import { galleryImages } from "../data/siteContent";

const categories = ["All", "Residential", "Commercial", "Industrial", "Infrastructure"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null); // index into filtered list

  const filtered = useMemo(
    () =>
      filter === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === filter),
    [filter]
  );

  const closeLightbox = () => setActiveIndex(null);
  const showNext = () => setActiveIndex((i) => (i + 1) % filtered.length);
  const showPrev = () => setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);

  return (
    <div>
      <PageHeader
        eyebrow="Our Work"
        title="PROJECT GALLERY"
        subtitle="A look at sites we've delivered across residential, commercial, industrial and infrastructure work."
      />

      <AnimatedSection className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        {/* Filter chips */}
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`border px-4 py-2 font-body text-xs font-bold uppercase tracking-wide transition-colors ${
                filter === cat
                  ? "border-orange bg-orange text-charcoal"
                  : "border-concrete-light text-concrete hover:border-orange hover:text-orange"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.button
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                onClick={() => setActiveIndex(i)}
                className="group relative aspect-[4/3] overflow-hidden text-left"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-orange">
                    {img.category}
                  </p>
                  <p className="font-body text-sm font-semibold text-cream">{img.title}</p>
                </div>
                <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-charcoal/60 text-cream opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </AnimatedSection>

      {/* Lightbox popup */}
      <AnimatePresence>
        {activeIndex !== null && filtered[activeIndex] && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden bg-charcoal"
            >
              <img
                src={filtered[activeIndex].src}
                alt={filtered[activeIndex].title}
                className="max-h-[70vh] w-full object-cover"
              />
              <div className="flex items-center justify-between p-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-orange">
                    {filtered[activeIndex].category}
                  </p>
                  <p className="font-display text-xl text-cream">
                    {filtered[activeIndex].title}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={showPrev}
                    aria-label="Previous image"
                    className="flex h-9 w-9 items-center justify-center border border-cream/30 text-cream hover:border-orange hover:text-orange"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={showNext}
                    aria-label="Next image"
                    className="flex h-9 w-9 items-center justify-center border border-cream/30 text-cream hover:border-orange hover:text-orange"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <button
                onClick={closeLightbox}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/70 text-cream backdrop-blur hover:text-orange"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
