import apiNoToken from "./apiNoToken";

const signUpApi = async data => {
  try {
    const success = await apiNoToken.post("/users/signup", data);
    return success;
  } catch (err) {
    return err;
  }
};

export default signUpApi;
