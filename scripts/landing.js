const right = document.querySelector(".right-side");

window.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    right.style.transform = `translate(${x}px, ${y}px)`;
});