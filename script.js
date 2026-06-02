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

// Nav active state on scroll
const sections = document.querySelectorAll('section[id]');
const navBtns  = document.querySelectorAll('.nav-btn');
const navH     = document.getElementById('nav')?.offsetHeight ?? 80;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navBtns.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: `-${navH}px 0px -60% 0px`, threshold: 0 });

sections.forEach(s => observer.observe(s));

// Fade-in on scroll
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .exp-item, .about-grid').forEach(el => {
  el.classList.add('fade-in');
  fadeObserver.observe(el);
});
