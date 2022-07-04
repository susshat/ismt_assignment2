import type { RouteObject } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";

const AppRoutes: RouteObject[] = [
{
    path: "/register",
    element: <Register open/>
},
{
    path:"/login",
    element: <Login open/>
}]

export default AppRoutes;