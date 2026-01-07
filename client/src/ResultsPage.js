import {
    pageStyle,
    cardBase,
    slideFromTop,
    slideFromBottom,
    swing,
    greenCard,
    orangeCard,
} from "./styles/ResultsStyles";
import Chain from "./styles/Chain";
import PageWrapper from "./styles/PageWrapper"
import { useLocation, useNavigate } from "react-router-dom";
import VictoryAfterMidnight from "./styles/Victory After Midnight.mp3";
import { useRef, useEffect } from "react";

function ResultsPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const {
      displayWPM,
      timeSeconds,
      totalErrors = 0,
      accuracy = 0,
      finalWPM,
    } = location.state || {};

    const audioRef = useRef(null);

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
        <PageWrapper>
          <audio ref={audioRef} src={VictoryAfterMidnight} />
          <h1
            style={{
              position: "absolute",
              top: "40px",
              width: "100%",
              textAlign: "center",
              fontSize: "3.5rem",
              fontWeight: "800",
              color: "#22d3ee",
              letterSpacing: "2px",
              zIndex: 1,
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
             Your Results! 
          </h1>
            <div style={pageStyle}>
              {/* Left Result Card */}
                <div style={{ position: "relative", ...slideFromTop }}>
                    <div 
                      style={{ ...swing("1s") }}>
                       <Chain attach="top" />
                       <div style={{ ...cardBase, ...greenCard, flexDirection: "column" }}>
                        <div
                          style={{
                            fontSize: "30px",
                            color: "#23262cff",
                            marginBottom: "6px",
                            letterSpacing: "0.5px",
                          }} 
                         >
                          Gross WPM:
                          </div> 
                          <div
                            style={{
                              fontSize: "20px",
                              fontWeight: "700",
                              color: "white",
                            }}
                          >
                            {displayWPM}
                          </div>
                        <div
                          style={{
                            fontSize: "30px",
                            color: "#23262cff",
                            marginBottom: "6px",
                            letterSpacing: "0.5px",
                            marginTop: "10px",
                          }} 
                         >
                          Time:
                          </div> 
                          <div
                            style={{
                              fontSize: "20px",
                              fontWeight: "700",
                              color: "white",
                            }}
                          >
                            {timeSeconds.toFixed(2)} sec
                          </div>
                       </div> 
                    </div>
                </div>
              {/* Middle Result Card */}
              <div style={{ position: "relative", ...slideFromBottom }}>
                <div style={{ ...swing("1s"), transformOrigin: "bottom center" }}>
                 <Chain attach="bottom" />
                 <div style={{ ...cardBase, ...orangeCard, flexDirection: "column" }}>
                        <div
                          style={{
                            fontSize: "30px",
                            color: "#23262cff",
                            marginBottom: "6px",
                            letterSpacing: "0.5px",
                          }} 
                         >
                          Accuracy Rate:
                          </div> 
                          <div
                            style={{
                              fontSize: "20px",
                              fontWeight: "700",
                              color: "white",
                            }}
                          >
                            {typeof accuracy === "number" ? accuracy.toFixed(2) : "0.00"}%
                          </div>
                        <div
                          style={{
                            fontSize: "30px",
                            color: "#23262cff",
                            marginBottom: "6px",
                            letterSpacing: "0.5px",
                            marginTop: "10px",
                          }} 
                         >
                          Errors:
                          </div> 
                          <div
                            style={{
                              fontSize: "20px",
                              fontWeight: "700",
                              color: "white",
                            }}
                          >
                            {totalErrors}
                          </div>
                 </div>
                </div>
              </div>
              {/* Right Result Card */}
              <div style={{ position: "relative", ...slideFromTop }}>
                <div style={{ ...swing("1s") }}>
                 <Chain attach="top" />
                 <div style={{ ...cardBase, ...greenCard, flexDirection: "column" }}>
                     <div
                          style={{
                            fontSize: "30px",
                            color: "#23262cff",
                            marginBottom: "6px",
                            letterSpacing: "0.5px",
                            marginTop: "10px",
                          }} 
                         >
                          Final WPM:
                          </div> 
                          <div
                            style={{
                              fontSize: "20px",
                              fontWeight: "700",
                              color: "white",
                            }}
                          >
                            {finalWPM ? Number(finalWPM.toFixed(2)) : "0.00"}
                          </div>
                </div>
               </div>    
              </div>
            </div>
            <button 
              onClick={() => navigate("/main")}
              style={styles.toMainButton}
             >
              ➜ To Main Page  
            </button> 
        </PageWrapper>
    );
}

const styles = {
  toMainButton: {
    position: "absolute",
    bottom: "40px",
    right: "40px",
    padding: "18px 30px",
    fontSize: "18px",
    fontWeight: "700",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(135deg, #22d3ee, #38bdf8)",
    color: "#000",
    boxShadow: "0 10px 25px rgba(34,211,238,0.4)",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    marginBottom: "280px",
    marginRight: "30px",
  },
};

export default ResultsPage;