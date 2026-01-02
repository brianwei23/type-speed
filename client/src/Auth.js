import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { inputStyle, inputFocusStyle, loginButton, registerButton } from "./styles/AuthStyles";

function Auth({type}){
    // Username, password, server response state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [focusedInput, setFocusedInput] = useState(null);
    const navigate = useNavigate();

    // Form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = type === "register" ? "register" : "login";

        try {
            // Send credentials to the server
            const res = await fetch(`http://localhost:5000/api/auth/${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({username, password}),
            });

            const data = await res.json();
            if (res.ok) {
                if (type === "login") {
                    localStorage.setItem("token", data.token); // Store token on login
                    navigate("/main"); // Navigate to the main page
                } else {
                    setMessage(data.message);
                }
            }
            else {
                setMessage(data.error);
            }
        }
        catch (err){
            setMessage("Network error: " + err.message);
        }
    };
    
    return (
        <div>
            <h2>{type === "register" ? "Register" : "Login"}</h2>
            <form onSubmit = {handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value = {username}
                    onChange={(e) => setUsername(e.target.value)}
                    onFocus={() => setFocusedInput("username")}
                    onBlur={() => setFocusedInput(null)}
                    style={{
                        ...inputStyle,
                        ...(focusedInput === "username" ? inputFocusStyle : {}),
                    }}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedInput("password")}
                    onBlur={() => setFocusedInput(null)}
                    style={{
                        ...inputStyle,
                        ...(focusedInput === "password" ? inputFocusStyle : {}),
                    }}
                    required
                />

                <button
                    type="submit"
                    style={type === "register" ? registerButton : loginButton}
                    >
                        {type === "register" ? "Register" : "Login"}
                    </button>
            </form>
            {/* Display server response message */}
            {message && <p style={{ marginTop: "15px" }}>{message}</p>}
        </div>
    );
}
export default Auth;