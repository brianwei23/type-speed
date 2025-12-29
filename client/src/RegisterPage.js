import {Link} from "react-router-dom";
import Auth from "./Auth";
import { containerStyle, titleStyle, linkStyle } from "./styles/AuthStyles";
import PageWrapper from "./styles/PageWrapper";

function RegisterPage(){
    return (
        <PageWrapper>
         <div style={containerStyle}>
              <h1 style={titleStyle}>Create a New Account</h1>
              {/* Auth component for registration */}
               <Auth type="register" />
              {/* Link to login page for registered users */}
              <p style={linkStyle}>
                 If you have a registered account: <Link to="/login">Login</Link> 
              </p>
         </div>
        </PageWrapper>
    );
}

export default RegisterPage;
