import {Link} from "react-router-dom";
import Auth from "./AuthUI";

function LoginPage(){
    return(
        <div style={StyleSheet.container}>
            <h1 style={StyleSheet.title}>Login to Your Account</h1>
            <Auth type="login" />
            <p style={StyleSheet.link}>
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