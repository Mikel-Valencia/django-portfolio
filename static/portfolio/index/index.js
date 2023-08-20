const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
const path = document.getElementById("splash-screen-logo-path");

// tl.to(path, { Animation: "none", delay: 1.75 });
// tl.to(".splash-screen", { y: "-100%", duration: .8, delay: 1.9 });
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: .3, delay: 2.7 });
tl.fromTo(".intro", { opacity: 0 }, { opacity: 1, duration: .3 }, "-=.3");
tl.fromTo(".svg-separator", { opacity: 0 }, { opacity: 1, duration: .3 });
tl.fromTo(".description", { opacity: 0 }, { opacity: 1, duration: .3 });
tl.fromTo(".social-links", { opacity: 0 }, { opacity: 1, duration: .3 });