import API from "./api";
const registerUser = async userInfo => {
  try {
    const response = await API.post("/users/register", userInfo);
    console.log(response);
    return "registered succesfully";
  } catch (error) {
    console.log("registration error olgy");
    return "failed to registered";
  }
};
export default registerUser;
