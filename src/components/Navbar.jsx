import { Link } from "react-router-dom";
import Home from "../pages/Home";


function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <div className="shophub-logo">
                    <Link to='/' className="shophub-logo-link">
                        ShopHub
                    </Link>
                </div>

                <div className="navbar-links">
                    <Link to='/' className="mid-btn-nav">Home</Link>
                    <Link to='/checkout' className="mid-btn-nav">Cart</Link>
                </div>

                <div className="navbar-auth">
                    <Link to='/profile' className="btn btn-secondary">Login</Link>
                    <Link to='/profile' className="btn btn-primary">Signup</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;