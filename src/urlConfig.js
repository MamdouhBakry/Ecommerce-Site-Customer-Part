const baseUrl = "https://flipkart-rest-api.herokuapp.com";
// window.location.hostname === "localhost"
//   ? "http://localhost:5000"
//   : "https://flipkart-rest-api.herokuapp.com";
export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
