import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteRestaurant } from "../utilities";


export default function RestaurantDetails() {
    const navigate = useNavigate()
    const restaurantDetails:any = useLoaderData()
    const param = useParams()
    const my_data = JSON.parse(restaurantDetails)

    const handleDelete = async() => {
        if (param.id) {
            await deleteRestaurant(+param.id)
            navigate("/restaurants")
        }
    };

    return (
        <div>
            <h2>Here are my details</h2>
            <div className="center-row">
                <table>
                    <tr className="sm-padding-children">
                        <th>Restaurant Name: </th>
                        <td>{my_data.name} </td>
                    </tr> 
                    <tr className="sm-padding-children">
                        <th>First Type: </th>
                        <td>{my_data.type1} </td>
                    </tr>   
                    <tr className="sm-padding-children">
                        <th>Second Type: </th>
                        <td>{my_data.type2} </td>
                    </tr>
                    <tr className="sm-padding-children">
                        <th>Tertiary Type: </th>
                        <td>{my_data.type3} </td>
                    </tr>
                    <tr className="sm-padding-children">
                        <th>Cost: </th>
                        <td>{my_data.cost} </td>
                    </tr>
                </table>
            </div>
            
            
            <h4><Link to={"/"}>{"<"}- Back to Home</Link></h4>
            <div>
                <Link to={'/restaurants'}><button onClick={handleDelete}>Delete </button></Link>
            </div>
        </div>
    )
}