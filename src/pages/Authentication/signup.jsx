import "./auth.css";

const Signup = () => {
    return (
        <>
            <div className="main-content">

                <div className="log-card">
                    <h2>Signup</h2>

                    <label for="email">Email
                    </label>
                    <input className="inp" type="text" name="email" />
                    <label for="password">Password
                    </label>
                    <input className="inp" type="password" name="password" />

                    <div className="rem-tab">
                        <div className="remember">
                            <input type="checkbox" name="rem" />
                            <label for="rem">I accept all the Terms and conditions</label>
                        </div>
                    </div>

                    <div className="footer-btm">
                        <button className="btn btn-dark">Create New Account</button>

                        <a href="login.html">Already have an account  </a>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Signup;