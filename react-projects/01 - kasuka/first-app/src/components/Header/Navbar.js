import './Navbar.css';

function Navbar() {
    return (
        <div className="nav">
            <div className="nav-logo">
                <img src="./image/logo.png" alt="logo" width="60" height="60" />
                <span>KASUKA</span>
            </div>
            <div className="nav-menu">
                <ul>
                    <li>
                        <a href="#0">Home</a>
                    </li>
                    <li>
                        <a href="#0">About</a>
                    </li>
                    <li>
                        <a href="#0">Services</a>
                    </li>
                    <li>
                        <a href="#0">Product</a>
                    </li>
                    <li>
                        <a href="#0">Team</a>
                    </li>
                </ul>
            </div>
            <div className="nav-btn">
                <button>Start</button>
            </div>
        </div>
    );
}

export default Navbar;
