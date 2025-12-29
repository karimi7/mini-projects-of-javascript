import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router';
import './style.css'

export default function Header() {
    return (
        <>
            <Container>
                <Navbar
                    style={{ padding: '20px' }}
                    bg="dark"
                    data-bs-theme="dark"
                >
                    <Link to='/' style={{color:'white', marginRight:'80px', textDecoration:'none'}}>
                        <h3>
                            SabzLearn
                        </h3>
                    </Link>
                    <Nav className="me-auto" style={{display:'flex',gap:'40px'}}>
                        <NavLink className={(link)=> link.isActive ? 'active' : ''} to="/" style={{color:'#fff', textDecoration:'none'}}>Home</NavLink>
                        <NavLink to="/courses" style={{color:'#fff', textDecoration:'none'}}>Courses</NavLink>
                        <NavLink to="/about" style={{color:'#fff', textDecoration:'none'}}>About</NavLink>
                        <NavLink to="/login" style={{color:'#fff', textDecoration:'none'}}>Login</NavLink>
                        <NavLink to="/panel" style={{color:'#fff', textDecoration:'none'}}>Panel</NavLink>
                        <NavLink to="/dashboard" style={{color:'#fff', textDecoration:'none'}}>Dashboard</NavLink>
                    </Nav>
                </Navbar>
            </Container>
        </>
    );
}
