import { useEffect, useState } from "react";

export const useSizes = (imgRef) => {
  const [sizes, setSizes] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.addEventListener("load", (e) => {
        const { offsetWidth: width, offsetHeight: height } = e.target;
        setSizes({ width, height });
      });
    }
  }, [imgRef]);

  return {
    width: sizes.width,
    height: sizes.height,
  };
};
