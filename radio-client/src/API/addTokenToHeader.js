const addTokenToHeader = (API, headerName) => {
  // API.defaults.headers.common[headerName] = localStorage.getItem("token");
  API.defaults.headers.common[headerName] =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlM2M0ZjMxOTllNWNkNzIxNGYyMmFmYyIsInVzZXJuYW1lIjoib2xneSIsImlhdCI6MTU4MTUzMjc2NCwiZXhwIjoxNjEzMDY4NzY0fQ.xpqzyTXf6ZUFMpZWOR8Mccv-EilRT6YRUIMcwpZXKoE";
};
// logical flow:
// if token is expired,delete the token in localStorage,and remove it from header
// if token does not exist, consider user logout
export default addTokenToHeader;
