import "./hero.css";

const Hero_Section = () => {
    return (
        <>
            <div className="hero-section badge">

                <img src={require("../../assests/images/chess-banner.jpg").default} className="chessbg-img" alt="chess-bg-pic" />

                <div className="hero-overlay">
                    <h1 className="nav-heading">Welcome to ChessPlanet</h1>

                    <h3>Made for Chess Fanatics</h3>

                    <a href="/Pages/Product List/product.html">
                        <button className="btn btn-outline outline-error">Shop Now</button>
                    </a>
                </div>

            </div>

            <div className="category-div">

                <h1 className="center">We offer various Chess related products</h1>

                <div className="card-flexbox">

                    <div className="card1">
                        <img className="card-img" src={require("../../assests/images/chess-book.jpeg").default} alt="book" />

                        <a href="/Pages/Product List/product.html"><button className="btn login">Books</button>
                        </a>

                    </div>

                    <div className="card1">
                        <img className="card-img" src={require("../../assests/images/chess-hoodie.jpeg").default} alt="book" />

                        <a href="/Pages/Product List/product.html"><button className="btn login">Wearables</button>
                        </a>

                    </div>

                    <div className="card1">
                        <img className="card-img" src={require("../../assests/images/chess-set1.jpeg").default} alt="book" />

                        <a href="/Pages/Product List/product.html"><button className="btn login">Chess Sets</button>
                        </a>

                    </div>

                </div>

            </div>
        </>
    );
};

export default Hero_Section;