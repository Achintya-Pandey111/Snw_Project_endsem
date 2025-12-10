const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
            navMenu.style.display = "none";
        }
    });
});

const counters = document.querySelectorAll('.counter');
const speed = 120;

counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('data-target');
        const data = +counter.innerText;
        const time = value / speed;
        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 20);
        } else {
            counter.innerText = value;
        }
    };

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            animate();
            observer.disconnect();
        }
    });

    observer.observe(counter);
});