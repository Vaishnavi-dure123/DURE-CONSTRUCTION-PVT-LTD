import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2, X, UserRound } from "lucide-react";
import PageHeader from "../components/PageHeader";
import AnimatedSection from "../components/AnimatedSection";

const infoCards = [
  {
    icon: MapPin,
    title: "Site Office",
    lines: ["Shop No.1, Kava Road, behind Mankari Petrolpump, Durga Devi Chowk, Patel Nagar, Latur, Maharashtra 413512"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 9892491708", "+91 9096333733"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["dureconstruction8315@gmail.com", "shrirangdure123@gmail.com"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Mon – Sat: 9:00 AM – 6:30 PM", "Sunday: Closed"],
  },
];

const teamContacts = [
  { name: "Shrirang Dure", title: "Civil Engineer, B.E. Civil" },
  { name: "Pandurang Dure", title: "B.E Computer Science" },
];

const initialForm = { name: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook this up to your backend / email service of choice.
    setSubmitted(true);
  };

  const closePopup = () => {
    setSubmitted(false);
    setForm(initialForm);
  };

  return (
    <div>
      <PageHeader
        eyebrow="Get In Touch"
        title="LET'S TALK ABOUT YOUR SITE"
        subtitle="Reach out with your project scope and we'll respond with next steps within one business day."
      />

      {/* Info cards */}
      <AnimatedSection className="mx-auto max-w-7xl px-5 pt-16 md:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((c, i) => (
            <AnimatedSection
              key={c.title}
              delay={i * 0.08}
              className="border border-concrete-light bg-white p-6 transition-colors hover:border-orange"
            >
              <c.icon className="mb-4 h-7 w-7 text-orange" strokeWidth={1.5} />
              <h3 className="mb-2 font-display text-lg tracking-wide text-charcoal">
                {c.title}
              </h3>
              {c.lines.map((line) => (
                <p key={line} className="text-sm text-concrete">
                  {line}
                </p>
              ))}
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      {/* Key contacts / team */}
      <AnimatedSection className="mx-auto max-w-7xl px-5 pt-10 md:px-8">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-orange">
          Key Contacts
        </p>
        <h2 className="mb-6 font-display text-3xl text-charcoal">OUR TEAM</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {teamContacts.map((person, i) => (
            <AnimatedSection
              key={person.name}
              delay={i * 0.08}
              className="flex items-center gap-4 border border-concrete-light bg-white p-6 transition-colors hover:border-orange"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-charcoal">
                <UserRound className="h-6 w-6 text-orange" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-xl tracking-wide text-charcoal">
                  {person.name}
                </h3>
                {person.title && (
                  <p className="text-sm text-concrete">{person.title}</p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      {/* Form + map */}
      <AnimatedSection className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <div className="relative border border-concrete-light bg-white p-8">
            <h2 className="mb-6 font-display text-3xl text-charcoal">
              SEND A MESSAGE
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-charcoal/70">
                    Full Name
                  </label>
                  <input
                    id="c-name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-concrete-light bg-white px-3 py-2.5 text-sm outline-none focus:border-orange"
                  />
                </div>
                <div>
                  <label htmlFor="c-phone" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-charcoal/70">
                    Phone
                  </label>
                  <input
                    id="c-phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-concrete-light bg-white px-3 py-2.5 text-sm outline-none focus:border-orange"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="c-email" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-charcoal/70">
                  Email
                </label>
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-concrete-light bg-white px-3 py-2.5 text-sm outline-none focus:border-orange"
                />
              </div>

              <div>
                <label htmlFor="c-subject" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-charcoal/70">
                  Subject
                </label>
                <input
                  id="c-subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="e.g. New residential project enquiry"
                  className="w-full border border-concrete-light bg-white px-3 py-2.5 text-sm outline-none focus:border-orange"
                />
              </div>

              <div>
                <label htmlFor="c-message" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-charcoal/70">
                  Message
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-none border border-concrete-light bg-white px-3 py-2.5 text-sm outline-none focus:border-orange"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange py-3.5 font-body text-sm font-bold uppercase tracking-wide text-charcoal transition-colors hover:bg-orange-dark hover:text-cream"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map — exact site coordinates: 18°22'51.3"N 76°34'36.6"E */}
          <div className="min-h-[380px] overflow-hidden border border-concrete-light">
            <iframe
              title="Dure Construction location"
              className="h-full min-h-[380px] w-full"
              style={{ border: 0 }}
              loading="lazy"
              src="https://www.google.com/maps?q=18.380917,76.576833&output=embed"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Animated zoom popup on submit */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closePopup}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/60 backdrop-blur-sm px-5"
          >
            <motion.div
              key="popup"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="relative w-full max-w-sm border border-concrete-light bg-white p-8 text-center shadow-2xl"
            >
              <button
                onClick={closePopup}
                aria-label="Close"
                className="absolute right-3 top-3 text-concrete transition-colors hover:text-orange"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>

              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 18 }}
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange/10"
              >
                <CheckCircle2 className="h-9 w-9 text-orange" strokeWidth={1.5} />
              </motion.div>

              <h3 className="mb-2 font-display text-2xl text-charcoal">MESSAGE SENT</h3>
              <p className="mx-auto max-w-xs text-sm text-concrete">
                Thanks for reaching out — our team will get back to you shortly.
              </p>

              <button
                onClick={closePopup}
                className="mt-6 w-full bg-orange py-3 font-body text-sm font-bold uppercase tracking-wide text-charcoal transition-colors hover:bg-orange-dark hover:text-cream"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}