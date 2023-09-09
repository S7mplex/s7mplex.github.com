const header = document.querySelector('header');
const movingHeader = document.getElementById('moving-header');

header.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const headerWidth = header.offsetWidth;
    const headerHeight = header.offsetHeight;

    const moveX = (mouseX / headerWidth) * 30 - 15;
    const moveY = (mouseY / headerHeight) * 30 - 15;

    movingHeader.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
