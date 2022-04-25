import "./auth.css";

const Login = () => {
    return (
        <>
            <div className="main-content">

                <div className="log-card">
                    <h2>Login</h2>

                    <label for="email">Email
                    </label>
                    <input className="inp" type="text" name="email" />
                    <label for="password">Password
                    </label>
                    <input className="inp" type="password" name="password" />

                    <div className="rem-tab">
                        <div className="remember">
                            <input type="checkbox" name="rem" />
                            <label for="rem">Remember Me</label>
                        </div>

                        <a href="#">Forgot Password</a>
                    </div>

                    <div className="footer-btm">
                        <button className="btn btn-dark">Login</button>

                        <a href="signup.html">Create a new account </a>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Login;