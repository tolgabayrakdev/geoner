import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import AuthLayout from "./layouts/auth-layout";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

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
            { path: "register", element: <Register /> }
        ]
    }
])

export default routes;