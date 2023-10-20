import axios from 'axios';

// Create

// This funciton posts a new restaurant to the database.
export const postNewRestaurant = async(name:string, type1:string, type2:string, cost:string) => {
    try {
        const response = await axios.post('/addRestaurant/', {
            'name': name,
            'type1': type1,
            'type2': type2,
            'cost': cost,
        })
        console.log(response.data.success, "Post successful!");
        return response.data.success
    
    } catch (error) {
        console.error(error, "Post unsuccessful. Please try again");
    };
};

// Read

// This function loads all the restaurants in the database.
export const getRestaurants = async() => {
    try {
        const response = await axios.get("/getRestaurants/")
        return response.data
    } catch (error) {
        console.error(error, "Failed to get list of restaurants")
    }
}

// This api call collects specific restaurnat data.
export const getRestaurantDetails = async(id:string) => {
    try {
        const response = await axios.get(`/restaurants/${id}`)
        console.log(response)
        return response.data
    } catch (error) {
        console.error(error, "Failed to get restaurant details")
    }
}