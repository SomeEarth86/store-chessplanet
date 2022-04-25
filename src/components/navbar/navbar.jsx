import "./navbar.css";

const Navbar = () => {
    return (

        <>
            <nav className="navbar-simple">
                <a href="/index.html">
                    <div className="nav-heading">ChessPlanet ♛</div>
                </a>
                <input className="search-bar" placeholder="search" type="text" />


                <div className="nav-right">
                    <a className="icon-navright" href="#">
                        <button className="btn login">Explore</button>
                    </a>
                    <a className="icon-navright badge" href="#">
                        <i className="far fa-heart fa-2x"></i>
                        <span className="badge-disp">3</span>
                    </a>

                    <a className="icon-navright badge" href="#">
                        <i className="fas fa-shopping-cart fa-2x"></i>
                        <span className="badge-disp">5</span>
                    </a>

                    <a className="icon-navright badge" href="#">
                        <i class="fas fa-user fa-2x"></i>
                    </a>
                </div>
            </nav>
        </>

    );
};

export default Navbar;