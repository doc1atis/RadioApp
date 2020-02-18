import API from "./api";

const signUpApi = async data => {
  try {
    const success = await API.post("/users/signup", data);
    return success;
  } catch (err) {
    return err;
  }
};

export default signUpApi;
