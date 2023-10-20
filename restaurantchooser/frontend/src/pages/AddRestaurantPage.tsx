import { useState } from "react";
import { postNewRestaurant } from "../utilities";



export default function AddRestaurantPage(){
    const [name, setName] = useState("")
    const [type1, setType1] = useState("fast_food")
    const [type2, setType2] = useState("fast_food")
    const [cost, setCost] = useState(1)

    return (
        <div>
            <h2>New restaurant?</h2>
            <form onSubmit={(event)=> [
                event.preventDefault(),
                postNewRestaurant(name, type1, type2, cost),
                setName(""),
                setType1(""),
                setType2(""),
                setCost(1),
            ]} className="center-column lg-padding-children">
                <label htmlFor="name">Restaurant Name:</label>
                    <input type="text" name="name" onChange={(event)=>setName(event.target.value)}/>
                <label htmlFor="type1">Primary Type:</label>
                    <select name="type1" id="type1" onChange={(event)=>setType1(event.target.value)}>
                        <option value="fast_food">Fast Food</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="fine_dining">Fine Dining</option>
                        <option value="pub_food">Pub Food</option>
                        <option value="seafood">Seafood</option>
                        <option value="american">American</option>
                        <option value="bbq">Barbeque</option>
                        <option value="deli">Deli/Sandwiches</option>
                        <option value="bakery">Bakery</option>
                        <option value="grocery">Grocery</option>
                        <option value="ethnic">Ethnic</option>
                    </select>
                <label htmlFor="type2">Secondary Type:</label>
                    <select name="type2" id="type2" onChange={(event)=>setType2(event.target.value)}>
                        <option value="fast_food">Fast Food</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="fine_dining">Fine Dining</option>
                        <option value="pub_food">Pub Food</option>
                        <option value="seafood">Seafood</option>
                        <option value="american">American</option>
                        <option value="bbq">Barbeque</option>
                        <option value="deli">Deli/Sandwiches</option>
                        <option value="bakery">Bakery</option>
                        <option value="grocery">Grocery</option>
                        <option value="ethnic">Ethnic</option>
                    </select>
                <label htmlFor="cost">Cost</label>
                    <select name="cost" id="cost"onChange={(event)=>setCost(event.target.value)}>
                        <option value={1}>$</option>
                        <option value={2}>$$</option>
                        <option value={3}>$$$</option>
                        <option value={4}>$$$$</option>
                    </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}