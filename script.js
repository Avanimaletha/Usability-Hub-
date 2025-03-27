document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector("nav");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });


    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - navbar.offsetHeight,
                    behavior: "smooth"
                });
            }
        });
    });

    const menuToggle = document.createElement("div");
    menuToggle.className = "menu-toggle";
    menuToggle.innerHTML = "☰";
    document.querySelector(".main-nav").prepend(menuToggle);

    menuToggle.addEventListener("click", function () {
        document.querySelector(".nav-links").classList.toggle("active");
    });

    const banner = document.querySelector(".top-banner");
    if (banner) {
        const closeBtn = document.createElement("span");
        closeBtn.innerHTML = "&times;";
        closeBtn.style.cursor = "pointer";
        closeBtn.style.marginLeft = "20px";
        closeBtn.style.fontSize = "1.2rem";
        closeBtn.style.color = "white";
        banner.appendChild(closeBtn);

        closeBtn.addEventListener("click", function () {
            banner.style.display = "none";
        });
    }

  
    const featureCards = document.querySelectorAll(".features-card");
    featureCards.forEach(card => {
        card.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "0.3s ease-in-out";
        });
        card.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});
