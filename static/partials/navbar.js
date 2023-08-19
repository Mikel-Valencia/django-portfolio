const navbar = document.querySelector("nav");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
navbar.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    navbar.classList.toggle("sticking", !entries[0].isIntersecting)
});

navObserver.observe(scrollWatcher)