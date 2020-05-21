import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function createRootElement(selector) {
  const rootContainer = document.createElement("div");
  rootContainer.setAttribute("id", selector);
  return rootContainer;
}

function addRootElement(rootElem) {
  document.body.insertBefore(
    rootElem,
    document.body.lastElementChild.nextElementSibling
  );
}

function usePortal(selector) {
  const rootElemRef = useRef(null);

  useEffect(function setupElement() {
    const existingParent = document.querySelector(selector);
    const parentElem = existingParent || createRootElement(selector);

    if (!existingParent) {
      addRootElement(parentElem);
    }

    // https://www.jayfreestone.com/writing/react-portals-with-hooks
    parentElem.appendChild(rootElemRef.current);

    return function removeElement() {
      rootElemRef.current.remove();
      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  }, []);

  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement("div");
    }
    return rootElemRef.current;
  }

  return getRootElem();
}

const Portal = ({ selector, children }) => {
  const target = usePortal(selector);
  return createPortal(children, target);
};

export default Portal;
