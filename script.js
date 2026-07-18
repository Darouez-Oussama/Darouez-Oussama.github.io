/* =========================================================
   Oussama Darouez — interactive portfolio
   Plain vanilla JS. No build step (GitHub Pages friendly).
   ========================================================= */

/* ---------- EDIT YOUR PROJECTS HERE ----------
   Each card has three states:
     • rest  -> shows the title + bullet points
     • hover -> reveals the illustration
     • click -> flips (book page turn) to your real photo
   To use your own project photos:
     1. Drop images into public/projects/ (e.g. smart-plug.jpg)
     2. Point "photo" at them, e.g. "/public/projects/smart-plug.jpg"
   Until then a placeholder is shown on the flipped side.
--------------------------------------------------------- */
const PROJECTS = [
  {
    title: "OTA-Enabled Smart Plug",
    meta: "Freelance · 2025",
    points: [
      "Wi-Fi smart plug with secure HTTPS control and remote OTA updates.",
      "Dual-partition OTA with automatic rollback on failed flashes.",
      "Built on ESP-IDF with FreeRTOS task scheduling.",
    ],
    tags: ["Wi-Fi", "HTTPS", "OTA", "ESP-IDF", "FreeRTOS"],
    illustration: "/public/illustrations/smart-plug.png",
    photo: "/public/illustrations/smart-plug.png",
  },
  {
    title: "Bionic Arm",
    meta: "INSAT Project · 2025",
    points: [
      "EMG-controlled prosthetic arm driven by ESP32 and STM32.",
      "Real-time signal acquisition and gesture classification.",
      "Modular firmware architecture following SOLID principles.",
    ],
    tags: ["ESP32", "STM32", "EMG", "SOLID"],
    illustration: "/public/illustrations/bionic-arm.png",
    photo: "/public/projects/bionic-hand.jpg",
  },
  {
    title: "Inverted Pendulum",
    meta: "INSAT Project · 2025",
    points: [
      "Self-balancing inverted pendulum stabilized with a PID loop.",
      "Modeled, simulated and tuned in MATLAB and LabVIEW.",
      "Real-time control for stable upright balancing.",
    ],
    tags: ["MATLAB", "LabVIEW", "Control Theory", "PID"],
    illustration: "/public/illustrations/pendulum.png",
    photo: "/public/projects/robotic-arm.jpg",
  },
  {
    title: "Eurobot Robots",
    meta: "International Robotics Competition · 2023",
    points: [
      "Autonomous competition robots running on STM32.",
      "Closed-loop PID motion control with odometry.",
      "Custom PCBs designed end-to-end in KiCad.",
    ],
    tags: ["STM32", "PID Control", "ROS", "KiCad"],
    illustration: "/public/illustrations/robot.png",
    photo: "/public/projects/eurobot-setup.jpg",
  },
  {
    title: "Bare Metal Development",
    meta: "INSAT Embedded Systems Course & Projects · 2023",
    points: [
      "Low-level bare-metal drivers for STM32, PIC and ATmega: GPIO, ADC, Timer, EXTI.",
      "Full drivers for LIS3DSH (SPI) and MMA7660 (I2C) accelerometers.",
      "Configurable brushless motor control using PWM and ADC feedback.",
    ],
    tags: ["STM32", "PIC", "ATmega", "SPI", "I2C", "PWM"],
    illustration: "/public/illustrations/bare-metal.png",
    photo: "/public/projects/stm.jpg",
  },
  {
    title: "FPGA-Based UART & GCD Calculator",
    meta: "INSAT Digital Systems Course · 2024",
    points: [
      "Single-purpose processors for UART communication and GCD calculation on FPGA.",
      "Control logic and datapath built with finite state machines, optimized via Karnaugh maps.",
      "Synthesized and validated in VHDL with Quartus Prime on an Altera Cyclone IV FPGA.",
    ],
    tags: ["VHDL", "FPGA", "Quartus", "FSM", "Cyclone IV"],
    illustration: "/public/illustrations/fpga.png",
    photo: "/public/projects/fpga.jpg",
  },
  {
    title: "Automated Production Line Control System",
    meta: "INSAT Industrial Automation Course · 2024",
    points: [
      "Designed a complete automation workflow with sorting, heating, machining, and quality control stages.",
      "Built a Factory I/O simulation for system testing and functional validation.",
      "Programmed process control using Ladder Logic (LD) in TIA Portal V17.",
      "Created an HMI interface for real-time process monitoring and operator interaction.",
    ],
    tags: ["S7-1500 PLCs", "TIA PORTAL", "Ladder Logic", "Grafcet", "Factory I/O"],
    illustration: "/public/illustrations/industrial.jpeg",
    photo: "/public/projects/industrial-line.jpg",
  },
  {
    title: "Arduino-Based RC Transmitter",
    meta: "Aerobotix Project · 2022",
    points: [
      "Coded nRF24L01 module for reliable wireless transmission of controller data to an RC car.",
      "Programmed PIC18F2550 to interface a 3x4 matrix keypad for USB and UART-based control.",
      "Designed and laid out the remote controller PCB using EasyEDA.",
    ],
    tags: ["Arduino", "PIC18F2550", "nRF24L01", "EasyEDA"],
    illustration: "/public/illustrations/trans.jpeg",
    photo: "/public/projects/transmitter.jpeg",
  },
  {
    title: "Drone",
    meta: "Aerobotix Project · 2021",
    points: [
      "Introduction to flight controllers PID and Brushless motors.",
    ],
    tags: ["Flight Controller", "PID Control"],
    illustration: "/public/illustrations/drone.jpeg",
    photo: "/public/projects/drone.jpg",
  },
  {
    title: "Big Led Matrix",
    meta: "Aerobotix Project · 2023",
    points: [
      "Used Window Glass Cubes To make a big led matrix.",
    ],
    tags: ["ESP32", "Led Matrix"],
    illustration: "/public/illustrations/led.jpeg",
    photo: "/public/projects/light.jpeg",
  },
];

