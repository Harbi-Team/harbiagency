import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { ACT_LABELS, BATTLE_PLAN } from "@/lib/constants";

export const Act6Plan = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".act6-title",
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          ".act6-desc",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".plan-step",
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="act-section bg-transparent py-24"
      id="act6"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <div>
            <h2 className="act6-title text-display-medium text-primary mb-6">
              SAVAŞ PLANI
            </h2>
            <p className="act6-desc text-muted-foreground text-lg">
              Şansa yer yok. Sadece veri, strateji ve kusursuz infaz.
            </p>
          </div>

          {/* Right side - Steps */}
          <div className="space-y-8">
            {BATTLE_PLAN.map((item, index) => (
              <div
                key={item.step}
                className="plan-step flex gap-6 items-start border-b border-border pb-8 last:border-b-0"
              >
                <span
                  className={`text-display-small ${
                    index === 2 ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.step}
                </span>
                <div>
                  <h3
                    className={`text-display-small mb-2 ${
                      index === 2 ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
