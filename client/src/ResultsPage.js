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

function ResultsPage() {
    return (
        <PageWrapper>
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
                       <div style={{ ...cardBase, ...greenCard }}>
                        Accuracy
                       </div> 
                    </div>
                </div>
              {/* Middle Result Card */}
              <div style={{ position: "relative", ...slideFromBottom }}>
                <div style={{ ...swing("1s"), transformOrigin: "bottom center" }}>
                 <Chain attach="bottom" />
                 <div style={{ ...cardBase, ...orangeCard }}>
                    WPM
                 </div>
                </div>
              </div>
              {/* Right Result Card */}
              <div style={{ position: "relative", ...slideFromTop }}>
                <div style={{ ...swing("1s") }}>
                 <Chain attach="top" />
                 <div style={{ ...cardBase, ...greenCard }}>
                    Time
                </div>
               </div>    
              </div>
            </div>
        </PageWrapper>
    );
}

export default ResultsPage;