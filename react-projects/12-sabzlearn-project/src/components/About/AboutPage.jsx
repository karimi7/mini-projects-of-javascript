import { Container } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router';

export default function AboutPage() {
    return (
        <>
            <Container
                style={{
                    marginTop: '10rem',
                }}
            >
                <h1 style={{ textAlign: 'center' }}>Welcome to About Page</h1>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                    }}
                >
                    <Link to="setting">Setting</Link>
                    <Link to="dashboard">Dashboard</Link>
                </div>

                <hr />

                <Routes>
                    <Route
                        path="setting"
                        element={<p style={{ textAlign: 'center' }}>Setting</p>}
                    ></Route>

                    <Route
                        path="dashboard"
                        element={
                            <p style={{ textAlign: 'center' }}>dashboard</p>
                        }
                    ></Route>
                </Routes>
            </Container>
        </>
    );
}
