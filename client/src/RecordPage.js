import {useParams} from "react-router-dom";
import PageWrapper from "./styles/PageWrapper";

function RecordPage() {
    const{difficulty} = useParams(); // Different content depending on difficulty
    const displayDifficulty = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);

    return (
        <PageWrapper keyboardOpacity={0.5}>
            <div style={styles.container}>
                <h1 style={styles.title}>
                    🏆 Top {displayDifficulty} Records 🏆
                </h1>
                {/* Row of records */}
                <div style={styles.cardRow}>
                    <div style={{ ...styles.cardAnimated, animationDelay: "0.2s" }}>
                      <div style={styles.card}>
                           <h2 style={styles.rank}>1</h2>
                      </div>
                    </div>
                    <div style={{ ...styles.cardAnimated, animationDelay: "0.4s" }}>
                        <div style={styles.card}>
                            <h2 style={styles.rank}>2</h2>
                        </div>
                    </div>
                    <div style={{ ...styles.cardAnimated, animationDelay: "0.6s" }}>
                        <div style={styles.card}>
                          <h2 style={styles.rank}>3</h2>
                        </div>
                    </div>
                </div>
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
        backgroundColor: "rgba(0, 20, 60, 0.85)",
        width: "180px",
        height: "220px",
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
    },
    rank: {
        fontSize: "4rem",
        fontWeight: "bold",
    },
    cardAnimated: {
        backgroundColor: "rgba(0, 20, 60, 0.85)",
        width: "180px",
        height: "220px",
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
        opacity: 0,
        transform: "scale(0.8)",
        animation: "fadeInScale 0.6s ease forwards",
    },
};

export default RecordPage;