import axios from "axios";
import { route, serviceRoute } from "./CONSTS";

// create a function using axios to update a post to the API
export function updatePost(id, post) {
  return axios.put(`${route}/${serviceRoute}/${id}`, post);
}
