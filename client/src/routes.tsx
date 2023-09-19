import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import AuthLayout from "./layouts/auth-layout";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ResetPassword from "./pages/auth/reset-password";
import MainLayout from "./layouts/main-layout";
import MainPage from "./pages/main";
import Profile from "./pages/main/profile";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            { path: "", element: <Navigate to="login" /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            { path: "reset-password", element: <ResetPassword /> }
        ]
    },
    {
        path: "/main",
        element: <MainLayout />,
        children: [
            { element: <MainPage />, index: true },
            { path: "profile", element: <Profile /> }


        ]
    }
])

export default routes;