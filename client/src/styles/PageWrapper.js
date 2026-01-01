import React, {useRef} from "react";
import keyboardImage from './keyboard.png';

function PageWrapper({ children, keyboardOpacity = 0.7 }) {
    // 20 floating keyboards with random positions
    const keyboardsRef = useRef(
      [...Array(20)].map(() => ({
            width: `${30 + Math.random() * 40}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`, // random rotation
            animation: "float 10s ease-in-out infinite", //floating animation
            pointerEvents: "none", // ignore mouse events
            zIndex: 0,
            opacity: keyboardOpacity,
            rotate: `${Math.random() * 360}deg`,
            }))
    );

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
            {keyboardsRef.current.map((pos, i) => (
                <img
                    key={i}
                    src={keyboardImage}
                    alt="keyboard"
                    style={{
                        position: "absolute",
                        top: pos.top,
                        left: pos.left,
                        width: pos.width,
                        transform: `rotate(${pos.rotate})`,
                        opacity: pos.opacity * keyboardOpacity,
                        pointerEvents: "none",
                    }}
                    />
            ))}
            {children}
            </div>
    );
}

export default PageWrapper;