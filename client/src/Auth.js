import {useState} from "react";

function Auth({type}){
    // Username, password, server response state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

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
                setMessage(type === "register" ? data.message : `Welcome. You are logged in. Token: ${data.token}`);
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
                    required
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <button type="submit">{type === "register" ? "Register" : "Login"}</button>
            </form>
            {/* Display server response message */}
            <p>{message}</p>
        </div>
    );
}
export default Auth;