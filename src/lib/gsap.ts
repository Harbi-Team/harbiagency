import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Default animation settings
export const defaultEase = "power3.out";
export const defaultDuration = 1;

// Scroll animation defaults
export const scrollTriggerDefaults = {
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play none none reverse",
};

// Export gsap and ScrollTrigger
export { gsap, ScrollTrigger };
