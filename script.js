// Mobile menu toggle
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("primaryNav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Close" : "Menu";
  });

  // Close nav when a link is clicked (mobile)
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      }
    });
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "Menu";
      toggle.focus();
    }
  });
}

// Current year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Hero avatar mouse-tracking tilt (like Robb Owen's portfolio)
const avatar = document.getElementById("heroAvatar");
const img = avatar ? avatar.querySelector(".avatar-img") : null;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (avatar && img && !reduceMotion) {
  const MAX = 16; // max tilt degrees
  let frame = null;

  const onMove = (e) => {
    const rect = avatar.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      img.style.setProperty("--rx", (px * MAX).toFixed(2) + "deg");
      img.style.setProperty("--ry", (-py * MAX).toFixed(2) + "deg");
      img.style.transform =
        "rotateX(var(--ry)) rotateY(var(--rx)) translateZ(30px) scale(1.05)";
    });
  };

  const reset = () => {
    if (frame) cancelAnimationFrame(frame);
    img.style.setProperty("--rx", "0deg");
    img.style.setProperty("--ry", "0deg");
    img.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(20px) scale(1)";
  };

  avatar.addEventListener("mousemove", onMove);
  avatar.addEventListener("mouseleave", reset);
}
