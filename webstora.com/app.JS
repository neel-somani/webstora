window.addEventListener("scroll", () => {
    const img = document.getElementById("floating-img");
    const text = document.getElementById("click-text");
    const scrollY = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;

    // Calculate progress (0 to 1)
    const progress = Math.min(scrollY / docHeight, 1);

    if (progress < 0.9) {
        const offsetY = 20 + scrollY * 0.5;
        img.style.position = "fixed";
        img.style.top = `${offsetY}px`;
        img.style.left = `20px`;
        img.style.transform = `scale(1) translate(0, 0)`;
        img.style.cursor = "default";
        text.style.display = "none";
        img.onclick = null;
    } else {
        img.style.position = "fixed";
        img.style.top = "50%";
        img.style.left = "50%";
        img.style.transform = "translate(-50%, -50%) scale(10)";
        img.style.cursor = "pointer";
        text.style.display = "block";

        img.onclick = () => {
            window.location.href = "contact.html";
        };
    }
});
