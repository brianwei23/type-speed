import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageWrapper from "./styles/PageWrapper";

function TypingPage() {
    const { difficulty } = useParams(); // Get difficulty from URL params
    const navigate = useNavigate();
    const [sentence, setSentence] = useState("");

    useEffect(() => {
        const fetchSentence = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/sentences/${difficulty}`);
                const data = await res.json();
                setSentence(data.sentence);
            } catch (err){
                console.error(err);
            }
            };
            fetchSentence();
    }, [difficulty]);
    
    return (
        <PageWrapper>
            <div style={{color: "white", textAlign: "center", marginTop: "50px"}}>
                <h1> Typing Test - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</h1>
                <h2> You can begin typing now! </h2>
                <p style={{ fontSize: "24px", marginTop: "20px" }}>{sentence}</p>
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
export default TypingPage;