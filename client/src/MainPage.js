import PageWrapper from "./styles/PageWrapper";

// Allows users to choose between difficulty
function MainPage() {
    return (
        <PageWrapper>
            <div style={styles.container}>
                <h1 style={styles.title}>
                    Select the Difficulty Level
                </h1>
                <div style={styles.cardRow}>
                    {/* Easy */}
                    <div style={styles.card}>
                        <h2 style={styles.cardTitle}>Easy</h2>
                        <p style={styles.cardDesc}> Recommended for beginners. </p>
                        <button style={styles.easy}>Start</button>
                    </div>
                    {/* Medium */}
                    <div style={styles.card}>
                        <h2 style={styles.cardTitle}>Medium</h2>
                        <p style={styles.cardDesc}> Recommended for average players. </p>
                        <button style={styles.medium}>Start</button>
                    </div>
                    {/* Hard */}
                    <div style={styles.card}>
                        <h2 style={styles.cardTitle}>Hard</h2>
                        <p style={styles.cardDesc}> Recommended for experts. </p>
                        <button style={styles.hard}>Start</button>
                    </div>
                </div>
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
        color: "#fff",
        marginTop: "20px",
    },
    medium: {
        padding: "15px 30px",
        fontSize: "20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "#dd6b20",
        color: "#000",
    },
    hard: {
        padding: "15px 30px",
        fontSize: "20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "#e53e3e",
        color: "#fff",
        marginTop: "20px",
    },
  };
export default MainPage;