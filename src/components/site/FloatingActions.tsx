import { MessageCircle, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={BUSINESS.waLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="animate-pulse-ring grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.62_0.17_152)] text-white shadow-lg transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" strokeWidth={2.4} />
      </a>
      <a
        href={BUSINESS.telLink}
        aria-label="Call now"
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition-transform hover:scale-110"
      >
        <Phone className="h-6 w-6" strokeWidth={2.4} />
      </a>
    </div>
  );
}
