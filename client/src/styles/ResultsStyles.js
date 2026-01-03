export const pageStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "80px",
    overflow: "hidden",
};

export const cardBase = {
    width: "220px",
    height: "250px",
    backgroundColor: "#121826",
    borderRadius: "12px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
    fontWeight: "bold",
    boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
    position: "relative",
};

export const orangeCard = {
    backgroundColor: "orange",
};

export const greenCard = {
    backgroundColor: "green",
}

// Animation for results
export const slideFromTop = {
    animation: "dropDown 1s ease-out forwards",
};

export const slideFromBottom = {
    animation: "riseUp 1s ease-out forwards",
};

export const swing = (delay = "1s") => ({
    animation: `swing 1.4s ease-in-out ${delay} forwards`,
});