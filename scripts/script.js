const header = document.querySelector('header');
const movingHeader = document.getElementById('moving-header');

header.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Adjust the multiplication factor to control the speed of movement
    const moveX = (mouseX - header.offsetWidth / 2) / 10;
    const moveY = (mouseY - header.offsetHeight / 2) / 10;

    movingHeader.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
