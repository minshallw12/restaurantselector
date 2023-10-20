import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import WelcomePage from "./pages/WelcomePage";
import Error from "./pages/Error";
import AddRestaurantPage from "./pages/AddRestaurantPage";
import { Selector } from "./pages/Selector";

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
            path: '/selector',
            element: <Selector/>
        }
    ]
}])

export default router;