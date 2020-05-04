import axios from "axios";

export default axios.create({
  baseURL: "http://covid19.idata.uz:1919/",
  responseType: "json",
});
