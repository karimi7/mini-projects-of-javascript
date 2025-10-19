import './Header.css';
import Navbar from './Navbar';
import HeaderBoxes from './HeaderBoxes';

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
                    <div className='headerBoxes'>
                    <HeaderBoxes text="Demo Text" />
                    <HeaderBoxes text="Portfolio" />
                    <HeaderBoxes text="Charts" />
                    <HeaderBoxes text="Final Actions" />
                    <HeaderBoxes text="Saved Information" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
