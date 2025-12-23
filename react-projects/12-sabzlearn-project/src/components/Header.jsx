import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router';

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
                        <Link to="/" style={{color:'#fff', textDecoration:'none'}}>Home</Link>
                        <Link to="/courses" style={{color:'#fff', textDecoration:'none'}}>Courses</Link>
                        <Link to="/about" style={{color:'#fff', textDecoration:'none'}}>About</Link>
                    </Nav>
                </Navbar>
            </Container>
        </>
    );
}
