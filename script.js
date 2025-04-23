document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");
  
    const revealSection = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
          section.classList.add("visible");
        }
      });
    };
  
    const highlightNav = () => {
      let index = sections.length;
      while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    };
  
    window.addEventListener("scroll", () => {
      revealSection();
      highlightNav();
    });
  
    revealSection();
  
    // Typing animation
    const typingSpan = document.querySelector(".typing");
    const phrases = ["Anshul Sharma", "a Software Engineer", "a Full Stack Developer", "an AI Enthusiast"];
    let phraseIndex = 0, letterIndex = 0;
  
    const type = () => {
      const currentPhrase = phrases[phraseIndex];
      typingSpan.textContent = currentPhrase.slice(0, ++letterIndex);
  
      if (letterIndex === currentPhrase.length) {
        setTimeout(erase, 1500);
      } else {
        setTimeout(type, 100);
      }
    };
  
    const erase = () => {
      const currentPhrase = phrases[phraseIndex];
      typingSpan.textContent = currentPhrase.slice(0, --letterIndex);
  
      if (letterIndex === 0) {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 300);
      } else {
        setTimeout(erase, 50);
      }
    };
  
    type();
  });
  