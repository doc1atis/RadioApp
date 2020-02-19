import decode from "jwt-decode";
import { createBrowserHistory } from "history";
function isAuthenticated(API) {
  const token = localStorage.getItem("token");
  if (token) {
    let decodeToken = decode(token);
    const currentTimeInSecond = Date.now() / 1000;
    const tokenExpirationTime = decodeToken.exp;
    if (tokenExpirationTime < currentTimeInSecond) {
      localStorage.removeItem("token");
      if (API) {
        delete API.defaults.headers.common["authorization-x-token"];
      }
      createBrowserHistory().push("/signin");
      return false;
    } else {
      if (API) {
        API.defaults.headers.common["authorization-x-token"] = token;
      }
      return true;
    }
  } else {
    createBrowserHistory().push("/signin");
    return false;
  }
}
export default isAuthenticated;