/* ---------- Render projects ---------- */
const projectList = document.getElementById("projectList");
PROJECTS.forEach((p, i) => {
  const li = document.createElement("li");
  li.className = "project-card reveal";
  li.setAttribute("tabindex", "0");
  li.setAttribute("role", "button");
  li.setAttribute("aria-label", p.title);
  const num = String(i + 1).padStart(2, "0");
  li.innerHTML = `
    <div class="project-inner">
      <div class="project-front">
        <img src="${p.illustration}" alt="${p.title} illustration" class="project-illustration" loading="lazy" />
        <div class="project-cover">
          <div>
            <span class="project-index">${num}</span>
            <h3>${p.title}</h3>
            <p class="project-meta">${p.meta}</p>
            <ul class="project-points">
              ${p.points.map((pt) => `<li>${pt}</li>`).join("")}
            </ul>
          </div>
          <div class="project-tags">
            ${p.tags.map((t) => `<span>${t}</span>`).join("")}
          </div>
        </div>
        <span class="peek" aria-hidden="true">Click to peek →</span>
      </div>
      <div class="project-back">
        <img src="${p.photo}" alt="${p.title} photo" class="project-photo" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
        <div class="photo-fallback" style="display:none;">Add photo at ${p.photo}</div>
        <span class="peek" aria-hidden="true">↩ Click to flip back</span>
      </div>
    </div>
  `;
  projectList.appendChild(li);
});

/* flip on click / keyboard */
document.querySelectorAll(".project-card").forEach((card) => {
  const toggle = () => card.classList.toggle("flipped");
  card.addEventListener("click", toggle);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
  });
});

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Custom cursor + glow ---------- */
const dot  = document.getElementById("cursorDot");
const ring = document.getElementById("cursorRing");
const glow = document.getElementById("glow");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let ringX = mouseX, ringY = mouseY;
let glowX = mouseX, glowY = mouseY;

const isTouch = window.matchMedia("(hover: none)").matches;

window.addEventListener("pointermove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (dot) { dot.style.left = mouseX + "px"; dot.style.top = mouseY + "px"; }
});

