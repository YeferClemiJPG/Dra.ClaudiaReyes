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
  Check,
  Share2,
} from "lucide";
import { inView } from "motion";
import { animate } from "motion/mini";

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
    Check,
    Share2,
  },
  attrs: { "aria-hidden": "true", focusable: "false" },
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
const revealElements = [...document.querySelectorAll(".reveal")];
const revealed = new WeakSet();
const revealAnimations = new Map();
const clearMotionStyles = (element) => {
  element.style.removeProperty("opacity");
  element.style.removeProperty("transform");
};
const reveal = (element) => {
  if (revealed.has(element)) return;
  revealed.add(element);
  if (reducedMotion.matches) return;
  const animation = animate(
    element,
    { opacity: [0, 1], transform: ["translateY(18px)", "translateY(0px)"] },
    { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  );
  revealAnimations.set(element, animation);
  animation.then(() => {
    if (revealAnimations.get(element) !== animation) return;
    revealAnimations.delete(element);
    // Let CSS hover/focus transforms work after the entrance finishes.
    clearMotionStyles(element);
  });
};
const stopReveals =
  !reducedMotion.matches && "IntersectionObserver" in window
    ? inView(revealElements, reveal, { amount: 0.2 })
    : () => {};

const header = document.querySelector(".site-header");
const navigationLinks = [
  ...document.querySelectorAll(
    '.site-header nav a[href="#perfil"], .site-header nav a[href="#contacto"], .site-header nav a[href="#conexiones"]',
  ),
];
const sections = ["perfil", "contacto", "conexiones"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);
let scrollFrame = 0;
function updateNavigation() {
  scrollFrame = 0;
  header?.classList.toggle("is-scrolled", window.scrollY > 30);
  const marker = (header?.getBoundingClientRect().height || 0) + 48;
  let activeSection = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= marker) activeSection = section;
  }
  if (
    window.scrollY > 0 &&
    Math.ceil(window.scrollY + window.innerHeight) >=
      document.documentElement.scrollHeight - 2
  )
    activeSection = sections.at(-1);
  for (const link of navigationLinks) {
    const active = link.getAttribute("href") === `#${activeSection?.id}`;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
}
function scheduleNavigationUpdate() {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(updateNavigation);
}
window.addEventListener("scroll", scheduleNavigationUpdate, { passive: true });
window.addEventListener("resize", scheduleNavigationUpdate);
window.addEventListener("pageshow", scheduleNavigationUpdate);
updateNavigation();

const interactiveSurfaces = [
  ...document.querySelectorAll("[data-interactive-surface]"),
];
const pointerFrames = new Map();
function resetPointer(surface) {
  cancelAnimationFrame(pointerFrames.get(surface));
  pointerFrames.delete(surface);
  surface.style.removeProperty("--pointer-x");
  surface.style.removeProperty("--pointer-y");
}
for (const surface of interactiveSurfaces) {
  surface.addEventListener("pointermove", (event) => {
    if (
      reducedMotion.matches ||
      !finePointer.matches ||
      event.pointerType === "touch"
    )
      return;
    cancelAnimationFrame(pointerFrames.get(surface));
    pointerFrames.set(
      surface,
      requestAnimationFrame(() => {
        pointerFrames.delete(surface);
        const rect = surface.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const x = Math.max(
          0,
          Math.min(100, ((event.clientX - rect.left) / rect.width) * 100),
        );
        const y = Math.max(
          0,
          Math.min(100, ((event.clientY - rect.top) / rect.height) * 100),
        );
        surface.style.setProperty("--pointer-x", `${x}%`);
        surface.style.setProperty("--pointer-y", `${y}%`);
      }),
    );
  });
  surface.addEventListener("pointerleave", () => resetPointer(surface));
  surface.addEventListener("pointercancel", () => resetPointer(surface));
}
finePointer.addEventListener("change", () => {
  if (!finePointer.matches) interactiveSurfaces.forEach(resetPointer);
});

const card = document.getElementById("digital-card");
const front = document.getElementById("card-front");
const back = document.getElementById("card-back");
const flipButton = document.querySelector("[data-flip]");
if (card && front && back && flipButton) {
  flipButton.addEventListener("click", () => {
    const flipped = card.classList.toggle("is-flipped");
    flipButton.setAttribute("aria-pressed", String(flipped));
    const label = flipButton.querySelector("[data-flip-label]");
    if (label)
      label.textContent = flipped
        ? "Volver a la tarjeta"
        : "Girar para ver el QR";
    front.setAttribute("aria-hidden", String(flipped));
    back.setAttribute("aria-hidden", String(!flipped));
    front.inert = flipped;
    back.inert = !flipped;
  });
}

