document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection();
});
