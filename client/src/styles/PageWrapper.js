import React from "react";
import keyboardImage from './keyboard.png';

function PageWrapper({ children }) {
    // 20 floating keyboards with random positions
    const floatingKeyboards = [...Array(20)].map((_, i) => (
        <img
            key = {i}
            src = {keyboardImage}
            alt = "keyboard"
            style = {{
                position: "absolute",
                width: `${30 + Math.random() * 40}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`, // random rotation
                animation: "float 10s ease-in-out infinite", //floating animation
                opacity: 0.3 + Math.random() * 0.5, // random opacity
                pointerEvents: "none", // ignore mouse events
                zIndex: 0
            }}
            />
    ));

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
                overflow: "hidden",
                backgroundColor: "#001f3f"
            }}
            >
              {floatingKeyboards}
              {children} {/*Render page content for login and register process */}
            </div>
    );
}

export default PageWrapper;