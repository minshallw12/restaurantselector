import { useState } from "react"
import { getFilteredList } from "../utilities"

export function Selector() {

    const [choice1, setChoice1] = useState("Fast Food")
    const [choice2, setChoice2] = useState("Fast Food")
    const [filteredList, setFilteredList] = useState([])

    const handleSubmit = async (e:any) => {
        e.preventDefault()

        console.log(choice1, choice2)
        const response = await getFilteredList(choice1, choice2)
        console.log(response.restaurants)
        setFilteredList(response.restaurants)
    }

    return (
        <div>
            <h2>What do you want to eat?</h2>

            <form className="center-column sm-padding-children" onSubmit={handleSubmit}>
                <label htmlFor="choose1">Eater 1</label>
                <select name="choose1" id="choose1" onChange={(event) => setChoice1(event.target.value)}>
                    <option value="Fast Food">Fast Food</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Fine Dining">Fine Dining</option>
                    <option value="Pub Food">Pub Food</option>
                    <option value="Seafood">Seafood</option>
                    <option value="American">American</option>
                    <option value="Barbeque">Barbeque</option>
                    <option value="Deli">Deli/Sandwiches</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Ethnic">Ethnic</option>
                    <option value="Burgers">Burgers</option>
                    <option value="Coffee">Coffee</option>
                    <option value="Wine Bar">Wine Bar</option>
                    <option value="Brewery">Brewery</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Convenience">Convenience</option>
                    <option value="Asian">Asian</option>
                    <option value="Mexican">Mexican</option>
                </select>
                <label htmlFor="choose2">Eater 2</label>
                <select name="choose2" id="choose2" onChange={(event) => setChoice2(event.target.value)}>
                    <option value="Fast Food">Fast Food</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Fine Dining">Fine Dining</option>
                    <option value="Pub Food">Pub Food</option>
                    <option value="Seafood">Seafood</option>
                    <option value="American">American</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Ethnic">Ethnic</option>
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
                <button type="submit">Generate List</button>
            </form>

            {
                filteredList.length === 0 ?
                <ul>
                    {
                        filteredList.map((restaurant:any) => (
                            <li>{restaurant.name} {restaurant.cost}</li>
                        ))
                    }
                </ul>
                :
                <div></div>
            }

        </div>
    )
}