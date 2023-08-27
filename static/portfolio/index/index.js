// Initiallize Bootstrap tooltips.
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
const path = document.getElementById("splash-screen-logo-path");

// tl.to(path, { Animation: "none", delay: 1.75 });
// tl.to(".splash-screen", { y: "-100%", duration: .8, delay: 1.9 });
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: .3, delay: 2.7 });
tl.fromTo(".intro", { opacity: 0 }, { opacity: 1, duration: .3 }, "-=.3");
tl.fromTo(".svg-separator", { opacity: 0 }, { opacity: 1, duration: .3 });
tl.fromTo(".description", { opacity: 0 }, { opacity: 1, duration: .3 });
tl.fromTo(".social-links", { opacity: 0 }, { opacity: 1, duration: .3 });

// Gmail copy to clipboard.
const gmailBtn = document.getElementById("gmail-btn");

function copyGmail() {

    navigator.permissions.query({ name: "write-on-clipboard" }).then((result) => {

        if (result.state == "granted" || result.state == "prompt") {

            var gmail = document.getElementById("gmail").innerHTML;
            
            navigator.clipboard.writeText(gmail).then(() => {
                navigator.clipboard.writeText(gmail);
            },() => {
                console.error('Failed to copy: ', err);
            });

        }

    });

}