function animateCursor() {
  ringX += (mouseX - ringX) * 0.18;
  ringY += (mouseY - ringY) * 0.18;
  glowX += (mouseX - glowX) * 0.08;
  glowY += (mouseY - glowY) * 0.08;

  if (ring) { ring.style.left = ringX + "px"; ring.style.top = ringY + "px"; }
  if (glow) { glow.style.transform = `translate(${glowX}px, ${glowY}px) translate(-50%, -50%)`; }

  requestAnimationFrame(animateCursor);
}
if (!isTouch) animateCursor();

/* grow the ring on interactive elements */
document.querySelectorAll("a, button, [data-cursor], .skills li").forEach((el) => {
  el.addEventListener("mouseenter", () => ring && ring.classList.add("is-hover"));
  el.addEventListener("mouseleave", () => ring && ring.classList.remove("is-hover"));
});

/* ---------- Avatar: body tilts subtly, head moves independently ---------- */
const tilt  = document.getElementById("avatarTilt");
const stage = document.getElementById("avatarStage");
const head  = document.getElementById("avatarHead");
const body  = document.getElementById("avatarBody");

if (tilt && stage && head && body && !isTouch) {
  const headTiltX  = 12;
  const headTiltY  = 20;
  const headRollZ  = 4;
  const bodyFollow = 0.45;

  let tX = 0, tY = 0;
  let cX = 0, cY = 0;

  window.addEventListener("pointermove", (e) => {
    const rect = stage.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top  + rect.height / 2;
    tX = Math.max(-1, Math.min(1, (e.clientX - cx) / (window.innerWidth  / 2)));
    tY = Math.max(-1, Math.min(1, (e.clientY - cy) / (window.innerHeight / 2)));
  });

  const resetTargets = () => { tX = 0; tY = 0; };
  stage.addEventListener("pointerleave", resetTargets);
  window.addEventListener("blur", resetTargets);

  function animateAvatar(t) {
    cX += (tX - cX) * 0.09;
    cY += (tY - cY) * 0.09;

    const idle = Math.sin(t / 1100) * 1.2;

    head.style.transform =
      `rotateX(${cY * -headTiltX}deg) ` +
      `rotateY(${cX *  headTiltY}deg) ` +
      `rotateZ(${cX *  headRollZ + idle}deg)`;

    body.style.transform =
      `rotateX(${cY * -headTiltX * bodyFollow}deg) ` +
      `rotateY(${cX *  headTiltY * bodyFollow}deg) ` +
      `rotateZ(${(cX * headRollZ + idle) * bodyFollow}deg)`;

    requestAnimationFrame(animateAvatar);
  }
  requestAnimationFrame(animateAvatar);
}

/* ---------- Project cards: subtle magnetic tilt (front only) ---------- */
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("pointermove", (e) => {
    if (card.classList.contains("flipped")) { card.style.transform = ""; return; }
    const r  = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width  - 0.5;
    const py = (e.clientY - r.top)  / r.height - 0.5;
    card.style.transform =
      `perspective(900px) rotateY(${px * 6}deg) rotateX(${py * -6}deg) translateY(-6px)`;
  });
  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* stagger the hero reveals */
document.querySelectorAll(".hero .reveal").forEach((el, i) => {
  el.style.transitionDelay = i * 0.08 + "s";
});

/* ---------- Copy email / phone to clipboard on click ---------- */
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity  = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }
}

document.querySelectorAll(".social-btn[data-copy]").forEach((btn) => {
  const label    = btn.querySelector(".social-label");
  const original = label ? label.textContent : "";
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const ok = await copyText(btn.getAttribute("data-copy"));
    if (label) {
      label.textContent = ok ? (btn.getAttribute("data-copy-label") || "Copied!") : "Copy failed";
      btn.classList.add("copied");
      clearTimeout(btn._copyTimer);
      btn._copyTimer = setTimeout(() => {
        label.textContent = original;
        btn.classList.remove("copied");
      }, 1600);
    }
  });
});

/* =========================================================
   i18n — French / English toggle
   The button shows what language you will SWITCH TO.
   Clicking "FR" takes you to French. Clicking "EN" back to English.
   ========================================================= */
