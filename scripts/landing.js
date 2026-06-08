const right = document.querySelector(".right-side");

window.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    right.style.transform = `translate(${x}px, ${y}px)`;
});

const canvas = document.getElementById("particle-bg");
const ctx = canvas.getContext("2d");

const particles = [];
const spacing = 15;

const mouse = {
    x: -9999,
    y: -9999,
    radius: 100
};

function resizeCanvas() {

    const main = document.querySelector("main");

    canvas.width = main.offsetWidth;
    canvas.height = main.offsetHeight;

    particles.length = 0;

    for (let x = 0; x < canvas.width; x += spacing) {

        for (let y = 0; y < canvas.height; y += spacing) {

            particles.push({
                baseX: x,
                baseY: y,
                x,
                y
            });

        }

    }

}

window.addEventListener("resize", resizeCanvas);

window.addEventListener("mousemove", e => {

    const rect = canvas.getBoundingClientRect();

    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;

});

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {

            const force = (mouse.radius - distance) / mouse.radius;

            p.x += (dx / distance) * force * 2;
            p.y += (dy / distance) * force * 2;

        }

        p.x += (p.baseX - p.x) * 0.05;
        p.y += (p.baseY - p.y) * 0.05;

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            1,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "#0037c333";
        ctx.fill();

    });

    requestAnimationFrame(animate);

}

resizeCanvas();
animate();