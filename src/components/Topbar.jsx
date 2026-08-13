import { Phone, Mail, HardHat } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-charcoal-light/80 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 md:px-8">
        <div className="flex items-center gap-2">
          <HardHat className="h-3.5 w-3.5 text-orange" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-concrete-light">
            DURE Construction PVT LTD
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="tel:+919892491708"
            className="flex items-center gap-1.5 font-mono text-[11px] text-concrete-light transition-colors hover:text-orange"
          >
            <Phone className="h-3.5 w-3.5 text-orange" />
            +91 9892491708
          </a>
          <a
            href="mailto:info@dureconstruction.com"
            className="flex items-center gap-1.5 font-mono text-[11px] text-concrete-light transition-colors hover:text-orange"
          >
            <Mail className="h-3.5 w-3.5 text-orange" />
        dureconstruction8315@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}