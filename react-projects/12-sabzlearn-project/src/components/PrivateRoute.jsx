import React from 'react';
import { Container } from 'react-bootstrap';
import { isLogin } from '../utils';
import { Navigate,Outlet } from 'react-router';

export default function Panel() {
    let isUserLogin = isLogin('mohi');
    console.log(isUserLogin);

    return (
        <>
            <Container>
                {isUserLogin ? <Outlet/> : <Navigate to="/login" />}
            </Container>
        </>
    );
}
