import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, HardHat, CheckCircle2 } from "lucide-react";
import useQuotePopup from "../context/useQuotePopup";

const initialForm = { name: "", phone: "", projectType: "Residential", message: "" };

export default function QuotePopup() {
  const { isOpen, closePopup } = useQuotePopup();
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  // Lock background scroll while the popup is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset to a clean form each time the popup is closed
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setForm(initialForm);
        setSubmitted(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook this up to your backend / email service of choice.
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePopup}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Request a quote"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 24 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="relative w-full max-w-md overflow-hidden bg-cream shadow-2xl"
          >
            <div className="tick-divider" />
            <button
              onClick={closePopup}
              aria-label="Close"
              className="absolute right-4 top-5 z-10 text-charcoal/60 transition-colors hover:text-orange"
            >
              <X className="h-5 w-5" />
            </button>

            {!submitted ? (
              <div className="p-7">
                <div className="mb-5 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-orange">
                    <HardHat className="h-5 w-5 text-charcoal" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-display text-2xl text-charcoal">
                    REQUEST A QUOTE
                  </h3>
                </div>
                <p className="mb-5 text-sm text-concrete">
                  Tell us about your project — our team responds within one
                  business day.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-charcoal/70">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full border border-concrete-light bg-white px-3 py-2.5 text-sm text-charcoal outline-none focus:border-orange"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-charcoal/70">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 9892491708"
                      className="w-full border border-concrete-light bg-white px-3 py-2.5 text-sm text-charcoal outline-none focus:border-orange"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-charcoal/70">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="w-full border border-concrete-light bg-white px-3 py-2.5 text-sm text-charcoal outline-none focus:border-orange"
                    >
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Industrial</option>
                      <option>Renovation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-charcoal/70">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Location, approximate size, timeline..."
                      className="w-full resize-none border border-concrete-light bg-white px-3 py-2.5 text-sm text-charcoal outline-none focus:border-orange"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full bg-orange py-3 font-body text-sm font-bold uppercase tracking-wide text-charcoal transition-colors hover:bg-orange-dark hover:text-cream"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-3 px-7 py-16 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                >
                  <CheckCircle2 className="h-14 w-14 text-orange" strokeWidth={1.5} />
                </motion.div>
                <h3 className="font-display text-2xl text-charcoal">
                  REQUEST RECEIVED
                </h3>
                <p className="max-w-xs text-sm text-concrete">
                  Thanks, {form.name.split(" ")[0] || "there"}. Our team will
                  call you at {form.phone} within one business day.
                </p>
                <button
                  onClick={closePopup}
                  className="mt-3 bg-charcoal px-6 py-2.5 font-body text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:bg-orange hover:text-charcoal"
                >
                  Close
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
