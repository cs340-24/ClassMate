// reviewsAPI.js

import axios from 'axios';

export const FetchReviews = async (uni, classID) => {
  try {
    if (uni && classID) { 
      const response = await axios.get(`https://classmate-backend-h16a.onrender.com/uni/${uni}/class/${classID}`);
      console.log("fetching reviews");
      return response.data; // Return the fetched reviews
    }
  } catch (error) {
    console.log(error);
    return []; // Return an empty array in case of error
  }
};