import React from 'react';

const Login = React.lazy(() => import('./views/Login/login'));
const Promotions = React.lazy(() => import('./views/Promotions/promotions'));
const Register = React.lazy(() => import('./views/Register/register'));

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/login', name: 'Login', component:Login  },
    { path: '/promotions', name: 'Promotions', component:Promotions  },
    { path: '/register', name: 'Promotions', component:Register },
];

export default routes;