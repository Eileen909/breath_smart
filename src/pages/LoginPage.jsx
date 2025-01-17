import React from "react";
import "../styles/LoginPage.css";
import WaveBackground from "../components/WaveBackground.jsx";

const LoginPage = () => {
    return(
        <div className="login-page">
            <WaveBackground />
            <div className="login-container">
                <h1>Breat-Smart</h1>
                <div className="login-content">
                    <p className="login-text">
                        The journey of a thousand miles begins with a single step.
                        <br />
                        <a href="/login" className="login-link">Log in</a> to take yours.
                    </p>
                    <form className="login-form">
                        <input type="text" placeholder="UserName or Email" />
                        <input type="password" placeholder="Password"/>
                        <button type="submit">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;