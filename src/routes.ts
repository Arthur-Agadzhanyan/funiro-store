import { FC } from "react";
import AdminLoginPage from "./pages/AdminLogin";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignUpPage";
import TipsPage from "./pages/TipsPage";
import { ADMIN_LOGIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PRODUCTS_ROUTE, PROFILE_ROUTE, SIGN_UP_ROUTE, TIPS_ROUTE } from "./utils/consts";

interface routesItem{
    path: string
    Component: FC
}

const withoutLoginPages = (item: routesItem)=>{
    return item.path !== LOGIN_ROUTE && item.path !== SIGN_UP_ROUTE && item.path !== ADMIN_LOGIN_ROUTE
}

export const publicRoutes: routesItem[] = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: PRODUCTS_ROUTE,
        Component: ProductsPage
    },
    {
        path: TIPS_ROUTE,
        Component: TipsPage
    },
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    },
    {
        path: SIGN_UP_ROUTE,
        Component: SignUpPage
    },
    {
        path: ADMIN_LOGIN_ROUTE,
        Component: AdminLoginPage
    },
]

export const privateRoutes: routesItem[] = [
    ...publicRoutes.filter(item=>{
        return withoutLoginPages(item)
    }),

    {
        path: PROFILE_ROUTE,
        Component: ProfilePage
    }
]

export const adminRoutes: routesItem[] = [
    ...privateRoutes,
    {
        path: PROFILE_ROUTE,
        Component: ProfilePage
    }
]