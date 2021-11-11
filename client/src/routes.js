import Admin from "./pages/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE,REGISTRATION_ROUTE, GAME_ROUTE,LOGIN_ROUTE} from "./utils/consts";
import Game from "./pages/GamePage";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
export const authRoutes=[
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: GAME_ROUTE + '/:id',
        Component: Game
    },

]

