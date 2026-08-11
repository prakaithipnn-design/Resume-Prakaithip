@import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&display=swap');

:root {
    --blue: #0277bd;
    --blue-dark: #01579b;
    --blue-light: #e1f5fe;

    --green: #2e7d32;
    --green-light: #e8f5e9;

    --text: #263238;
    --muted: #607d8b;

    --white: #ffffff;
    --bg: #f7fafc;
    --border: #e3edf2;

    --shadow: 0 15px 40px rgba(38, 50, 56, 0.10);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Sarabun", sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.7;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    font-family: inherit;
}


/* =========================
   CONTAINER
========================= */

.container,
.nav-container,
.hero-container {
    width: min(1120px, calc(100% - 40px));
    margin: auto;
}


/* =========================
   NAVBAR
========================= */

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    z-index: 1000;

    background: rgba(255,255,255,0.92);
    backdrop-filter: blur(15px);

    border-bottom: 1px solid var(--border);
}

.nav-container {
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    width: 45px;
    height: 45px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 14px;

    background: linear-gradient(
        135deg,
        var(--blue),
        var(--green)
    );

    color: white;

    font-weight: 700;
    font-size: 17px;

    box-shadow: 0 8px 20px rgba(2,119,189,0.20);
}

.nav-links {
    display: flex;
    gap: 30px;
}

.nav-links a {
    color: var(--muted);

    font-size: 15px;
    font-weight: 500;

    transition: 0.3s;
}

.nav-links a:hover {
    color: var(--blue);
}

.menu-toggle {
    display: none;

    border: none;
    background: transparent;

    font-size: 28px;

    cursor: pointer;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 100vh;

    padding-top: 72px;

    display: flex;
    align-items: center;

    background:
        radial-gradient(
            circle at 10% 20%,
            #dff5ff,
            transparent 30%
        ),
        radial-gradient(
            circle at 90% 80%,
            #e4f7e6,
            transparent 30%
        ),
        white;
}

.hero-container {
    display: grid;

    grid-template-columns: 1.25fr 0.75fr;

    gap: 80px;

    align-items: center;

    padding-top: 60px;
    padding-bottom: 60px;
}

.tag {
    display: inline-block;

    padding: 6px 14px;

    border-radius: 30px;

    background: var(--blue-light);

    color: var(--blue);

    font-size: 12px;
    font-weight: 700;

    letter-spacing: 2px;
}

.hero h1 {
    margin-top: 20px;

    font-size: clamp(48px, 7vw, 78px);

    line-height: 1.05;

    font-weight: 700;
}

.hero h1 span {
    color: var(--blue);
}

.hero h2 {
    margin-top: 18px;

    font-size: 20px;

    letter-spacing: 4px;

    color: var(--muted);
}

.hero-text > p {
    max-width: 680px;

    margin-top: 25px;

    color: var(--muted);

    font-size: 18px;
}

.buttons {
    display: flex;

    gap: 15px;

    margin-top: 35px;
}

.btn {
    padding: 12px 25px;

    border-radius: 12px;

    font-weight: 600;

    transition: 0.3s;
}

.btn-primary {
    color: white;

    background: linear-gradient(
        135deg,
        var(--blue),
        var(--green)
    );

    box-shadow: 0 10px 25px rgba(2,119,189,0.20);
}

.btn-primary:hover {
    transform: translateY(-3px);
}

.btn-outline {
    color: var(--blue);

    border: 1px solid var(--blue);
}

.btn-outline:hover {
    background: var(--blue-light);
}


/* =========================
   PROFILE CARD
========================= */

.profile-card {
    padding: 40px 30px;

    text-align: center;

    background: rgba(255,255,255,0.90);

    border: 1px solid var(--border);

    border-radius: 30px;

    box-shadow: var(--shadow);
}

.profile-photo {
    width: 150px;
    height: 150px;

    margin: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background:
        linear-gradient(
            135deg,
            var(--blue),
            var(--green)
        );

    border: 8px solid white;

    box-shadow:
        0 15px 35px rgba(2,119,189,0.25);
}

.profile-photo span {
    color: white;

    font-size: 42px;

    font-weight: 700;

    letter-spacing: 2px;
}

.profile-card h3 {
    margin-top: 25px;

    font-size: 23px;

    letter-spacing: 2px;
}

.profile-card > p {
    margin-top: 5px;

    color: var(--muted);
}

.profile-line {
    width: 50px;
    height: 3px;

    margin: 20px auto;

    border-radius: 10px;

    background: linear-gradient(
        90deg,
        var(--blue),
        var(--green)
    );
}

.profile-contact {
    display: flex;

    flex-direction: column;

    gap: 12px;

    text-align: left;
}

.profile-contact a {
    color: var(--muted);

    font-size: 14px;

    transition: 0.3s;
}

.profile-contact a:hover {
    color: var(--blue);
}


/* =========================
   SECTION
========================= */

.section {
    padding: 110px 0;
}

