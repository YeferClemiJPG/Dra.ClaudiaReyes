import {
  createIcons,
  ArrowUpRight,
  ArrowDown,
  ContactRound,
  Download,
  Camera,
  Mail,
  MessageCircle,
  Phone,
  QrCode,
  Rotate3d,
  Nfc,
  X,
  Copy,
} from "lucide";
import { animate, inView } from "motion";

createIcons({
  icons: {
    ArrowUpRight,
    ArrowDown,
    ContactRound,
    Download,
    Camera,
    Mail,
    MessageCircle,
    Phone,
    QrCode,
    Rotate3d,
    Nfc,
    X,
    Copy,
  },
  attrs: { "aria-hidden": "true", focusable: "false" },
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const animations = new Set();
const reveal = (element) => {
  if (reducedMotion.matches) return;
  const animation = animate(
    element,
    { opacity: [0, 1], y: [18, 0] },
    { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  );
  animations.add(animation);
  animation.then(() => animations.delete(animation));
};
inView(".reveal", reveal, { amount: 0.2 });
reducedMotion.addEventListener("change", () => {
  if (!reducedMotion.matches) return;
  for (const animation of animations) animation.stop();
  animations.clear();
  document.querySelectorAll(".reveal").forEach((element) => {
    element.style.opacity = "1";
    element.style.transform = "none";
  });
});

const card = document.getElementById("digital-card");
const front = document.getElementById("card-front");
const back = document.getElementById("card-back");
const flipButton = document.querySelector("[data-flip]");
flipButton.addEventListener("click", () => {
  const flipped = card.classList.toggle("is-flipped");
  flipButton.setAttribute("aria-pressed", String(flipped));
  flipButton.querySelector("[data-flip-label]").textContent = flipped
    ? "Volver a la tarjeta"
    : "Girar para ver el QR";
  front.setAttribute("aria-hidden", String(flipped));
  back.setAttribute("aria-hidden", String(!flipped));
  front.inert = flipped;
  back.inert = !flipped;
});

const dialog = document.getElementById("contact-dialog");
let opener = null;
document.querySelectorAll("[data-open-contact]").forEach((button) => {
  button.addEventListener("click", () => {
    opener = button;
    dialog.showModal();
    document.body.classList.add("dialog-open");
    dialog.querySelector("[data-close-contact]").focus();
    if (!reducedMotion.matches)
      animate(dialog, { opacity: [0, 1], y: [12, 0] }, { duration: 0.22 });
  });
});
dialog
  .querySelector("[data-close-contact]")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  )
    dialog.close();
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  opener?.focus();
});

const toast = document.querySelector(".toast");
let toastTimer;
function announce(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 4200);
}
const copyButton = document.querySelector("[data-copy-email]");
copyButton.addEventListener("click", async () => {
  const email = copyButton.dataset.copyEmail;
  let copied = false;
  try {
    await navigator.clipboard.writeText(email);
    copied = true;
  } catch {
    const input = document.createElement("textarea");
    input.value = email;
    input.readOnly = true;
    input.style.position = "fixed";
    input.style.left = "-9999px";
    document.body.append(input);
    input.select();
    try {
      copied = document.execCommand("copy");
    } catch {
      copied = false;
    }
    input.remove();
    copyButton.focus();
  }
  if (copied) {
    copyButton.querySelector("[data-copy-label]").textContent = "Copiado";
    announce("Correo copiado al portapapeles");
    setTimeout(() => {
      copyButton.querySelector("[data-copy-label]").textContent = "Copiar";
    }, 3500);
  } else {
    const range = document.createRange();
    range.selectNodeContents(document.querySelector(".email-value"));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    announce("Correo seleccionado. Utilice la opción Copiar de su navegador.");
  }
});
