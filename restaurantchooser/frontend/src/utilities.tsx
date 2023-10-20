import axios from 'axios';

// Create

// This funciton posts a new restaurant to the database.
export const postNewRestaurant = async(name:string, type1:string, type2:string, cost:BigInteger) => {
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