const dialog = document.getElementById("contact-dialog");
const toast = document.querySelector(".toast");
const contactStatus = document.querySelector("[data-contact-status]");
let announcementTimer;
function clearAnnouncement() {
  clearTimeout(announcementTimer);
  if (toast) {
    toast.classList.remove("visible");
    toast.textContent = "";
  }
  if (contactStatus) contactStatus.textContent = "";
}
function announce(message) {
  clearAnnouncement();
  const target = dialog?.open && contactStatus ? contactStatus : toast;
  if (!target) return;
  target.textContent = message;
  if (target === toast) target.classList.add("visible");
  announcementTimer = setTimeout(clearAnnouncement, 6000);
}
let opener = null;
let dialogAnimation = null;
function stopDialogAnimation() {
  dialogAnimation?.stop();
  dialogAnimation = null;
  if (dialog) clearMotionStyles(dialog);
}
if (dialog && typeof dialog.showModal === "function") {
  document.querySelectorAll("[data-open-contact]").forEach((button) => {
    button.addEventListener("click", () => {
      if (dialog.open) return;
      opener = button;
      clearAnnouncement();
      stopDialogAnimation();
      dialog.showModal();
      document.body.classList.add("dialog-open");
      dialog.querySelector("[data-close-contact]")?.focus();
      if (!reducedMotion.matches) {
        const animation = animate(
          dialog,
          {
            opacity: [0, 1],
            transform: ["translateY(12px)", "translateY(0px)"],
          },
          { duration: 0.22 },
        );
        dialogAnimation = animation;
        animation.then(() => {
          if (dialogAnimation !== animation) return;
          dialogAnimation = null;
          clearMotionStyles(dialog);
        });
      }
    });
  });
  dialog
    .querySelector("[data-close-contact]")
    ?.addEventListener("click", () => dialog.close());
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
  dialog.addEventListener("cancel", stopDialogAnimation);
  dialog.addEventListener("close", () => {
    stopDialogAnimation();
    clearAnnouncement();
    document.body.classList.remove("dialog-open");
    if (opener?.isConnected) opener.focus({ preventScroll: true });
    opener = null;
  });
}

function respectReducedMotion() {
  if (!reducedMotion.matches) return;
  stopReveals();
  for (const animation of revealAnimations.values()) animation.stop();
  revealAnimations.clear();
  revealElements.forEach((element) => {
    revealed.add(element);
    clearMotionStyles(element);
  });
  stopDialogAnimation();
  interactiveSurfaces.forEach(resetPointer);
}
reducedMotion.addEventListener("change", respectReducedMotion);
respectReducedMotion();

function copyWithSelection(text) {
  const previousFocus = document.activeElement;
  const input = document.createElement("textarea");
  input.value = text;
  input.readOnly = true;
  input.tabIndex = -1;
  input.style.position = "fixed";
  input.style.left = "-9999px";
  document.body.append(input);
  input.focus({ preventScroll: true });
  input.select();
  input.setSelectionRange(0, text.length);
  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  } finally {
    input.remove();
    if (previousFocus?.isConnected)
      previousFocus.focus({ preventScroll: true });
  }
  return copied;
}

const copyButton = document.querySelector("[data-copy-email]");
if (copyButton) {
  const label = copyButton.querySelector("[data-copy-label]");
  const defaultLabel = label?.textContent || "Copiar";
  const defaultAriaLabel = copyButton.getAttribute("aria-label");
  let copyTimer;
  let copying = false;
  function resetCopyFeedback() {
    clearTimeout(copyTimer);
    copyButton.classList.remove("is-copied");
    if (label) label.textContent = defaultLabel;
    if (defaultAriaLabel)
      copyButton.setAttribute("aria-label", defaultAriaLabel);
    else copyButton.removeAttribute("aria-label");
  }
  copyButton.addEventListener("click", async () => {
    if (copying) return;
    const email = copyButton.dataset.copyEmail;
    if (!email) return;
    copying = true;
    resetCopyFeedback();
    let copied = false;
    try {
      await navigator.clipboard.writeText(email);
      copied = true;
    } catch {
      copied = copyWithSelection(email);
    } finally {
      copying = false;
    }
    if (copied) {
      copyButton.classList.add("is-copied");
      if (label) label.textContent = "Copiado";
      copyButton.setAttribute("aria-label", "Correo copiado");
      announce("Correo copiado al portapapeles");
      copyTimer = setTimeout(resetCopyFeedback, 3500);
    } else {
      const emailValue = document.querySelector(".email-value");
      const selection = window.getSelection();
      if (emailValue && selection) {
        const range = document.createRange();
        range.selectNodeContents(emailValue);
        selection.removeAllRanges();
        selection.addRange(range);
        announce(
          "Correo seleccionado. Utilice la opción Copiar de su navegador.",
        );
      } else {
        announce(
          "No se pudo copiar. Seleccione el correo para copiarlo manualmente.",
        );
      }
    }
  });
}

const shareButton = document.querySelector("[data-share-contact]");
const contactDownload = document.querySelector("[data-contact-download]");
async function prepareContactSharing() {
  if (!shareButton) return;
  shareButton.hidden = true;
  shareButton.disabled = true;
  if (
    !contactDownload ||
    typeof navigator.share !== "function" ||
    typeof navigator.canShare !== "function" ||
    typeof File !== "function"
  )
    return;
  try {
    const response = await fetch(contactDownload.href);
    if (!response.ok) return;
    const vcard = await response.blob();
    const contents = await vcard.text();
    if (!contents.trimStart().startsWith("BEGIN:VCARD")) return;
    const contactFile = new File(
      [vcard],
      contactDownload.download || "contacto.vcf",
      { type: "text/vcard" },
    );
    if (!navigator.canShare({ files: [contactFile] })) return;
    const label = shareButton.querySelector("[data-share-label]");
    const defaultLabel = label?.textContent || "Compartir contacto";
    shareButton.addEventListener("click", async () => {
      if (shareButton.disabled) return;
      shareButton.disabled = true;
      shareButton.setAttribute("aria-busy", "true");
      if (label) label.textContent = "Abriendo…";
      clearAnnouncement();
      try {
        // The file is ready before this click: keep transient user activation.
        await navigator.share({ files: [contactFile] });
      } catch (error) {
        if (error.name !== "AbortError")
          announce(
            "No se pudo compartir. Puede descargar el contacto e intentarlo de nuevo.",
          );
      } finally {
        shareButton.disabled = false;
        shareButton.removeAttribute("aria-busy");
        if (label) label.textContent = defaultLabel;
      }
    });
    shareButton.disabled = false;
    shareButton.hidden = false;
  } catch {
    // Unsupported file sharing never removes the regular download link.
  }
}
prepareContactSharing();
