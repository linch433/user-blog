import {Outlet} from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage';
import MainLayout from '../layout/MainLayout';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import PostsPage from "../pages/PostsPage.jsx";
import UsersPage from "../pages/UsersPage.jsx";

const routes = [
  {
    path: '/',
    element: (
      <MainLayout>
        <Outlet/>
      </MainLayout>
    ),
    children: [
      {
        path: '',
        element: <MainPage/>,
      },
      {
        path: 'posts',
        element: <PostsPage/>,
      },
      {
        path: 'users',
        element: <UsersPage/>,
      },
      {
        path: 'profile',
        element: <ProfilePage/>,
      },
      {
        path: 'login',
        element: <LoginPage/>,
      },
      {
        path: 'register',
        element: <RegisterPage/>,
      },
    ],
  },
];

export default routes;
