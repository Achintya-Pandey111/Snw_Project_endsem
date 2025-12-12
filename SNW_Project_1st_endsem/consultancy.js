
var hamburger = document.getElementById("hamburger");
var navMenu = document.getElementById("navMenu");


hamburger.addEventListener("click", function () {
    
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    }
    
    else {
        navMenu.style.display = "flex";
    }
});


var allLinks = document.querySelectorAll('a[href^="#"]');

allLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        var sectionId = link.getAttribute("href");
        var section = document.querySelector(sectionId);

        if (section) {
            event.preventDefault();
            section.scrollIntoView({ behavior: "smooth" });

           
            if (window.innerWidth <= 768) {
                navMenu.style.display = "none";
            }
        }
    });
});


window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        navMenu.style.display = "flex";
    }
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