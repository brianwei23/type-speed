import {Link} from "react-router-dom";
import Auth from "./Auth";

function LoginPage(){
    return(
        <div style={styles.container}>
            <h1 style={styles.title}>Login to Your Account</h1>
            {/* Auth component for login */}
            <Auth type="login" />
            {/* Link to registration page */}
            <p style={styles.link}>
                If you do not have an account: <Link to="/register">Register</Link>
            </p>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "2px solid #0077b6",
        borderRadius: "10px",
        backgroundColor: "#caf0f8",
        textAlign: "center",
    },
    title: {
        color: "#023e8a",
    },
    link: {
        marginTop: "15px",
    },
};
export default LoginPage