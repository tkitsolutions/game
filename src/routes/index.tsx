import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import Resources from 'views/resources/index';
import OverView from 'views/overview';
import SignUp from 'views/signup';
import Login from 'views/login';
import ConnectWallet from 'views/connectWallet';

const routes = [
    {
        path: '/login',
        Component: Login,
    },
    {
        path: '/signup',
        Component: SignUp,
    },
    {
        path: '/connect-wallet',
        Component: ConnectWallet,
    },
    {
        path: '/resources',
        Component: Resources,
        isPrivate: true,
    },
    {
        path: '/overview',
        Component: OverView,
        isPrivate: true,
    },
];

export default function AppRoutes() {
    return (
        <Routes>
            {routes?.map(({ path, Component, isPrivate }) => (
                <Route
                    key={path}
                    element={isPrivate ? <PrivateRoute component={<Component />} /> : <Component />}
                    path={path}
                />
            ))}
            <Route path="*" element={<Navigate to="/overview" />} />
        </Routes>
    );
}
