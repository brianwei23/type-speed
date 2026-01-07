import PageWrapper from "./styles/PageWrapper";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import FunMusic from "./styles/FunMusic.mp3"

// Allows users to choose between difficulty
function MainPage() {
    const navigate = useNavigate();

    const audioRef = useRef(null);

    // Logout
    const handleLogout = () => {
        localStorage.removeItem("token"); //Remove token
        navigate("/login", { replace: true }); // Redirect to login page
    };

    // Play music when user enters page
    useEffect(() => {
        const audio = audioRef.current;

        if (audio) {
            audio.volume = 0.35;
            audio.play().catch(() => {});
        }
        return () => {
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        };
    }, []);

    return (
        <PageWrapper keyboardOpacity={0.7}>
            <audio ref={audioRef} src={FunMusic} />
            <div style={styles.container}>
                <h1 style={{
                    ...styles.title,
                    color: "#14b8a6",
                    fontFamily: "'Orbitron', sans-serif",
                }}>
                    Select the Difficulty Level
                </h1>
                <div style={styles.cardRow}>
                    {/* Easy */}
                    <div style={styles.card}>
                        <h2 style={{ ...styles.cardTitle, ...styles.easyTitle }}>Easy</h2>
                        <p style={{ ...styles.cardDesc, ...styles.easyTitle }}> Recommended for beginners. </p>
                        <button 
                            style={styles.easy}
                            onClick={() => navigate("/test/easy")}
                        >
                            Start
                        </button>
                        <button
                            style={styles.record}
                            onClick={() => navigate("/record/easy")}
                        >
                           🏆Best Records🏆
                        </button>
                    </div>
                    {/* Medium */}
                    <div style={styles.card}>
                        <h2 style={{ ...styles.cardTitle, ...styles.mediumTitle }}>Medium</h2>
                        <p style={{ ...styles.cardDesc, ...styles.mediumTitle }}> Recommended for average players. </p>
                        <button 
                            style={styles.medium}
                            onClick={() => navigate("/test/medium")}
                        >
                            Start
                        </button>   
                        <button
                            style={styles.record}
                            onClick={() => navigate("/record/medium")}
                        >
                           🏆Best Records🏆
                        </button>
                    </div>
                    {/* Hard */}
                    <div style={styles.card}>
                        <h2 style={{ ...styles.cardTitle, ...styles.hardTitle }}>Hard</h2>
                        <p style={{ ...styles.cardDesc, ...styles.hardTitle }}> Recommended for experts. </p>
                        <button 
                            style={styles.hard}
                            onClick={() => navigate("/test/hard")}
                        >
                            Start
                        </button>
                        <button
                            style={styles.record}
                            onClick={() => navigate("/record/hard")}
                        >
                           🏆Best Records🏆
                        </button>
                    </div>
                </div>
                <button style={styles.logout} onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </PageWrapper>
    );
}

const styles = {
    container: {
        position: "relative",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "60px",
        zIndex: 2,
    },
    title: {
        marginBottom: "40px",
        fontSize: "2rem",
    },
    logout: {
        padding: "30px 50px",
        marginBottom: "30px",
        cursor: "pointer",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#e53e3e",
        color: "#fff",
        marginTop: "60px",
        fontSize: "25px",
        fontFamily: "'Orbitron', sans-serif",
        boxShadow: "0 0 12px rgba(229,62,62,0.5)",
    },
    cardRow: {
        display: "flex",
        gap: "30px",
        justifyContent: "center",
        flexWrap: "wrap", 
        zIndex: 2,
    },
    card: {
        backgroundColor: "rgba(0, 20, 60, 0.85)",
        padding: "30px",
        borderRadius: "16px",
        width: "220px",
        textAlign: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        zIndex: 2,
    },
    cardTitle: {
        fontSize: "1.5 rem",
        marginBottom: "10px",
    },
    cardDesc: {
        fontSize: "0.9 rem",
    },
    easy: {
        padding: "15px 30px",
        fontSize: "20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "#38a169",
        color: "black",
        marginTop: "20px",
        fontFamily: "'Orbitron', sans-serif",
        boxShadow: "0 0 12px rgba(56,161,105,0.6)",
    },
    medium: {
        padding: "15px 30px",
        fontSize: "20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "purple",
        color: "black",
        fontFamily: "'Orbitron', sans-serif",
        marginTop: "20px",
        boxShadow: "0 0 12px rgba(128,0,128,0.6)",
    },
    hard: {
        padding: "15px 30px",
        fontSize: "20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "#e53e3e",
        color: "black",
        marginTop: "20px",
        fontFamily: "'Orbitron', sans-serif",
        boxShadow: "0 0 12px rgba(229,62,62,0.6)",
    },
    easyTitle: {
        color: "green",
        fontFamily: "'Orbitron', sans-serif",
    },
    mediumTitle: {
        color: "purple",
        fontFamily: "'Orbitron', sans-serif",
    },
    hardTitle: {
        color: "red",
        fontFamily: "'Orbitron', sans-serif",
    },
    record: {
        padding: "15px 30px",
        paddingLeft: "23px",
        fontSize: "13px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "#ff5722",
        color: "black",
        marginTop: "20px",
        width: "200px",
        height: "70px",
        marginLeft: "10px",
        fontFamily: "'Orbitron', sans-serif",
        boxShadow: "0 0 12px rgba(255,165,0,0.6)",
    }
  };
export default MainPage;