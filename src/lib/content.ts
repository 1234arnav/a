import {
  Smartphone,
  Battery,
  Plug,
  Volume2,
  MousePointerClick,
  Droplets,
  Stethoscope,
  Apple,
  Wrench,
  Headphones,
  ShoppingBag,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  priceFrom?: string;
};

export const SERVICES: Service[] = [
  {
    slug: "screen-replacement",
    title: "Screen Replacement",
    desc: "Cracked or broken display fixed with high-quality OEM-grade panels for all major brands.",
    icon: Smartphone,
    priceFrom: "₹899",
  },
  {
    slug: "battery-replacement",
    title: "Battery Replacement",
    desc: "Restore your phone's battery life with genuine, long-lasting replacement batteries.",
    icon: Battery,
    priceFrom: "₹699",
  },
  {
    slug: "charging-port-repair",
    title: "Charging Port Repair",
    desc: "Loose or dead charging port? We repair and replace ports for a reliable connection.",
    icon: Plug,
    priceFrom: "₹499",
  },
  {
    slug: "speaker-repair",
    title: "Speaker Repair",
    desc: "Muffled or silent speakers restored to crystal-clear sound quality.",
    icon: Volume2,
    priceFrom: "₹399",
  },
  {
    slug: "button-repair",
    title: "Button Repair",
    desc: "Power, volume and home button repairs for smooth everyday use.",
    icon: MousePointerClick,
    priceFrom: "₹349",
  },
  {
    slug: "water-damage",
    title: "Water Damage Repair",
    desc: "Advanced cleaning and diagnostics to save water-damaged smartphones.",
    icon: Droplets,
    priceFrom: "₹999",
  },
  {
    slug: "diagnostics",
    title: "Smartphone Diagnostics",
    desc: "Free, honest diagnosis of hardware and software issues before any repair.",
    icon: Stethoscope,
    priceFrom: "Free",
  },
  {
    slug: "iphone-diagnostics",
    title: "iPhone Diagnostics",
    desc: "Specialist iPhone diagnostics using proper tools and genuine testing methods.",
    icon: Apple,
    priceFrom: "Free",
  },
  {
    slug: "software",
    title: "Software Troubleshooting",
    desc: "Fix crashes, boot loops, updates, factory resets and OS-level errors.",
    icon: Wrench,
    priceFrom: "₹299",
  },
  {
    slug: "accessories",
    title: "Mobile Accessories",
    desc: "Chargers, cables, earphones, covers, tempered glass and more.",
    icon: Headphones,
  },
  {
    slug: "mobile-sales",
    title: "Mobile Sales",
    desc: "Brand-new and certified pre-owned smartphones at honest, transparent prices.",
    icon: ShoppingBag,
  },
  {
    slug: "cleaning",
    title: "Phone Cleaning & Maintenance",
    desc: "Deep cleaning of speakers, ports and internals to keep your device fresh.",
    icon: Sparkles,
    priceFrom: "₹199",
  },
];

export const BRANDS = [
  "Apple",
  "Samsung",
  "OnePlus",
  "Xiaomi",
  "Vivo",
  "Oppo",
  "Realme",
  "Motorola",
  "Nokia",
  "Google Pixel",
];

export const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "Lodha Casa Rio Resident",
    text: "Got my iPhone 13 screen replaced within 2 hours. Quality is exactly like the original and pricing was very fair. Highly recommend AMS!",
    rating: 5,
  },
  {
    name: "Priya Deshmukh",
    role: "Dombivli",
    text: "Very honest shop. They told me my battery didn't need replacement — just a software fix. Saved me a lot of money.",
    rating: 5,
  },
  {
    name: "Amit Patil",
    role: "Nilaje",
    text: "Best mobile repair near Lodha Elite. Friendly staff, transparent pricing and 3-month warranty on the repair. Fully satisfied.",
    rating: 5,
  },
  {
    name: "Sneha Kulkarni",
    role: "Kalyan",
    text: "My Samsung phone had water damage and I thought it was gone. AMS revived it perfectly. Genuine technicians.",
    rating: 5,
  },
  {
    name: "Vikas Jain",
    role: "Dombivli East",
    text: "Purchased a new phone and accessories here. Great deals, all bills provided, feels trustworthy unlike other local shops.",
    rating: 4,
  },
  {
    name: "Neha Verma",
    role: "Regular Customer",
    text: "Been coming here for 2 years for all my family's phones. Fast service, real parts, and they always explain what's wrong clearly.",
    rating: 5,
  },
];

export const FAQS = [
  {
    q: "How long does a typical repair take?",
    a: "Most screen and battery replacements are completed within 30–90 minutes. Complex repairs like water damage or motherboard work may take 24–48 hours.",
  },
  {
    q: "Do you provide a warranty on repairs?",
    a: "Yes. All repairs at AMS come with a warranty ranging from 1 to 6 months depending on the part and service.",
  },
  {
    q: "Do you use genuine parts?",
    a: "We use OEM-grade and genuine quality parts. We clearly explain part options and pricing before starting any repair.",
  },
  {
    q: "Is diagnosis free?",
    a: "Yes, we offer 100% free honest diagnosis. You only pay if you approve the repair.",
  },
  {
    q: "Can I get same-day repair?",
    a: "Most common repairs like screens, batteries, speakers and charging ports are done same-day.",
  },
  {
    q: "Do you repair iPhones?",
    a: "Absolutely. We specialise in iPhone repairs — from screens and batteries to Face ID and charging issues.",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Bring Your Device",
    desc: "Walk in to our Lodha Casa Rio shop or send us a WhatsApp with the issue.",
  },
  {
    step: "02",
    title: "Free Inspection",
    desc: "Our technicians diagnose the problem and give you a transparent quote.",
  },
  {
    step: "03",
    title: "Expert Repair",
    desc: "Approved repairs are completed using quality parts and proper tools.",
  },
  {
    step: "04",
    title: "Device Ready",
    desc: "Pick up your device fully tested, cleaned, and covered by warranty.",
  },
];
