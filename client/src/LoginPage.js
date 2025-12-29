import {Link} from "react-router-dom";
import Auth from "./Auth";
import { containerStyle, titleStyle, linkStyle } from "./styles/AuthStyles";
import PageWrapper from "./styles/PageWrapper";

function LoginPage(){
    return(
        <PageWrapper>
          <div style={containerStyle}>
              <h1 style={titleStyle}>Login to Your Account</h1>
              {/* Auth component for login */}
              <Auth type="login" />
              {/* Link to registration page */}
              <p style={linkStyle}>
                  If you do not have an account: <Link to="/register">Register</Link>
              </p>
          </div>
      </PageWrapper>
    );
}

export default LoginPage