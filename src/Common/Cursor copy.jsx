/* import { useEffect, useRef, useState } from "react";

const CURSOR_SPEED = 0.09;

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0; 

export const Cursor = () => {
  const cursorOutline = useRef();
  const [setHoverButton] = useState(false);

  const animate = () => {
    let distX = mouseX - outlineX;
    let distY = mouseY - outlineY;

    outlineX = outlineX + distX * CURSOR_SPEED;
    outlineY = outlineY + distY * CURSOR_SPEED;

   
    const maxX =
      document.documentElement.clientWidth - cursorOutline.current.offsetWidth;
    const maxY =
      document.documentElement.clientHeight -
      cursorOutline.current.offsetHeight;
    outlineX = Math.min(Math.max(outlineX, 0), maxX);
    outlineY = Math.min(Math.max(outlineY, 0), maxY);

    cursorOutline.current.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const mouseEventsListener = document.addEventListener(
      "mousemove",
      function (event) {
        mouseX = event.pageX;
        mouseY = event.pageY;
      }
    );
    const animateEvent = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", mouseEventsListener);
      cancelAnimationFrame(animateEvent);
    };
  }, []);

  useEffect(() => {
    const mouseEventListener = document.addEventListener(
      "mouseover",
      function () {
        setHoverButton(true);
      }
    );

    const mouseOutEventListener = document.addEventListener(
      "mouseout",
      function () {
        setHoverButton(false);
      }
    );

    return () => {
      document.removeEventListener("mouseover", mouseEventListener);
      document.removeEventListener("mouseout", mouseOutEventListener);
    };
  }, []);

  return (
    <div
      className="z-50 fixed rounded-full pointer-events-none"
      style={{
        width: "10px", 
        height: "10px", 
        backgroundColor: "#292929", 
        transform: "translate(-50%, -50%)", 
        transition: "none", 
        borderRadius: "50%", 
        zIndex: "999", 
        pointerEvents: "none", 
      }}
      ref={cursorOutline}
    ></div>
  );
}; */
