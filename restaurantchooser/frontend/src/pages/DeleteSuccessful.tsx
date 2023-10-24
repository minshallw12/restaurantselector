import { Link } from "react-router-dom";

export default function DeleteSuccessful() {
    return (
        <div>
            <h1>You successfully deleted this entry!</h1>
            <h3><Link to={"/"}>{"<"}- Back to Home</Link></h3>
        </div>
    )
}