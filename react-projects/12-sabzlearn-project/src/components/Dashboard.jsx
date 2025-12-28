import React from 'react';
import { Container } from 'react-bootstrap';
import { isLogin } from '../utils';
import { Navigate } from 'react-router';

export default function Dashboard() {
    let isUserLogin = isLogin('mohi');

    console.log(isUserLogin);

    return (
        <>
            <Container>
                {isUserLogin ? (
                    <h1 style={{ textAlign: 'center', marginTop: '10rem' }}>
                        Dashboard
                    </h1>
                ) : (
                    <Navigate to="/login" />
                )}
            </Container>
        </>
    );
}
