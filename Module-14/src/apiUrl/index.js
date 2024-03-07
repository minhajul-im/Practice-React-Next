import axios from "axios";

import { base_url } from "../services/index";

export const newAxios = axios.create({
  baseURL: base_url,
});
