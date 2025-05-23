const options = { root: null, rootMargin: '0px', threshold: 0.5 };
let observer;
function initObserver() {
    observer?.disconnect();
    observer = new IntersectionObserver(handleIntersection, options);
    document.querySelectorAll('.observe')
        .forEach(el => observer.observe(el));
}
function handleIntersection(entries) {
    entries.forEach(({ target: video, isIntersecting }) => {
        video[isIntersecting ? 'play' : 'pause']();
        video.addEventListener("contextmenu", e => e.preventDefault(), false);
        video.hasAttribute("controls") && video.removeAttribute("controls");
    });
}
initObserver();
window.addEventListener('resize', initObserver);