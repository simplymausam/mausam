const words = [
    "[archive]",
    "<project>",
    "-design-",
    "{image}",
    "/rain/",
    "<memory*>",
    "~!sound!~",
    "signal--",
    "cloud",
    "memory",
    "sound",
    "image",
    "archive",
    "design",
    "project",
    "signal",
    "draft",
    "process",
    "weather"
];

const background = document.getElementById("text-background");

let content = "";

for (let i = 0; i < 2000; i++) {

    const randomWord =
        words[Math.floor(Math.random() * words.length)];

    content += `<span>${randomWord}</span> `;

}

background.innerHTML = content;

document.addEventListener("mousemove", (event) => {

    const spans =
        document.querySelectorAll("#text-background span");

    spans.forEach((span) => {

        const rect = span.getBoundingClientRect();

        const x =
            rect.left + rect.width / 2;

        const y =
            rect.top + rect.height / 2;

        const distance =
            Math.hypot(
                event.clientX - x,
                event.clientY - y
            );

        if (distance < 100) {

            span.style.color = "#052576";

        } else {

            span.style.color =
                "rgba(28, 28, 28, 0.08)";

        }

    });

});