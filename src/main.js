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
const revealElements = [...document.querySelectorAll(".reveal, [data-reveal]")];
const revealed = new WeakSet();
const revealAnimations = new Map();
const clearMotionStyles = (element) => {
  element.style.removeProperty("opacity");
  element.style.removeProperty("transform");
};
function revealDelay(element) {
  const delay =
    element.dataset.revealDelay ??
    getComputedStyle(element).getPropertyValue("--reveal-delay").trim();
  const milliseconds =
    Number.parseFloat(delay) *
    (String(delay).endsWith("s") && !String(delay).endsWith("ms") ? 1000 : 1);
  return Number.isFinite(milliseconds)
    ? Math.max(0, Math.min(milliseconds, 700)) / 1000
    : 0;
}
const reveal = (element) => {
  if (revealed.has(element)) return;
  revealed.add(element);
  if (reducedMotion.matches) return;
  const portrait = element.dataset.revealType === "portrait";
  const duration = portrait ? 0.68 : 0.48;
  const delay = revealDelay(element);
  const animation = animate(
    element,
    {
      opacity: [0, 1],
      transform: portrait
        ? ["scale(1.015)", "scale(1)"]
        : ["translateY(20px)", "translateY(0px)"],
    },
    { duration, delay, ease: [0.16, 1, 0.3, 1] },
  );
  const entrance = { animation, timer: null };
  revealAnimations.set(element, entrance);
  entrance.timer = setTimeout(
    () => {
      if (revealAnimations.get(element) !== entrance) return;
      animation.stop();
      revealAnimations.delete(element);
      // Let CSS hover/focus transforms work after the entrance finishes.
      clearMotionStyles(element);
    },
    (duration + delay) * 1000,
  );
};
// Start the visible hero in this task, before waiting for viewport callbacks.
// The HTML stays readable without JavaScript or if animation setup fails.
if (!reducedMotion.matches) {
  for (const element of revealElements) {
    const bounds = element.getBoundingClientRect();
    if (bounds.height && bounds.bottom > 0 && bounds.top < window.innerHeight)
      reveal(element);
  }
}
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
  const pointer = pointerFrames.get(surface);
  if (pointer) cancelAnimationFrame(pointer.frame);
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
    const pendingPointer = pointerFrames.get(surface);
    if (pendingPointer) {
      pendingPointer.x = event.clientX;
      pendingPointer.y = event.clientY;
      return;
    }
    const pointer = { x: event.clientX, y: event.clientY, frame: null };
    pointerFrames.set(surface, pointer);
    pointer.frame = requestAnimationFrame(() => {
      pointerFrames.delete(surface);
      const rect = surface.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = Math.max(
        0,
        Math.min(100, ((pointer.x - rect.left) / rect.width) * 100),
      );
      const y = Math.max(
        0,
        Math.min(100, ((pointer.y - rect.top) / rect.height) * 100),
      );
      surface.style.setProperty("--pointer-x", `${x}%`);
      surface.style.setProperty("--pointer-y", `${y}%`);
    });
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
let dialogState = "closed";
let dialogTransition = null;
function stopDialogAnimation(clearStyles = true) {
  if (dialogTransition) {
    clearTimeout(dialogTransition.timer);
    dialogTransition.animation.stop();
    dialogTransition = null;
  }
  if (dialog && clearStyles) clearMotionStyles(dialog);
}
function animateDialog(keyframes, duration, ease, onComplete) {
  const transition = {
    animation: animate(dialog, keyframes, { duration, ease }),
    timer: null,
  };
  dialogTransition = transition;
  // An explicit cancellable completion avoids waiting on stopped animations.
  transition.timer = setTimeout(() => {
    if (dialogTransition === transition) onComplete();
  }, duration * 1000);
}
function finishDialogClose() {
  stopDialogAnimation();
  dialogState = "closed";
  dialog?.classList.remove("is-closing");
  if (dialog?.open) dialog.close();
}
function requestDialogClose() {
  if (!dialog?.open || dialogState === "closing") return;
  stopDialogAnimation(false);
  if (reducedMotion.matches) {
    finishDialogClose();
    return;
  }
  dialogState = "closing";
  dialog.classList.add("is-closing");
  animateDialog(
    { opacity: [null, 0], transform: [null, "translateY(10px) scale(0.99)"] },
    0.18,
    [0.4, 0, 1, 1],
    finishDialogClose,
  );
}
if (dialog && typeof dialog.showModal === "function") {
  document.querySelectorAll("[data-open-contact]").forEach((button) => {
    button.addEventListener("click", () => {
      if (dialog.open && dialogState !== "closing") return;
      const reversingClose = dialog.open && dialogState === "closing";
      stopDialogAnimation(!reversingClose);
      opener = button;
      clearAnnouncement();
      dialog.classList.remove("is-closing");
      if (!dialog.open) dialog.showModal();
      document.body.classList.add("dialog-open");
      dialog.querySelector("[data-close-contact]")?.focus();
      if (reducedMotion.matches) {
        dialogState = "open";
        clearMotionStyles(dialog);
        return;
      }
      dialogState = "opening";
      animateDialog(
        {
          opacity: [reversingClose ? null : 0, 1],
          transform: [
            reversingClose ? null : "translateY(18px) scale(0.985)",
            "translateY(0px) scale(1)",
          ],
        },
        0.32,
        [0.16, 1, 0.3, 1],
        () => {
          stopDialogAnimation();
          dialogState = "open";
        },
      );
    });
  });
  dialog
    .querySelector("[data-close-contact]")
    ?.addEventListener("click", requestDialogClose);
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      requestDialogClose();
  });
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    requestDialogClose();
  });
  dialog.addEventListener("close", () => {
    // A queued close event from the previous opening must not close a new one.
    if (dialog.open) return;
    stopDialogAnimation();
    dialogState = "closed";
    dialog.classList.remove("is-closing");
    clearAnnouncement();
    document.body.classList.remove("dialog-open");
    if (opener?.isConnected) opener.focus({ preventScroll: true });
    opener = null;
  });
}

function respectReducedMotion() {
  if (!reducedMotion.matches) return;
  stopReveals();
  for (const entrance of revealAnimations.values()) {
    clearTimeout(entrance.timer);
    entrance.animation.stop();
  }
  revealAnimations.clear();
  revealElements.forEach((element) => {
    revealed.add(element);
    clearMotionStyles(element);
  });
  if (dialogState === "closing") finishDialogClose();
  else {
    stopDialogAnimation();
    if (dialog?.open) dialogState = "open";
  }
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
