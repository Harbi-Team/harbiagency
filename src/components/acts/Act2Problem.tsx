import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { ACT_LABELS } from "@/lib/constants";

export const Act2Problem = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLParagraphElement>(null);
  const rightTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".act2-label",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      )
        .fromTo(
          ".act2-title-line",
          { opacity: 0, y: 80, rotateX: 45 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .fromTo(
          [leftTextRef.current, rightTextRef.current],
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="act-section bg-transparent"
      id="act2"
    >
      <div className="container mx-auto px-6">
        <span className="act2-label text-section-label block mb-12">
          {ACT_LABELS.act2}
        </span>

        <div ref={titleRef} className="mb-16 perspective-1000">
          <h2 className="act2-title-line text-display-large text-foreground block">
            SESİNİZİ
          </h2>
          <h2 className="act2-title-line text-display-large text-foreground block">
            DUYURAMIYORSANIZ,
          </h2>
          <h2 className="act2-title-line text-display-large text-primary block">
            FISILDAMANIN
          </h2>
          <h2 className="act2-title-line text-display-large text-foreground block">
            ANLAMI NE?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
          <p
            ref={leftTextRef}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Sektörünüzde yüzlerce rakibiniz var. Hepsi aynı şeyi söylüyor, hepsi
            aynı görünüyor. Sizin markanız şu an bir "Görünmez Adam".
          </p>
          <p
            ref={rightTextRef}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Harika bir ürününüz olabilir ama kimse sizi görmüyorsa, aslında
            yoksunuz demektir.
          </p>
        </div>
      </div>
    </section>
  );
};
