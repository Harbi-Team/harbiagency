const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Shared Animation Helper
const initPart1Animations = (tl) => {
  tl.to(".rotate-div", { rotate: -15, scale: 0.8 }, "a")
    .to("#row-div-2", { marginTop: "5%" }, "a")
    .to("#row-div-3", { marginTop: "-2%" }, "a")
    .to("#row-div-4", { marginTop: "-8%" }, "a")
    .to("#row-div-5", { marginTop: "-10%" }, "a")
    .to(".overlay-div h1", { opacity: "1", delay: 0.2 }, "a")
    .to(".overlay-div", { backgroundColor: "#000000b4" }, "a")
    .to(".scrolling", { width: "100%" }, "a");
};

let mm = gsap.matchMedia();

// DESKTOP ANIMATIONS (min-width: 601px)
mm.add("(min-width: 601px)", () => {
  // Part 1 Desktop
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".part-1",
      start: "50% 50%",
      end: "250% 50%",
      scrub: true,
      pin: true,
    },
  });
  initPart1Animations(tl);

  // Part 4
  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".part-4",
      start: "50% 50%",
      end: "200% 50%",
      pin: true,
      scrub: 1,
    },
  });
  tl4
    .to(".c-one", { marginTop: "-25%", opacity: "1" }, "sct-1")
    .to(".c-two", { opacity: "1" }, "sct-2")
    .to(".c-one", { marginTop: "-100", opacity: "0" }, "sct-2")
    .to(".c-three", { opacity: "1" }, "sct-3")
    .to(".c-two", { opacity: "0" }, "sct-3")
    .to(".c-one", { marginTop: "-180%" }, "sct-3")
    .to(".c-one", { marginTop: "-230%" }, "sct-4")
    .to(".c-three", { opacity: "0" }, "sct-4")
    .to(".cir-part-4", { marginLeft: "100%", rotate: 360 }, "sct-4");

  // Part 5 Text Reveal
  let tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".part-5",
      start: "20% 50%",
      end: "100% 50%",
      scrub: 1,
    },
  });
  tl5
    .to(".part-5 .text-area-hover h1", { clipPath: "inset(0 0% 0 0)" })
    .to(".part-5 .text-area-hover h2", {
      delay: -0.4,
      clipPath: "inset(0 0% 0 0)",
    });

  // Part 6 Rounded Div
  let tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".part-6",
      start: "0% 70%",
      end: "15% 50%",
      scrub: 1,
    },
  });
  tl6.to(".rounded-div-wrapper-6", { height: "0%", marginTop: 0 });

  // Part 6 Horizontal Scroll
  let tl6Content = gsap.timeline({
    scrollTrigger: {
      trigger: ".part-6",
      start: "0% 0%",
      end: "200% 0%",
      pin: true,
      scrub: 1,
    },
  });
  tl6Content.to(".brand-scroll-wrapper", { xPercent: -66.66, ease: "none" });

  // Part 7 Footer
  let tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: ".part-7",
      start: "50% 50%",
      end: "300% 50%",
      pin: true,
      scrub: 1,
    },
  });
  tl7
    .to("#demo", { bottom: "7%" })
    .to(".our-work-txt-div", { height: "60vh" }, "height")
    .to(".our-work-txt", { height: "60vh" }, "height")
    .to("#our", { left: "15%", xPercent: 0 }, "height")
    .to("#work", { right: "15%", xPercent: 0 }, "height")
    .to(".scroll-img", { marginTop: "-300%" });

  return () => {
    // Optional cleanup
  };
});

