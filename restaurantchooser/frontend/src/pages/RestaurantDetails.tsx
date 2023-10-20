import { useParams } from "react-router-dom";


export default function RestaurantDetails() {
    const id: string = useParams()

    return (
        <div>
            <h2>Here are my details</h2>
        </div>
    )
}