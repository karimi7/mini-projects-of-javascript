import './Header.css';
import Navbar from './Navbar';

function Header() {
    return (
        <div>
            <div className="parallax">
                <div className="container">
                    <Navbar />
                    <div className="bigtitle">
                        <h1>
                            Strong Digital Solutions
                            <br />
                            with <span className="yellow">KASUKA</span>
                        </h1>
                    </div>
                    <div className="intro">
                        we are a team of talented digital marketers
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
