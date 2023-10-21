import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"

export default function RestaurantDetails() {
    const restaurantDetails: any = useLoaderData()
    const my_data = JSON.parse(restaurantDetails)
    console.log(my_data, "Me!")
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
                        <th>Second Type: </th>
                        <td>{my_data.cost} </td>
                    </tr>
                </table>
            </div>
            
            
            <h4><Link to="/">{"<"}- Back to Home</Link></h4>
        </div>
    )
}