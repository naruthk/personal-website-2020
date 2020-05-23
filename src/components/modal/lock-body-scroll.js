export default function lockBodyScroll(value) {
  if (typeof document !== "object") return;

  const element = document.getElementById("___gatsby");

  if (!element) return;

  if (value === true) {
    element.classList.add("scroll-lock");
    return;
  }

  const modalRoot = document.getElementById("__modal");

  if (!modalRoot || modalRoot.children.length <= 1)
    element.classList.remove("scroll-lock");
}
