import { Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router';

export default function AboutPage() {
    return (
        <>
            <Container style={{ marginTop: '10rem'}}>
                <h1 style={{ textAlign: 'center' }}>Welcome to About Page</h1>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <Link to="/about/setting">Setting</Link>
                    <Link to="/about/dashboard">Dashboard</Link>
                </div>

                <hr />

                <Outlet />

            </Container>
        </>
    );
}
