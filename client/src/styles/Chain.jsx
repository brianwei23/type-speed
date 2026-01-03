function Chain({ length = 15, attach = "top"}) {
    return (
        <div 
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "absolute",
                ...(attach === "top" ? { top: "-300px", right: "90px" } : { bottom: "-293px", right: "90px" }),
            }}
            >
                {Array.from({ length }).map((_, i) => (
                    <div
                        key={i}
                        style={{
                            width: "20px",
                            height: "30px",
                            border: "7px solid #9a9a9a",
                            borderRadius: "50%",
                            marginBottom: i === length - 1 ? "0px" : "-15px",
                            transform: i % 2 === 0 ? "rotate(15deg)" : "rotate(-15deg)",
                            background: "transparent",
                            boxShadow:
                                "inset 0 1px 2px rgba(255,255,255,0.4), 0 1px 2px rgba(0,0,0,0.6)",
                        }}
                        />
                    ))}
                  </div>
    );
}
export default Chain;