import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import IntroductionPage from "../pages/IntroductionPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <IntroductionPage /> }
        ]
    },
    {
        path: '/auth',
        element: <MainLayout />,
        children: [
            { path: 'login', element: <LoginPage /> }
        ]
    },
    {
        path: '/auth',
        element: <MainLayout />,
        children: [
            { path: 'sign_up', element: <SignUpPage /> }
        ]
    },
])