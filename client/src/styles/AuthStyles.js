// Login and Register page style
const containerStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "2px solid #0077b6",
    borderRadius: "10px",
    backgroundColor: "rgba(202, 240, 248, 0.8)", // somewhat transparent
    textAlign: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 3,
    position: "relative"
};

const titleStyle = {
    color: "#023e8a",
};

const linkStyle = {
    marginTop: "15px",
};

// Input field style
const inputStyle = {
    width: "80%",
    padding: "12px 15px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #aaa",
    fontSize: "16px",
    outline: "none",
    transition: "0.2s",
};

const inputFocusStyle = {
    borderColor: "#00bfff",
};

const buttonStyle = {
    width: "100%",
    padding: "15px 0",
    borderRadius: "8px",
    border: "none",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#fff",
    transition: "0.2s",
};

const loginButton = {
    ...buttonStyle,
    backgroundColor: "#38a169",
};

const registerButton = {
    ...buttonStyle,
    backgroundColor: "#3182ce",
};

export { containerStyle, titleStyle, linkStyle, inputStyle, inputFocusStyle, loginButton, registerButton, };