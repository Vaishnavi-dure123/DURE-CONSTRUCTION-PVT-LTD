

import { NavLink } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream">
      <div className="tick-divider" />
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 md:grid-cols-4 md:px-8">
        <div>
          <img
            src="/logo.png"
            alt="Dure Construction Pvt. Ltd."
            className="mb-2 h-14 w-auto object-contain"
          />
          <p className="max-w-xs text-sm leading-relaxed text-concrete-light">
            Dure Construction Private Limited builds residential, commercial
            and industrial spaces engineered for the long run.
          </p>
        </div>

        <div>
          <h4 className="mb-2 font-display text-lg tracking-wide text-orange">
            NAVIGATE
          </h4>
          <ul className="space-y-1.5 text-sm text-concrete-light">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className="transition-colors hover:text-orange">
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 font-display text-lg tracking-wide text-orange">
            SERVICES
          </h4>
          <ul className="space-y-1.5 text-sm text-concrete-light">
            <li>Residential Construction</li>
            <li>Commercial Projects</li>
            <li>Industrial & Infrastructure</li>
            <li>Renovation & Fit-Out</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2 font-display text-lg tracking-wide text-orange">
            CONTACT
          </h4>
          <ul className="space-y-2 text-sm text-concrete-light">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
              <a
                href="https://www.google.com/maps?q=18.380917,76.576833"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-orange"
              >
                Shop No.1, Kava Road, behind Mankari Petrolpump, Durga Devi Chowk, Patel Nagar, Latur, Maharashtra 413512
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-orange" />
              <a href="tel:+919892491708" className="transition-colors hover:text-orange">
                +91 9892491708
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-orange" />
              <a href="mailto:dureconstruction8315@gmail.com" className="transition-colors hover:text-orange">
                dureconstruction8315@gmail.com
              </a>
            </li>
          </ul>
          <div className="mt-3 flex gap-2.5">
            {[Linkedin, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-8 w-8 items-center justify-center border border-concrete/40 text-concrete-light transition-colors hover:border-orange hover:text-orange"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-3 text-center font-mono text-xs text-concrete md:px-8">
        © {year} Dure Construction Private Limited. All rights reserved.
      </div>
    </footer>
  );
}