// Initiallize Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// // Back to top button
// const backToTopButton = document.querySelector(".back-to-top")
// const buttonObserver = new IntersectionObserver((entry) => {
//     entry.classList.toggle("back-to-top-show", entry.isIntersecting)
// }, {
//     rootMargin: "-300px",
// });

// buttonObserver.observe(backToTopButton)

// Scroll animations
const headerObserverElements = document.querySelectorAll("header .scroll-observe")
const headerScrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("scroll-observe-show", entry.isIntersecting)
        if (entry.isIntersecting) {
            headerScrollObserver.unobserve(entry.target)
        }
    });
});

headerObserverElements.forEach(elem => {
    headerScrollObserver.observe(elem)
});

const observedElements = document.querySelectorAll("section .scroll-observe")
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("scroll-observe-show", entry.isIntersecting)
        if (entry.isIntersecting) {
            scrollObserver.unobserve(entry.target)
        }
    });
}, {
    rootMargin: "-50px",
});

observedElements.forEach(elem => {
    scrollObserver.observe(elem)
});


// Gmail copy to clipboard
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