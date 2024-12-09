import Header from "../header/Header";

import "./Register.css"

function Register() {
    return(
        <div className="Register">
            <Header />
            <div className="register-background">
            <div className="register-container">
                <h1>
                    Hai, fa foamea cu noi!
                </h1>
                <form className="register-form" action="/register" method="POST">
                    <div className="input-group">
                        <input type="text" id="name" name="name" placeholder="Full name" />
                        <input type="tel" id="phone" placeholder="Telephone" />
                        <input type="email" id="email"  name="email" placeholder="E-mail" />
                        <input type="password" id="password" name="password" placeholder="Password" />
                        <input type="password" id="confirm-password" placeholder="Confirm Password" />
                    </div>
                    <button type="submit" className="register-btn">Send</button>
                </form>
            </div>
            </div>
        </div>
    );
}

export default Register