.gray {
    background: white;
}

.section-title {
    display: flex;

    gap: 20px;

    margin-bottom: 55px;
}

.section-title > span {
    color: var(--blue);

    font-weight: 700;

    padding-top: 5px;
}

.section-title small {
    color: var(--blue);

    font-size: 12px;

    font-weight: 700;

    letter-spacing: 2px;
}

.section-title h2 {
    margin-top: 4px;

    font-size: clamp(30px, 5vw, 44px);

    line-height: 1.2;
}


/* =========================
   ABOUT
========================= */

.about-grid {
    display: grid;

    grid-template-columns: 1.3fr 0.7fr;

    gap: 60px;

    align-items: center;
}

.about-text {
    color: var(--muted);

    font-size: 18px;
}

.about-text p + p {
    margin-top: 20px;
}

.stats {
    display: grid;

    grid-template-columns: repeat(2,1fr);

    gap: 15px;
}

.stat {
    padding: 25px;

    border-radius: 18px;

    background:
        linear-gradient(
            135deg,
            var(--blue-light),
            var(--green-light)
        );

    border: 1px solid rgba(2,119,189,0.08);

    transition: 0.3s;
}

.stat:hover {
    transform: translateY(-5px);

    box-shadow: var(--shadow);
}

.stat strong {
    display: block;

    color: var(--blue);

    font-size: 18px;
}

.stat span {
    color: var(--muted);

    font-size: 14px;
}


/* =========================
   TIMELINE
========================= */

.timeline {
    position: relative;

    max-width: 950px;

    margin: auto;
}

.timeline::before {
    content: "";

    position: absolute;

    left: 155px;

    top: 10px;
    bottom: 10px;

    width: 2px;

    background: var(--border);
}

.timeline-item {
    position: relative;

    display: grid;

    grid-template-columns: 135px 40px 1fr;

    gap: 20px;

    margin-bottom: 45px;
}

.date {
    text-align: right;

    color: var(--muted);

    font-size: 14px;
}

.dot {
    width: 15px;
    height: 15px;

    margin: 5px auto;

    border-radius: 50%;

    background: var(--blue);

    border: 3px solid white;

    box-shadow:
        0 0 0 3px var(--blue-light);

    z-index: 2;
}

.experience-card {
    padding: 30px;

    background: white;

    border: 1px solid var(--border);

    border-radius: 20px;

    box-shadow: 0 8px 25px rgba(38,50,56,0.05);

    transition: 0.3s;
}

.experience-card:hover {
    transform: translateY(-4px);

    box-shadow: var(--shadow);
}

.experience-card > span {
    display: inline-block;

    padding: 4px 12px;

    border-radius: 20px;

    background: var(--green-light);

    color: var(--green);

    font-size: 12px;

    font-weight: 600;
}

.experience-card h3 {
    margin-top: 10px;

    font-size: 23px;
}

.experience-card ul {
    margin-top: 15px;

    padding-left: 20px;

    color: var(--muted);
}

.experience-card li {
    margin-bottom: 6px;
}

.location {
    color: var(--muted);

    margin-top: 2px;
}


/* =========================
   SKILLS
========================= */

.skills-grid {
    display: grid;

    grid-template-columns: repeat(4,1fr);

    gap: 18px;
}

.skill-card {
    padding: 28px 22px;

    background: white;

    border: 1px solid var(--border);

    border-radius: 20px;

    transition: 0.3s;
}

.skill-card:hover {
    transform: translateY(-6px);

    border-color: #b3e5fc;

    box-shadow: var(--shadow);
}

.icon {
    width: 52px;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 18px;

    border-radius: 15px;

    background: var(--blue-light);

    font-size: 23px;
}

.skill-card h3 {
    font-size: 18px;

    line-height: 1.4;
}

.skill-card p {
    margin-top: 8px;

    color: var(--muted);

    font-size: 14px;
}


/* =========================
   EDUCATION
========================= */

.education-grid {
    display: grid;

    grid-template-columns: repeat(2,1fr);

    gap: 25px;

    max-width: 950px;

    margin: auto;
}

.education-card {
    position: relative;

    padding: 35px;

    background: white;

    border: 1px solid var(--border);

    border-radius: 22px;

    box-shadow: 0 8px 25px rgba(38,50,56,0.05);
}

.education-card.current {
    background:
        linear-gradient(
            135deg,
            white,
            var(--blue-light)
        );

    border-color: #b3e5fc;
}

.education-icon {
    font-size: 38px;

    margin-bottom: 15px;
}

.education-card h3 {
    font-size: 24px;
}

.education-card h4 {
    margin-top: 8px;

    color: var(--blue);

    font-size: 17px;
}

.education-card p {
    margin-top: 7px;

    color: var(--muted);
}

.badge {
    position: absolute;

    top: 20px;
    right: 20px;

    padding: 5px 11px;

    border-radius: 20px;

    background: var(--green-light);

    color: var(--green);

    font-size: 12px;

    font-weight: 600;
}


