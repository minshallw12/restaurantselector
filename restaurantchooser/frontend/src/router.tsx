import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import WelcomePage from "./pages/WelcomePage";
import Error from "./pages/Error";
import AddRestaurantPage from "./pages/AddRestaurantPage";
import { Selector } from "./pages/Selector";
import RestaurantsPage from "./pages/RestaurantsPage";
import { getRestaurants } from "./utilities";

const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
        {
            index: true,
            element: <WelcomePage/>
        },
        {
            path: '/restaurantForm',
            element: <AddRestaurantPage/>
        },
        {
            path: '/restaurants',
            element: <RestaurantsPage/>,
            loader: getRestaurants
        },
        {
            path: '/selector',
            element: <Selector/>
        }
    ]
}])

export default router;