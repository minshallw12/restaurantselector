

export default function EditRestaurantForm() {
    return (
        <div className="EditRestaurantForm">
            <form>
            <label htmlFor="edit1">Type 1</label>
                <select name="edit1" id="edit1">
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
                <label htmlFor="edit2">Type 2</label>
                <select name="edit2" id="edit2">
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
                <label htmlFor="edit3">Type 2</label>
                <select name="edit3" id="edit3">
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
            </form>
        </div>
    )
}