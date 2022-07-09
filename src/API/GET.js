import axios from "axios";
import { route, serviceRoute } from "./CONSTS";

export function getPosts() {
  return axios.get(`${route}/${serviceRoute}`);
}

export function getPostsById(id) {
  return axios.get(`${route}/${serviceRoute}/${id}`);
}
