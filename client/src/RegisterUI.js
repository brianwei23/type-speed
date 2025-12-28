import {Link} from "react-router-dom";
import Auth from "./AuthUI";

function RegisterPage(){
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Create a New Account</h1>
            <Auth type="register" />
            <p style={styles.link}>
               If you have a registered account: <Link to="/login">Login</Link> 
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
export default RegisterPage;
