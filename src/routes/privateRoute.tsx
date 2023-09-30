import React from 'react';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line no-undef
export default function PrivateRoute({ component }: { component: JSX.Element }) {
    const token = localStorage.getItem('token');
    if (!token && token !== 'undefined') return <Navigate to="/login" />;
    return component;
}
