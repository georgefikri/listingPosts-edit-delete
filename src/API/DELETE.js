import axios from "axios";
const route = "https://jsonplaceholder.typicode.com";
const serviceRoute = "posts";

// in case of real api this fn will be used to delete post
export function removePost(id) {
  return axios.delete(`${route}/${serviceRoute}/${id}`);
}