// MOBILE ANIMATIONS (max-width: 600px)
mm.add("(max-width: 600px)", () => {
  // Part 1 Mobile - Start earlier and pin with transform
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".part-1",
      start: "top top",
      end: "250% 50%",
      scrub: true,
      pin: true,
      pinType: "transform", // Helps with mobile address bar jitter
    },
  });
  initPart1Animations(tl);

  // Mobile Part 5 Text Reveal (Simple version)
  let tl5Mobile = gsap.timeline({
    scrollTrigger: {
      trigger: ".part-5",
      start: "top 80%",
      end: "bottom 80%",
      scrub: 1,
    },
  });
  tl5Mobile
    .to(".part-5 .text-area-hover h1", { clipPath: "inset(0 0% 0 0)" })
    .to(".part-5 .text-area-hover h2", {
      delay: -0.4,
      clipPath: "inset(0 0% 0 0)",
    });

  // Part 6 Rounded Div (Simple)
  let tl6Mobile = gsap.timeline({
    scrollTrigger: {
      trigger: ".part-6",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  });
  tl6Mobile.to(".rounded-div-wrapper-6", { height: "0%", marginTop: 0 });

  // Mobile Part 7 Footer
  let tl7Mobile = gsap.timeline({
    scrollTrigger: {
      trigger: ".part-7",
      start: "50% 50%", // Center trigger like desktop
      end: "300% 50%", // Longer scroll distance for effect
      pin: true,
      scrub: 1,
    },
  });
  tl7Mobile
    .to("#demo", { bottom: "15%" }) // Adjust button pos for mobile
    .to(".our-work-txt-div", { height: "60vh" }, "height")
    .to(".our-work-txt", { height: "60vh" }, "height")
    .to("#our", { left: "15%", xPercent: 0 }, "height")
    .to("#work", { right: "15%", xPercent: 0 }, "height")
    .to(".scroll-img", { marginTop: "-300%" });

  // Hide Logo on Scroll Down (Mobile)
  ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
      if (self.direction === 1 && self.scroll() > 50) {
        // Scrolling Down & past top
        gsap.to(".lft-nav", {
          yPercent: -200,
          opacity: 0,
          duration: 0.3,
          overwrite: true,
        });
      } else {
        // Scrolling Up or at top
        gsap.to(".lft-nav", {
          yPercent: 0,
          opacity: 1,
          duration: 0.3,
          overwrite: true,
        });
      }
    },
  });
});

// SHARED ANIMATIONS (Always Active)
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-2",
    start: "0% 70%",
    end: "50% 50%",
    scrub: true,
  },
});

tl2.to(".rounded-div-wrapper", {
  height: 0,
  marginTop: 0,
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".content-2",
    start: "20% 50%",
    end: "100% 50%",
    scrub: 1,
  },
});
tl3
  .to(".content-2 .text-area-hover h1", { clipPath: "inset(0 0% 0 0)" })
  .to(".content-2 .text-area-hover h2", {
    delay: -0.4,
    clipPath: "inset(0 0% 0 0)",
  });

// Team Section - Responsive Animations (Desktop Only)
mm.add("(min-width: 601px)", () => {
  console.log("Initializing Desktop Team Animations");

  // 1. Staggered Entry
  gsap.from(".team-card", {
    scrollTrigger: {
      trigger: ".part-team",
      start: "top 75%",
      end: "bottom 100%",
      toggleActions: "play none none reverse",
    },
    y: 100,
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    ease: "power3.out",
  });

  // 2. Parallax Image Effect
  gsap.utils.toArray(".team-img-box img").forEach((img) => {
    gsap.to(img, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: img.closest(".team-card"),
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  // 3. 3D Tilt Hover Effect
  const teamCards = document.querySelectorAll(".team-card");

  // Define listeners
  const listeners = [];

  teamCards.forEach((card) => {
    const onMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -15;
      const rotateY = ((x - centerX) / centerX) * 15;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        scale: 1.05,
        transformPerspective: 1000,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    listeners.push({ card, onMove, onLeave });
  });

  // Cleanup function
  return () => {
    listeners.forEach(({ card, onMove, onLeave }) => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    });
    // Optional: reset props if needed when switching to mobile handled by GSAP matchMedia revert mostly
  };
});
