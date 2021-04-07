import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowWidth);
    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, []);

  return {
    width,
  };
};
