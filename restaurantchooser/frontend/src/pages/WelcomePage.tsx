import { Link } from "react-router-dom"
import { Selector } from "./Selector"

export default function WelcomePage(){

    return (
        <div>
            <h2>Welcome to the restaurant selector!</h2>
            <h2><Link to="/restaurantForm">Add restaurant -{">"}</Link></h2>
            <h2><Link to="/restaurants">Show restaurant List -{">"}</Link></h2>
            <Selector/>
        </div>
    )
}