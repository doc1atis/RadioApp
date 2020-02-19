import API from "./api";
import isAuthenticated from "./isAuthenticated";
const addToFavorites = async station => {
  try {
    if (isAuthenticated(API)) {
      const response = await API.post("/users/favorites", { station });
      //   we get the updated userback
      console.log(response);
    }
  } catch (error) {
    console.log("olgy error is: ", error);
  }
};
export default addToFavorites;