const TRANSLATIONS = {
  en: {
    /* nav */
    "nav.about":        "About",
    "nav.experience":   "Experience",
    "nav.projects":     "Projects",
    "nav.achievements": "Achievements",
    "nav.certificates": "Certificates",
    "nav.hire":         "Hire me",
    /* hero */
    "hero.eyebrow": "Embedded Systems Engineer · Firmware Developer",
    "hero.sub":     "I compile abstract logic into physical reality, engineering robust Firmware and IoT systems from bare metal to the cloud.",
    "hero.cta1":    "View my work",
    "hero.cta2":    "Download CV",
    /* about */
    "about.eyebrow": "About",
    "about.title":   "A bit about me.",
    "about.p1": "I'm an Embedded Systems Engineer graduating this September from the National Institute of Applied Science and Technology (INSAT) with a strong foundation in electronics, programming, and real-time systems.",
    "about.p2": "With hands-on experience in firmware development, real-time systems, and IoT, I specialize in dependable embedded solutions using STM32, ESP32, FreeRTOS and protocols such as UART, SPI, I2C, CAN, and Ethernet.",
    "about.p3": "I am wrapping up my internship this August as an Embedded Systems Engineering Intern at the Nicolaudie Group (LightingSoft AG) in Meroux, France, where I've been building scalable Modbus TCP/RS485 servers and strengthening CI/CD pipelines for production firmware.",
    /* experience */
    "exp.eyebrow": "Experience",
    "exp.title":   "Where I've built.",
    "exp.lead":    "Building, mentoring and shipping embedded systems.",
    "exp.role1":   "Embedded Systems Engineering Intern",
    "exp.r1b1":    "Developed a scalable Modbus TCP/RS485 server for STM32 and NXP LPC supporting multiple concurrent clients.",
    "exp.r1b2":    "Integrated Modbus triggers into the show engine for real-time scene control.",
    "exp.r1b3":    "Built a robust C++ Modbus client with stress tests and authored QTest suites.",
    "exp.r1b4":    "Migrated Jenkins CI/CD pipelines from Qt5 to Qt6.",
    "exp.role2":   "Embedded Systems Engineer",
    "exp.r2b1":    "Built a dual-slot OTA firmware update system over Ethernet/USB with automatic fallback recovery.",
    "exp.r2b2":    "Prototyped reusable drivers for Timers, Ethernet, Flash, ADC and PCNT.",
    "exp.r2b3":    "Designed custom micro-ROS transports for STM32 and a robust bootloader with reset-cause handling.",
    "exp.r2b4":    "Automated build/test workflows with GitHub Actions.",
    "exp.role3":   "Mechatronics Engineer",
    "exp.r3b1":    "Optimized FreeRTOS task scheduling on ESP32 for reliable multitasking and efficient resource use.",
    "exp.r3b2":    "Restructured the UART/Ymodem interface for reliable command reception.",
    "exp.r3b3":    "Established a robust test bench to streamline robot functionality validation.",
    "exp.role4":   "Robotics Instructor",
    "exp.r4b1":    "Delivered hands-on PCB design training with KiCad from schematic to prototype.",
    "exp.r4b2":    "Guided students through digital logic design and ATmega328P register-level programming.",
    "exp.r4b3":    "Mentored mechanical design and robot mechanics using SolidWorks.",
    /* projects */
    "proj.eyebrow": "Selected work",
    "proj.title":   "Projects.",
    "proj.lead":    "Hover a card to reveal the illustration, then click to flip it and see the real photo.",
    /* achievements */
    "ach.eyebrow":  "Achievements",
    "ach.title":    "Highlights.",
    "ach.lead":     "Competitions, forums and recognitions along the way.",
    "ach.a1title":  "Mentor at RoboCup Asia Pacific 2024",
    "ach.a1desc":   "Mentored a student team at RoboCup Asia Pacific 2024 in South Korea, with Discovery Club Junior.",
    "ach.a2title":  "Chinese-Arab Youth Development Forum",
    "ach.a2desc":   "Attended the Chinese-Arab Youth Development Forum in China, with Ministry of Sports and Youth.",
    "ach.a3title":  "1st Prize — Eurobot National Qualification",
    "ach.a3desc":   "Won first prize at the Eurobot National Qualification, with INSAT.",
    "ach.a4title":  "1st Prize — Autonomous Robot Competition, ROBOCUP ENSI 5.0",
    "ach.a4desc":   "Took first place in the autonomous robot competition at ROBOCUP ENSI 5.0, with INSAT.",
    /* certificates */
    "cert.eyebrow": "Certificates",
    "cert.title":   "Credentials.",
    "cert.c1title": "Altium Designer Pro — From Design to Manufacturing",
    "cert.c1meta":  "Instructor: Thameur Chebbi · 21 hours · Online · Oct 12 – Nov 9, 2024",
    "cert.c1desc":  "Advanced PCB design across 2- and 4-layer boards, symbol/footprint development per IPC standards, high-speed and mixed-signal design, SPI/I2C/UART/USB implementation, LTspice simulation and full PCB documentation.",
    /* contact */
    "contact.eyebrow":     "Let's talk",
    "contact.title":       "Let's build something.",
    "contact.lead":        "I'm always interested in new opportunities and exciting embedded projects. Let's connect and talk about what we can build together.",
    "contact.emailLabel":  "Email",
    "contact.phoneLabel":  "Phone",
    "contact.locationLabel": "Belfort, FR",
    "contact.cv":          "Download CV",
    /* footer */
    "footer.top": "Back to top ↑",
  },

  fr: {
    /* nav */
    "nav.about":        "À propos",
    "nav.experience":   "Expérience",
    "nav.projects":     "Projets",
    "nav.achievements": "Réalisations",
    "nav.certificates": "Certificats",
    "nav.hire":         "Me contacter",
    /* hero */
    "hero.eyebrow": "Ingénieur Systèmes Embarqués · Développeur Firmware",
    "hero.sub":     "Je compile la logique abstraite en réalité physique, en concevant des systèmes Firmware et IoT robustes, du bare metal jusqu'au cloud.",
    "hero.cta1":    "Voir mes projets",
    "hero.cta2":    "Télécharger CV",
    /* about */
    "about.eyebrow": "À propos",
    "about.title":   "Un peu sur moi.",
    "about.p1": "Je suis ingénieur en systèmes embarqués, diplômé en septembre de l'Institut National des Sciences Appliquées et de Technologie (INSAT), avec de solides bases en électronique, programmation et systèmes temps réel.",
    "about.p2": "Fort d'une expérience pratique en développement firmware, systèmes temps réel et IoT, je me spécialise dans des solutions embarquées fiables utilisant STM32, ESP32, FreeRTOS et des protocoles tels que UART, SPI, I2C, CAN et Ethernet.",
    "about.p3": "Je termine mon stage en août en tant qu'Ingénieur Systèmes Embarqués chez Nicolaudie Group (LightingSoft AG) à Meroux, France, où je développe des serveurs Modbus TCP/RS485 évolutifs et renforce les pipelines CI/CD pour le firmware de production.",
    /* experience */
    "exp.eyebrow": "Expérience",
    "exp.title":   "Là où j'ai construit.",
    "exp.lead":    "Développement, encadrement et livraison de systèmes embarqués.",
    "exp.role1":   "Stagiaire Ingénieur Systèmes Embarqués",
    "exp.r1b1":    "Développement d'un serveur Modbus TCP/RS485 évolutif pour STM32 et NXP LPC supportant plusieurs clients simultanés.",
    "exp.r1b2":    "Intégration des déclencheurs Modbus dans le moteur de spectacle pour le contrôle de scène en temps réel.",
    "exp.r1b3":    "Conception d'un client Modbus C++ robuste avec tests de charge et suites QTest.",
    "exp.r1b4":    "Migration des pipelines CI/CD Jenkins de Qt5 vers Qt6.",
    "exp.role2":   "Ingénieur Systèmes Embarqués",
    "exp.r2b1":    "Développement d'un système de mise à jour OTA double partition sur Ethernet/USB avec récupération automatique.",
    "exp.r2b2":    "Prototypage de drivers réutilisables pour Timers, Ethernet, Flash, ADC et PCNT.",
    "exp.r2b3":    "Conception de transports micro-ROS personnalisés pour STM32 et d'un bootloader robuste avec gestion des causes de reset.",
    "exp.r2b4":    "Automatisation des workflows de build/test avec GitHub Actions.",
    "exp.role3":   "Ingénieur Mécatronique",
    "exp.r3b1":    "Optimisation de l'ordonnancement des tâches FreeRTOS sur ESP32 pour un multitâche fiable.",
    "exp.r3b2":    "Restructuration de l'interface UART/Ymodem pour une réception fiable des commandes.",
    "exp.r3b3":    "Mise en place d'un banc de test robuste pour valider les fonctionnalités du robot.",
    "exp.role4":   "Instructeur Robotique",
    "exp.r4b1":    "Formation pratique à la conception de PCB avec KiCad, du schéma au prototype.",
    "exp.r4b2":    "Enseignement de la logique numérique et de la programmation registres ATmega328P.",
    "exp.r4b3":    "Encadrement de la conception mécanique et de la mécanique des robots avec SolidWorks.",
    /* projects */
    "proj.eyebrow": "Travaux sélectionnés",
    "proj.title":   "Projets.",
    "proj.lead":    "Survolez une carte pour révéler l'illustration, puis cliquez pour la retourner et voir la vraie photo.",
    /* achievements */
    "ach.eyebrow":  "Réalisations",
    "ach.title":    "Points forts.",
    "ach.lead":     "Compétitions, forums et reconnaissances en chemin.",
    "ach.a1title":  "Mentor à RoboCup Asia Pacific 2024",
    "ach.a1desc":   "Encadrement d'une équipe étudiante à RoboCup Asia Pacific 2024 en Corée du Sud, avec Discovery Club Junior.",
    "ach.a2title":  "Forum de Développement de la Jeunesse Sino-Arabe",
    "ach.a2desc":   "Participation au Forum de Développement de la Jeunesse Sino-Arabe en Chine, avec le Ministère des Sports et de la Jeunesse.",
    "ach.a3title":  "1er Prix — Qualification Nationale Eurobot",
    "ach.a3desc":   "Premier prix à la Qualification Nationale Eurobot, avec l'INSAT.",
    "ach.a4title":  "1er Prix — Compétition Robot Autonome, ROBOCUP ENSI 5.0",
    "ach.a4desc":   "Première place à la compétition de robots autonomes ROBOCUP ENSI 5.0, avec l'INSAT.",
    /* certificates */
    "cert.eyebrow": "Certificats",
    "cert.title":   "Diplômes & certifications.",
    "cert.c1title": "Altium Designer Pro — De la conception à la fabrication",
    "cert.c1meta":  "Formateur : Thameur Chebbi · 21 heures · En ligne · 12 oct. – 9 nov. 2024",
    "cert.c1desc":  "Conception avancée de PCB sur 2 et 4 couches, développement de symboles/empreintes selon les normes IPC, conception hautes fréquences et signaux mixtes, implémentation SPI/I2C/UART/USB, simulation LTspice et documentation complète.",
    /* contact */
    "contact.eyebrow":     "Parlons-en",
    "contact.title":       "Construisons ensemble.",
    "contact.lead":        "Je suis toujours ouvert à de nouvelles opportunités et à des projets embarqués passionnants. Connectons-nous et discutons de ce que nous pouvons créer ensemble.",
    "contact.emailLabel":  "E-mail",
    "contact.phoneLabel":  "Téléphone",
    "contact.locationLabel": "Belfort, France",
    "contact.cv":          "Télécharger CV",
    /* footer */
    "footer.top": "Retour en haut ↑",
  },
};

/* ------ core i18n engine ------ */
let currentLang = localStorage.getItem("lang") || "en";

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  const dict = TRANSLATIONS[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  /* button label = the language you will switch TO */
  const label = document.getElementById("langLabel");
  if (label) label.textContent = lang === "en" ? "FR" : "EN";

  /* update <html lang> for accessibility / SEO */
  document.documentElement.lang = lang;
}

/* ------ wire up the toggle button ------ */
const langToggle = document.getElementById("langToggle");
if (langToggle) {
  langToggle.addEventListener("click", () => {
    langToggle.classList.add("switching");
    langToggle.addEventListener("animationend", () => {
      langToggle.classList.remove("switching");
    }, { once: true });
    applyLanguage(currentLang === "en" ? "fr" : "en");
  });
}

/* apply saved (or default) language on first load */
applyLanguage(currentLang);