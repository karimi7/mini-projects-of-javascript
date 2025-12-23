import { Container } from 'react-bootstrap';

export default function MainPage() {
    return (
        <>
            <Container
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '10rem',
                }}
            >
                <h1>Main Page</h1>
            </Container>
        </>
    );
}
