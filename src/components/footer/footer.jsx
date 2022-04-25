import "./footer.css";

const Footer = () => {
    return (

        <>
            <footer className="footer-box">

                <div className="footer-text">
                    Made with ♥️ by Samarth Krishna Joshi
                </div>

                <div className="icon-tab">
                    <a href="https://github.com/SomeEarth86/ChessPlanet">
                        <i className="fab fa-github-square fa-3x"></i>
                    </a>
                    <a href="https://twitter.com/SomeEarthSays">
                        <i className="fab fa-twitter-square fa-3x"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/samarth-krishna-joshi/">
                        <i className="fab fa-linkedin fa-3x"></i>
                    </a>

                </div>

            </footer>
        </>
    );
};

export default Footer;