```javascript
/* =========================================
   PRAKAITHIP NOISING - RESUME WEBSITE
   JavaScript
   ========================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       MOBILE MENU
       ===================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");


    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            if (navLinks.classList.contains("active")) {
                menuToggle.textContent = "✕";
            } else {
                menuToggle.textContent = "☰";
            }

        });


        /* ปิดเมนูเมื่อกดลิงก์ */

        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                menuToggle.textContent = "☰";

            });

        });

    }


    /* =====================================
       CURRENT YEAR
       ===================================== */

    const currentYear = document.getElementById("currentYear");


    if (currentYear) {

        currentYear.textContent = new Date().getFullYear();

    }


    /* =====================================
       BACK TO TOP
       ===================================== */

    const backToTop = document.getElementById("backToTop");


    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });


        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================
       ACTIVE NAVIGATION
       ===================================== */

    const sections = document.querySelectorAll("section[id]");
    const navigationLinks = document.querySelectorAll(".nav-links a");


    window.addEventListener("scroll", function () {

        let currentSection = "";


        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });


        navigationLinks.forEach(function (link) {

            link.classList.remove("active");

            const href = link.getAttribute("href");


            if (href === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    });


    /* =====================================
       SCROLL REVEAL
       ===================================== */

    const revealElements = document.querySelectorAll(
        ".timeline-content, .skill-card, .education-card, .stat-card"
    );


    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        observer.observe(element);

    });


});
```
