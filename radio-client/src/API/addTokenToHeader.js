const addTokenToHeader = (API, headerName) => {
  API.defaults.headers.common[headerName] = localStorage.getItem("token");
};
// logical flow:
// if token is expired,delete the token in localStorage,and remove it from header
// if token does not exist, consider user logout
export default addTokenToHeader;
