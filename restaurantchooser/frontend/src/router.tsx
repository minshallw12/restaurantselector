import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import WelcomePage from "./pages/WelcomePage";
import Error from "./pages/Error";
import AddRestaurantPage from "./pages/AddRestaurantPage";
import { Selector } from "./pages/Selector";
import RestaurantsPage from "./pages/RestaurantsPage";
import { getRestaurantDetails, getRestaurants } from "./utilities";
import RestaurantDetails from "./pages/RestaurantDetails";
import DeleteSuccessful from "./pages/DeleteSuccessful";

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
            path: '/restaurants/:id',
            element: <RestaurantDetails/>,
            loader: getRestaurantDetails
        },
        {
            path: '/selector',
            element: <Selector/>
        },
        {
            path: '/deleterestaurant',
            element: <DeleteSuccessful/>
        }
    ]
}])

export default router;