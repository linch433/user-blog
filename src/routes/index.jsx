import ProfilePage from '../pages/ProfilePage';
import MainLayout from '../layout/MainLayout';
import MainPage from '../pages/MainPage';
import AuthPage from '../pages/AuthPage';
import { Outlet } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'auth',
        element: <AuthPage />,
      },
    ],
  },
];

export default routes;
