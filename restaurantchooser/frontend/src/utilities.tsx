import axios from 'axios';

// Create

// This funciton posts a new restaurant to the database.
export const postNewRestaurant = async(name:string, type1:string, type2:string, type3:string, cost:string) => {
    try {
        const response = await axios.post('/addRestaurant/', {
            'name': name,
            'type1': type1,
            'type2': type2,
            'type3': type3,
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
export const getRestaurantDetails = async(id: any) => {
    try {
        const response = await axios.get(`/restaurants/${id.params.id}`)
        console.log(response.data.data)
        return response.data.data
    } catch (error) {
        console.error(error, "Failed to get restaurant details")
    }
};

// Get filtered results using choices
export const getFilteredList = async(choice1:string, choice2:string) => {
    try {
        const response = await axios.get(`/filteredList/${choice1}/${choice2}`)
        console.log(response.data, "UTILITIES")
        return response.data
    } catch (error) {
        console.error(error, "Failed to get filtered list")
    }
    
}

// Delete
// This utiltity deletes a restaurant from the database.
export const deleteRestaurant = async(id:number | string) => {
    try {
        const response = await axios.delete(`/delete/${id}`)
        console.log(response.data.success, "Delete successful")
        return response.data.success
    } catch (error) {
        console.error(error, "Failed to delete this entry")
    }
};