/* =========================
   CONTACT
========================= */

.contact {
    padding: 110px 0;

    color: white;

    background:
        linear-gradient(
            135deg,
            var(--blue-dark),
            var(--green)
        );
}

.contact-grid {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 80px;

    align-items: center;
}

.contact-grid > div:first-child small {
    color: #b3e5fc;

    letter-spacing: 2px;
}

.contact h2 {
    margin-top: 12px;

    font-size: clamp(38px,5vw,55px);

    line-height: 1.2;
}

.contact-grid > div:first-child p {
    margin-top: 20px;

    max-width: 500px;

    color: rgba(255,255,255,0.8);
}

.contact-list {
    display: flex;

    flex-direction: column;

    gap: 15px;
}

.contact-list > a,
.contact-list > div {
    display: flex;

    align-items: center;

    gap: 18px;

    padding: 20px;

    border-radius: 17px;

    background: rgba(255,255,255,0.10);

    border: 1px solid rgba(255,255,255,0.15);

    transition: 0.3s;
}

.contact-list > a:hover {
    transform: translateX(5px);

    background: rgba(255,255,255,0.18);
}

.contact-list > a > span,
.contact-list > div > span {
    width: 45px;
    height: 45px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 12px;

    background: rgba(255,255,255,0.15);

    font-size: 20px;
}

.contact-list small {
    display: block;

    color: rgba(255,255,255,0.65);
}

.contact-list strong {
    display: block;

    margin-top: 2px;

    font-size: 15px;

    word-break: break-word;
}


/* =========================
   FOOTER
========================= */

footer {
    background: #102027;

    color: white;

    padding: 30px 0;
}

.footer-inner {
    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 20px;
}

.footer-inner strong {
    display: block;

    letter-spacing: 1px;
}

.footer-inner span {
    display: block;

    color: #90a4ae;

    font-size: 13px;
}

.footer-inner p {
    color: #90a4ae;

    font-size: 13px;
}


/* =========================
   TOP BUTTON
========================= */

#topBtn {
    position: fixed;

    right: 25px;
    bottom: 25px;

    width: 46px;
    height: 46px;

    border: none;

    border-radius: 50%;

    background: var(--blue);

    color: white;

    font-size: 20px;

    cursor: pointer;

    opacity: 0;

    visibility: hidden;

    transition: 0.3s;

    z-index: 999;
}

#topBtn.show {
    opacity: 1;

    visibility: visible;
}

#topBtn:hover {
    background: var(--blue-dark);

    transform: translateY(-3px);
}


/* =========================
   MOBILE
========================= */

@media (max-width: 900px) {

    .hero-container {
        grid-template-columns: 1fr;

        gap: 50px;
    }

    .profile-card {
        max-width: 500px;

        width: 100%;

        margin: auto;
    }

    .about-grid {
        grid-template-columns: 1fr;
    }

    .skills-grid {
        grid-template-columns: repeat(2,1fr);
    }

    .contact-grid {
        grid-template-columns: 1fr;

        gap: 45px;
    }
}


@media (max-width: 700px) {

    .container,
    .nav-container,
    .hero-container {
        width: calc(100% - 30px);
    }

    .nav-links {
        position: absolute;

        top: 72px;

        left: 15px;
        right: 15px;

        display: none;

        flex-direction: column;

        gap: 0;

        padding: 10px;

        background: white;

        border: 1px solid var(--border);

        border-radius: 15px;

        box-shadow: var(--shadow);
    }

    .nav-links.active {
        display: flex;
    }

    .nav-links a {
        padding: 12px 15px;
    }

    .menu-toggle {
        display: block;
    }

    .hero {
        min-height: auto;
    }

    .hero-container {
        padding-top: 70px;

        padding-bottom: 70px;
    }

    .hero h1 {
        font-size: 45px;
    }

    .hero h2 {
        font-size: 16px;

        letter-spacing: 2px;
    }

    .hero-text > p {
        font-size: 16px;
    }

    .buttons {
        flex-direction: column;
    }

    .btn {
        text-align: center;
    }

    .section {
        padding: 80px 0;
    }

    .stats {
        grid-template-columns: 1fr 1fr;
    }

    .timeline::before {
        left: 7px;
    }

    .timeline-item {
        display: block;

        padding-left: 30px;
    }

    .date {
        text-align: left;

        margin-bottom: 12px;
    }

    .dot {
        position: absolute;

        left: 0;

        top: 55px;
    }

    .experience-card {
        padding: 23px 20px;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .education-grid {
        grid-template-columns: 1fr;
    }

    .contact {
        padding: 80px 0;
    }

    .footer-inner {
        flex-direction: column;

        text-align: center;
    }
}


@media (max-width: 420px) {

    .hero h1 {
        font-size: 40px;
    }

    .stats {
        grid-template-columns: 1fr;
    }

    .profile-card {
        padding: 30px 20px;
    }
}
