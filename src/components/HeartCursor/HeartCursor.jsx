import { useEffect } from "react";
import "./HeartCursor.css";

function HeartCursor() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const heart = document.createElement("span");

      heart.className = "cursor-heart";
      heart.innerHTML = "♥";

      heart.style.left = `${e.clientX}px`;
      heart.style.top = `${e.clientY}px`;

      // Slightly random size
      const size = 10 + Math.random() * 10;
      heart.style.fontSize = `${size}px`;

      // Random rotation
      const rotation = -25 + Math.random() * 50;
      heart.style.setProperty("--rotation", `${rotation}deg`);

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 900);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="heart-cursor">♥</div>;
}

export default HeartCursor;