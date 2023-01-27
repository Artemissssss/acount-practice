import { lazy } from 'react';

export const routes = [
  {
    key: 'home',
    path: '/',
    component: lazy(() => import('../pages/HomePage')),
  },
  {
    key: 'login',
    path: '/login',
    component: lazy(() => import('../pages/LoginPage')),
  },
  {
    key: 'register',
    path: '/register',
    component: lazy(() => import('../pages/RegisterPage')),
  },
  {
    key: 'contacts',
    path: '/contacts',
    component: lazy(() => import('../pages/ContactsPage')),
  },
];
