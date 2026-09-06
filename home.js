const introScroll = document.querySelector('#introScroll');

function updateIntro() {
    const scrollDistance = introScroll.offsetHeight - window.innerHeight;
    
    const progress = Math.min(Math.max(window.scrollY / scrollDistance, 0), 1);

    introScroll.style.setProperty('--scroll-progress', progress);
    introScroll.classList.toggle('is-ready', progress > 0.05);
}

window.addEventListener('scroll', updateIntro, { passive: true });
window.addEventListener('resize', updateIntro);
updateIntro();