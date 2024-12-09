import Header from "../header/Header";

import { NavLink } from "react-router";
import React, { useState } from "react";

import "./Login.css"

function Login() {

    return(
        <div className="Login">
            <Header />
            <div className="login-background">
            <div className="login-container">
                <h1>
                    Logheaza-te, chioraie matele!
                </h1>
                <form className="login-form" action="/login" method="POST">
                    <div className="input-group">
                        <input type="email" id="email" name="email" placeholder="E-mail" required />
                        <input type="password" id="password" name="password" placeholder="Password" required />
                    </div>
                    <button type="submit" className="login-btn">Log in</button>
                    <NavLink to="/login/forgot-password" end className="forgot-password">Forgot password</NavLink>
                </form>
            </div>
            </div>
        </div>
    );
}

export default Login