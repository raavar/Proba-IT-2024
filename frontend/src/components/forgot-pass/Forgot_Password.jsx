import Header from "../header/Header";

import "./Forgot_Password.css"

function Forgot_Password(){
    return(
        <div className="Forgot-Password">
            <Header />
            <div className="forgot-pass-background">
            <div className="forgot-pass-container">
                <h1>
                    Forgot password
                </h1>
                <form className="forgot-pass-form">
                    <div className="input-group">
                        <input type="email" id="email" placeholder="E-mail" />
                    </div>
                    <button type="submit" className="forgot-pass-btn">Send</button>
                </form>
            </div>
            </div>
        </div>
    );
}

export default Forgot_Password