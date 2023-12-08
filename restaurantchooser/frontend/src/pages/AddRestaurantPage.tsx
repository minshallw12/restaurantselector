import { useState } from "react";
import { postNewRestaurant } from "../utilities";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AddRestaurantPage(){
    const [name, setName] = useState("")
    const [type1, setType1] = useState("Fast Food")
    const [type2, setType2] = useState("Fast Food")
    const [type3, setType3] = useState("Burgers")
    const [cost, setCost] = useState("$")
    const navigate = useNavigate()

    return (
        <div>
            <h2>New restaurant?</h2>
            <h4><Link to="/">{"<"}- Back to Home</Link></h4>
            <form onSubmit={async (event)=> [
                event.preventDefault(),
                await postNewRestaurant(name, type1, type2, type3, cost),
                setName(""),
                setType1("Fast Food"),
                setType2("Fast Food"),
                setType3("Burgers"),
                setCost("$"),
                navigate("/restaurants")
            ]} className="center-column lg-padding-children">
                <label htmlFor="name">Restaurant Name:</label>
                    <input type="text" name="name" onChange={(event)=>setName(event.target.value)}/>
                <label htmlFor="type1">Primary Type:</label>
                    <select name="type1" id="type1" onChange={(event)=>setType1(event.target.value)}>
                        <option value="Fast Food">Fast Food</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Fine Dining">Fine Dining</option>
                        <option value="Pub Food">Pub Food</option>
                        <option value="Seafood">Seafood</option>
                        <option value="American">American</option>
                        <option value="Barbeque">Barbeque</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Ethnic">Ethnic</option>
                    </select>
                <label htmlFor="type2">Secondary Type:</label>
                    <select name="type2" id="type2" onChange={(event)=>setType2(event.target.value)}>
                        <option value="Fast Food">Fast Food</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Fine Dining">Fine Dining</option>
                        <option value="Pub Food">Pub Food</option>
                        <option value="Seafood">Seafood</option>
                        <option value="American">American</option>
                        <option value="Barbeque">Barbeque</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Ethnic">Ethnic</option>
                    </select>
                <label htmlFor="type3">Tertiary Type:</label>
                    <select name="type3" id="type3"  onChange={(event)=>setType3(event.target.value)}>
                        <option value="Burgers">Burgers</option>
                        <option value="Coffee">Coffee</option>
                        <option value="Wine Bar">Wine Bar</option>
                        <option value="Brewery">Brewery</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Barbeque">Barbeque</option>
                        <option value="Deli">Deli/Sandwiches</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Convenience">Convenience</option>
                        <option value="Asian">Asian</option>
                        <option value="Mexican">Mexican</option>
                    </select>
                <label htmlFor="cost">Cost</label>
                    <select name="cost" id="cost"onChange={(event)=>setCost(event.target.value)}>
                        <option value="$">$</option>
                        <option value="$$">$$</option>
                        <option value="$$$">$$$</option>
                        <option value="$$$$">$$$$</option>
                    </select>
                <button type="submit">Submit</button>
                {/* <Link to={"/restaurants"}><button type="submit">Submit</button></Link> */}
            </form>
        </div>
    )
};