import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PageWrapper from "./styles/PageWrapper";
import Confetti from "react-confetti";
import trophy from "./styles/trophy.png";


function RecordPage() {
    const{difficulty} = useParams(); // Different content depending on difficulty
    const displayDifficulty = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
    const navigate = useNavigate();

    const [records, setRecords] = useState([]);

    // Look at leaderboard
    useEffect(() => {
        fetch("http://localhost:5000/api/results/leaderboard")
            .then(res => res.json())
            .then(data => {
                const section = data.find(
                    d => d.difficulty === difficulty
                );
                setRecords(section?.records || []);
            })
            .catch(err => console.error(err));
    }, [difficulty]);

    const medals = ["🥇", "🥈", "🥉"];

    return (
        <PageWrapper keyboardOpacity={0.5}>
            {/* Left side trophy */}
            <img
                src={trophy}
                alt="Trophy"
                style={{
                    marginLeft: "100px",
                    marginBottom: "50px",
                    position: "fixed",
                    left: "40px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "200px",
                    opacity: 1,
                    pointerEvents: "none",
                    zIndex: 0,
                    filter: "drop-shadow(0 0 12px rgba(34,211,238,0.6))",
                }}
            />

            {/* Right side trophy */}
            <img
                src={trophy}
                alt="Trophy"
                style={{
                    position: "fixed",
                    marginRight: "100px",
                    marginBottom: "50px",
                    right: "40px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "200px",
                    opacity: 1,
                    pointerEvents: "none",
                    zIndex: 0,
                    filter: "drop-shadow(0 0 12px rgba(34,211,238,0.6))",
                }}
            />

            <Confetti
                numberOfPieces={170}
                recycle={false}
                gravity={0.25}
            />

            <div style={styles.container}>
                <h1 style={styles.title}>
                    🏆 Top {displayDifficulty} Records 🏆
                </h1>
                {/* Row of records */}
                <div style={styles.cardRow}>
                   {[0, 1, 2].map(index => {
                    const record = records[index];

                    return (
                        <div
                            key={index}
                            style={{
                                ...styles.cardAnimated,
                                animationDelay: `${0.2 + index * 0.2}s`,
                            }}
                        >
                            <div style={styles.card}>
                                {record ? (
                                    <div style={{ textAlign: "center" }}>
                                        <div style={styles.rankContainer}>
                                            <div style={styles.medal}>
                                                {medals[index]}
                                            </div>
                                            <h2 style={styles.rank}>
                                                {index + 1}
                                            </h2>
                                        </div>
                                        <div style={styles.username}>
                                            {record.username}
                                        </div>
                                        <div style={styles.wpm}>
                                            {record.wpm} WPM
                                        </div>
                                    </div>
                                ) : (
                                    <h2 style={styles.rank}>
                                        {index + 1}
                                    </h2>    
                                )}
                            </div>
                        </div>
                    );
                   })}
                </div>
            {/* Back button to go back to main page */}
            <button
                onClick={() => navigate("/main")}
                style={{
                    marginTop: "100px",
                    padding: "30px 60px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "#3182ce",
                    color: "#fff",
                    fontSize: "25px",
                }}
            >
                Back
            </button>
            </div>
        </PageWrapper>
    );
}

const styles = {
    container: {
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "60px",
    },
    title: {
        fontSize: "2.2rem",
        marginBottom: "40px",
    },
    cardRow: {
        display: "flex",
        gap: "30px",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    card: {
        backgroundColor: "rgba(10, 10, 40, 0.9)",
        boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)", // neon glow
        border: "1px solid rgba(34, 211, 238, 0.5)", 
        width: "180px",
        height: "220px",
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    rank: {
        fontSize: "4rem",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    username: {
        fontSize: "1.3rem",
        fontWeight: "600",
        color: "#22d3ee",
    },
    wpm: {
        fontSize: "1rem",
        marginTop: "6px",
        opacity: "0.8",
    },
    cardAnimated: {
        opacity: 0,
        transform: "scale(0.8)",
        animation: "fadeInScale 0.6s ease forwards",
    },
    rankContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    medal: {
        fontSize: "2.2rem",
        marginBottom: "-40px",
    },
};

export default RecordPage;