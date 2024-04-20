import  { useState, useEffect } from "react";
import "./Cursor.css"; // Estilos CSS para el cursor

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const hoverElement = () => {
      setHovered(true);
    };

    const unhoverElement = () => {
      setHovered(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("button, a, .link").forEach((el) => {
      el.addEventListener("mouseenter", hoverElement);
      el.addEventListener("mouseleave", unhoverElement);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("button, a, .link").forEach((el) => {
        el.removeEventListener("mouseenter", hoverElement);
        el.removeEventListener("mouseleave", unhoverElement);
      });
    };
  }, []);

  const cursorClasses = `cursor ${hovered ? "hovered" : ""}`;

  return (
    <div className={cursorClasses} style={{ left: position.x, top: position.y }}>
      {hovered && <span className="view-text">View</span>}
    </div>
  );
};

export default Cursor;


