import API from "./api";
const logUserIn = async userInfo => {
  try {
    const response = await API.post("/users/login", userInfo);
    localStorage.setItem("token", response.data.token);
    return null;
  } catch (error) {
    if (error.response) {
      const { status } = error.response;
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (status === 401) {
        return "Invalid Password or Username";
      }
    } else if (error.request) {
      // The request was made but no response was received
      // this means the server is down
      return "we are doing maintenance please come back later.";
    } else {
      return "oops somenthing went wrong try again later.";
    }
  }
};
export default logUserIn;
