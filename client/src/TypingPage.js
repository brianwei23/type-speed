import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageWrapper from "./styles/PageWrapper";
import GameMusic from "./styles/GameMusic.mp3";

function TypingPage() {
    const { difficulty } = useParams(); // Get difficulty from URL params
    const navigate = useNavigate();
    const [sentence, setSentence] = useState("");
    const [input, setInput] = useState("");
    const hasFetched = useRef(false);

    const audioRef = useRef(null);

    // For WPM calculation
    const [startTime, setStartTime] = useState(null);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        const fetchSentence = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_API_URL}/api/sentences/${difficulty}`);
                const data = await res.json();
                setSentence(data.sentence);
            } catch (err){
                console.error(err);
            }
            };
            fetchSentence();
    }, [difficulty]);

    useEffect(() => {
        if (!sentence) return;
        // Show results once test is done
        if (input.length === sentence.length && startTime) {
            const end = Date.now();

            const elapsedSeconds = (end - startTime) / 1000;
            const totalChar = input.length

            const words = totalChar / 5;
            const minutes = elapsedSeconds / 60;
            const wpm = words / minutes;

            const errors = input.split("").reduce((count, char, index) => {
                if (sentence[index] && char !== sentence[index]) return count + 1;
                return count;
            }, 0);

            const accuracy = totalChar > 0
                ? (totalChar - errors) / totalChar * 100
                : 100;

            const finalWPM = wpm * (accuracy / 100);

            // Saving result
            (async (d) => {
                try {
                    console.log("Saving result with difficulty:", d);
                    await fetch(`${process.env.REACT_APP_API_URL}/api/results`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                        body: JSON.stringify({
                            wpm: Number(finalWPM.toFixed(2)),
                            accuracy: Number(accuracy.toFixed(2)),
                            difficulty: d,
                        }),
                    });
                } catch (err) {
                    console.error("Failed to save result:", err);
                } finally {
                    navigate("/results", {
                        state: {
                            rawWPM: wpm,
                            displayWPM: Number(wpm.toFixed(2)),
                            timeSeconds: elapsedSeconds,
                            characters: totalChar,
                            totalErrors: errors,
                            accuracy,
                            finalWPM,
                            difficulty: d,
                        },
                    });
                }
            })(difficulty);
          }
        }, [input, sentence, startTime, difficulty, navigate]);

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
        <PageWrapper keyboardOpacity={0.5}>
            <audio ref={audioRef} src={GameMusic} />
            <div style={{color: "#14b8a6", textAlign: "center", marginTop: "50px", fontFamily: "'Orbitron', sans-serif",}}>
                <h1> Typing Test - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</h1>
                <h2> You can begin typing now! </h2>
                {/* Sentence display */}
                <div 
                    style={{
                        marginTop: "30px",
                        fontSize: "24px",
                        maxWidth: "800px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        lineHeight: "1.5",
                        whiteSpace: "pre-wrap",
                        overflowWrap: "break-word",
                        wordBreak: "break-word",
                        fontFamily: "sans-serif",
                    }}
                    >
                        {sentence.split("").map((char, index) => {
                            let color = "white";
                            if (index < input.length) {
                                color = input[index] === char ? "green" : "red";
                            }
                            return (
                                <span
                                    key={index}
                                    style={{ color }}
                                    >
                                        {char}
                                    </span>
                            );
                        })}
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginTop: "30px",
                        }}
                    >
                      {/* Typing Input Area */}
                      <textarea
                          value={input}
                          onChange={(e) => {
                             const typed = e.target.value;

                             // Begin timer when first char is entered
                             if (!startTime && typed.length === 1) {
                                setStartTime(Date.now());
                             }

                             if (typed.length <= sentence.length) {
                                 setInput(typed);
                             }
                            }}
                           autoFocus
                           spellCheck={false}
                           placeholder="Begin typing here..."
                           style={{
                               width: "80%",
                               height: "150px",
                               fontSize: "20px",
                               padding: "15px",
                               borderRadius: "8px",
                               border: "none",
                               outline: "none",
                           }}
                      />
                      {/* Back button to go back to main page */}
                      <button
                          onClick={() => navigate("/main")}
                          style={{
                              marginTop: "20px",
                              padding: "30px 60px",
                              borderRadius: "8px",
                              border: "none",
                              cursor: "pointer",
                              backgroundColor: "#3182ce",
                              color: "#fff",
                              fontSize: "25px",
                              boxShadow: "0 0 12px rgba(49,130,206,0.7)",
                              fontFamily: "'Orbitron', sans-serif",
                        }}
                        >
                            Back
                        </button>
                 </div>
            </div>
        </PageWrapper>
    );
}
export default TypingPage;