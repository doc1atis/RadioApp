import API from "./api";
const registerUser = async userInfo => {
  try {
    const response = await API.post("/users/register", userInfo);
    return {
      registered: response.data.success,
      message: response.data.message
    };
  } catch (error) {
    let message;
    const emailExists = error.response.data.error.errmsg.includes("email");
    const usernameExists = error.response.data.error.errmsg.includes(
      "username"
    );
    if (emailExists) {
      message = "user already exists";
    } else if (usernameExists) {
      message = "user already exists";
    }
    console.dir(error.response);
    console.log(error.response.data.error.errmsg.includes("email"));

    return { registered: false, message };
  }
};
export default registerUser;
