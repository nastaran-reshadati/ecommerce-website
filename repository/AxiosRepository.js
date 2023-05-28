import axios from "axios";
import server from "../configuration/Constants.json";

export const GetReq = (url) => {
  return axios.get(`${server.SERVER_ADDRESS}${url}`);
};
