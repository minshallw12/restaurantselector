import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

interface restaurant {
    id: number,
    name: string,
    type1: string,
    type2: string,
    cost: string
}

export default function RestaurantsPage() {
    const restaurant_objects: any = useLoaderData()
    console.log(restaurant_objects.restaurants)

    return (
        <div>
            <h2>My Restaurants</h2>
            <div className="center-row">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type 1</th>
                        <th>Type 2</th>
                        <th>Cost</th>
                    </tr>
                    
                        {
                            restaurant_objects.restaurants.map(({id, name, type1, type2, cost}: restaurant) => (
                                <tr>
                                    <td>{id}</td>
                                    <Link to={`/restaurants/${id}`}><td>{name}</td></Link>
                                    <td>{type1} </td>
                                    <td>{type2}</td>
                                    <td>{cost}</td>
                                </tr>
                                    
                                ))
                        }
                    
                </table>
            </div>
            
            
            <h4><Link to="/">{"<"}- Back to Home</Link></h4>
            
        </div>
    )
};