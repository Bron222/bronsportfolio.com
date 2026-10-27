// Mark that JavaScript is running, so scroll-in animations only apply when they can finish
document.documentElement.classList.add("js");

// Build the email link here instead of in the HTML, so spam bots can't read it easily
(function setUpEmailLinks() {
    const address = ["bronwhitten", "gmail.com"].join("@");
    document.querySelectorAll(".js-email").forEach((link) => {
        link.href = "mailto:" + address;
        link.removeAttribute("target");
    });
    document.querySelectorAll(".js-email-text").forEach((el) => {
        el.textContent = address;
    });
})();

// Keep the footer year current
document.getElementById("year").textContent = new Date().getFullYear();

// Navigation: background on scroll, mobile menu, and active-section highlight
(function setUpNav() {
    const nav = document.querySelector(".nav");
    const toggle = document.querySelector(".nav__toggle");
    const links = document.getElementById("nav-links");

    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const setMenu = (open) => {
        links.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };

    toggle.addEventListener("click", () => setMenu(!links.classList.contains("is-open")));
    links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") setMenu(false);
    });

    if (!("IntersectionObserver" in window)) return;

    const navLinks = new Map(
        [...links.querySelectorAll('a[href^="#"]')].map((a) => [a.getAttribute("href").slice(1), a])
    );
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                navLinks.forEach((a) => a.classList.remove("is-active"));
                navLinks.get(entry.target.id)?.classList.add("is-active");
            });
        },
        { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach((s) => sectionObserver.observe(s));
})();

// Fade sections in as they scroll into view
(function setUpReveal() {
    const items = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
        items.forEach((el) => el.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    // Stagger items that sit side by side so they appear one after another
    items.forEach((el) => {
        const siblings = [...el.parentElement.children].filter((c) => c.classList.contains("reveal"));
        el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 4) * 80}ms`;
        observer.observe(el);
    });
})();

// Cards glow where the mouse is
document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
});
