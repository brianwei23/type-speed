import { Link } from "react-router-dom";
import Auth from "./Auth";
import { containerStyle, titleStyle, linkStyle } from "./styles/AuthStyles";
import PageWrapper from "./styles/PageWrapper";
import keyboardCharLeft from "./styles/keyboardCharLeft.png";
import keyboardCharRight from "./styles/keyboardCharRight.png";

function RegisterPage(){
    return (
        <PageWrapper>
         <h1 style={{
                fontFamily: "'Orbitron', sans-serif",
                color: "#a48d2eff",
                fontSize: "48px",
                textAlign: "center",
                marginTop: "30px",
                marginBottom: "20px",
                textShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)",
                transform: "translateX(40px)"
       }}>
                TypeSpeed: The Ultimate Typing Challenge!
            </h1>
         <img 
            src={keyboardCharLeft} 
            alt="Left keyboard character" 
            style={{ 
                position: "absolute", 
                left: "40px", 
                top: "50%", 
                transform: "translateY(-50%)",
                width: "400px",
                height: "auto",
                pointerEvents: "none" 
            }} />
         <div style={containerStyle}>
              <h1 style={titleStyle}>Create a New Account</h1>
              {/* Auth component for registration */}
               <Auth type="register" />
              {/* Link to login page for registered users */}
              <p style={linkStyle}>
                 If you have a registered account: <Link to="/login">Login</Link> 
              </p>
         </div>
         <img 
            src={keyboardCharRight} 
            alt="Right keyboard character" 
            style={{ 
                position: "absolute", 
                right: "40px", 
                top: "50%", 
                transform: "translateY(-50%)",
                width: "400px",
                height: "auto",
                pointerEvents: "none"
            }} />
        </PageWrapper>
    );
}

export default RegisterPage;
