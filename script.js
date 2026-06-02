// Resume download filename: 다운받은날짜_이력서_조수빈
const resumeBtn = document.getElementById('resume-dl');
if (resumeBtn) {
  resumeBtn.addEventListener('click', function () {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    this.download = `${yyyy}${mm}${dd}_이력서_조수빈.pdf`;
  });
}

// Nav scroll state
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-item, .exp-item, .about-grid').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
