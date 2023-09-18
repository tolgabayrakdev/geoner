import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import AuthLayout from "./layouts/auth-layout";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ResetPassword from "./pages/auth/reset-password";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            { path: "", element: <Navigate to="login" />},
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            { path: "reset-password", element: <ResetPassword /> }
        ]
    }
])

export default routes;