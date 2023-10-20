import { useLoaderData } from "react-router-dom";



export default function RestaurantsPage() {
    const restaurant_objects: any = useLoaderData()

    console.log(restaurant_objects.restaurants)
    return (
        <div>
            <h2>My Restaurants</h2>
            <ul>
                {
                    restaurant_objects.restaurants.map(({id, name, type1, type2, cost}) => (
                        <li className="center-row">{id} - {name} - {type1} - {type2} - {cost}</li>
                    )) 
                }
                {/* {restaurant_objects.restaurants[0].name} */}
            </ul>
            
        </div>
    )
};