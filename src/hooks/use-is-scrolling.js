import { useState, useEffect } from "react";

const useIsScrollingHook = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolledPosition, setScrolledPosition] = useState(0);

  const updateScrollActivity = () => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;

    setIsActive(scrollTop > 0);
    setScrolledPosition(scrollTop);
  };

  useEffect(() => {
    if (!document) return {};

    window.addEventListener("scroll", updateScrollActivity);

    return () => {
      window.removeEventListener("scroll", updateScrollActivity);
      setIsActive(false);
      setScrolledPosition(0);
    };
  }, []);

  return {
    isActive,
    scrolledPosition,
  };
};

export default useIsScrollingHook;
