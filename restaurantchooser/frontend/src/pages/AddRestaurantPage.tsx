import { postNewRestaurant } from "../utilities";


export default function AddRestaurantPage(){
    return (
        <div>
            <h2>New restaurant?</h2>
            <form onSubmit={postNewRestaurant} className="center-column lg-padding-children">
                <label htmlFor="name">Restaurant Name:</label>
                    <input type="text" name="name" />
                <label htmlFor="type1">Primary Type:</label>
                    <select name="type1" id="type1">
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
                    <select name="type1" id="type1">
                        <option value="fast_food">Fast Food</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="fine_dining">Fine Dining</option>
                        <option value="pub_food">Pub Food</option>
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
                    <select name="cost" id="cost">
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