import { useEffect, useState } from "react";

export const useKeyPressed = (key: string) => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === key) {
        setIsKeyPressed(true);
      }
    };

    const handleKeyUp = (event: any) => {
      if (event.key === key) {
        setIsKeyPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return [isKeyPressed];
};
