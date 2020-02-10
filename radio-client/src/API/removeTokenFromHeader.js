const removeTokenFromHeader = (API, headerName) => {
  delete API.defaults.headers.common[headerName];
};
export default removeTokenFromHeader;
