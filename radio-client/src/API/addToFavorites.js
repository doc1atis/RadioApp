import API from "./api";
const addToFavorites = async station => {
  try {
    const response = await API.post("/users/favorites", { station });
    console.log(response);
  } catch (error) {
    console.log("olgy error is: ", error);
  }
};
export default addToFavorites;
