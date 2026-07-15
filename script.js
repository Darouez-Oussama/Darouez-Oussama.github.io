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
   1. Drop images into  public/projects/  (e.g. smart-plug.jpg)
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
      "Single-Designed a complete automation workflow with sorting, heating, machining, and quality control stages.",
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
  {
    title: "Djekstra Algorithm",
    meta: "Personal Project · 2023",
    points: [
      "Implemented Dijkstra's algorithm for shortest path finding in a graph.",
    ],
    tags: ["Dijkstra", "C++", "Graph Theory"],
    illustration: "/public/illustrations/graph.png",
    photo: "/public/illustrations/graph.png",
  },
  {
    title: "Image Processing Basics",
    meta: "Insat Embedded Vision Course · 2024",
    points: [
      "Implemented basic image processing techniques using Python and OpenCV.",
    ],
    tags: ["Image Processing", "Python", "OpenCV"],
    illustration: "/public/illustrations/img_processing.png",
    photo: "/public/illustrations/img_processing.png",
  },
];

/* ---------- Render projects ---------- */
const projectList = document.getElementById("projectList");
PROJECTS.forEach((p, i) => {
  const li = document.createElement("li");
  const num = String(i + 1).padStart(2, "0");
  li.innerHTML = `
    <div class="project-card" data-cursor="view" role="button" tabindex="0" aria-label="${p.title} — click to reveal photo">
      <div class="project-inner">
        <div class="project-front">
          <img class="project-illustration" src="${p.illustration}" alt="${p.title} illustration" />
          <div class="project-cover">
            <span class="project-index">${num}</span>
            <div>
              <h3>${p.title}</h3>
              <p class="project-meta">${p.meta}</p>
              <ul class="project-points">${p.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
              <div class="project-tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
            </div>
          </div>
          <span class="peek">Click to peek →</span>
        </div>
        <div class="project-back">
          <img class="project-photo" src="${p.photo}" alt="${p.title} photo"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
          <div class="photo-fallback" style="display:none;">Add photo at<br>${p.photo}</div>
          <span class="peek peek-back">↩ Click to flip back</span>
        </div>
      </div>
    </div>`;
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
const dot = document.getElementById("cursorDot");
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
const tilt = document.getElementById("avatarTilt");
const stage = document.getElementById("avatarStage");
const head = document.getElementById("avatarHead");
const body = document.getElementById("avatarBody");

if (tilt && stage && head && body && !isTouch) {
  // Both layers rotate around the SAME low pivot inside the solid shirt.
  // The body follows the head at a fraction of its rotation, so the shoulders
  // move with the head and the shared cut region stays aligned (no discontinuity).
  const headTiltX = 12;  // nod up/down toward the cursor
  const headTiltY = 20;  // turn left/right toward the cursor
  const headRollZ = 4;   // subtle head roll for life
  const bodyFollow = 0.45; // body rotates 45% of the head's amount

  // smoothed targets for a lively, natural feel
  let tX = 0, tY = 0;         // normalized -1..1 pointer offset
  let cX = 0, cY = 0;         // current (eased) values

  window.addEventListener("pointermove", (e) => {
    const rect = stage.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    tX = Math.max(-1, Math.min(1, (e.clientX - cx) / (window.innerWidth / 2)));
    tY = Math.max(-1, Math.min(1, (e.clientY - cy) / (window.innerHeight / 2)));
  });

  const resetTargets = () => { tX = 0; tY = 0; };
  stage.addEventListener("pointerleave", resetTargets);
  window.addEventListener("blur", resetTargets);

  function animateAvatar(t) {
    // ease current values toward the target
    cX += (tX - cX) * 0.09;
    cY += (tY - cY) * 0.09;

    // shared idle sway so both layers breathe together
    const idle = Math.sin(t / 1100) * 1.2;

    // head: full rotation around the low shirt pivot
    head.style.transform =
      `rotateX(${cY * -headTiltX}deg) ` +
      `rotateY(${cX * headTiltY}deg) ` +
      `rotateZ(${cX * headRollZ + idle}deg)`;

    // body: same pivot, reduced rotation so the shoulders follow the head
    body.style.transform =
      `rotateX(${cY * -headTiltX * bodyFollow}deg) ` +
      `rotateY(${cX * headTiltY * bodyFollow}deg) ` +
      `rotateZ(${(cX * headRollZ + idle) * bodyFollow}deg)`;

    requestAnimationFrame(animateAvatar);
  }
  requestAnimationFrame(animateAvatar);
}

/* ---------- Project cards: subtle magnetic tilt (front only) ---------- */
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("pointermove", (e) => {
    if (card.classList.contains("flipped")) { card.style.transform = ""; return; }
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
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

/* stagger the hero reveals a touch */
document.querySelectorAll(".hero .reveal").forEach((el, i) => {
  el.style.transitionDelay = i * 0.08 + "s";
});

/* ---------- Copy email / phone to clipboard on click ---------- */
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // fallback for older / non-secure contexts
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }
}

document.querySelectorAll(".social-btn[data-copy]").forEach((btn) => {
  const label = btn.querySelector(".social-label");
  const original = label ? label.textContent : "";
  btn.addEventListener("click", async (e) => {
    e.preventDefault(); // stay on the page instead of opening mail/dialer
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
