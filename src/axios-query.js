import axios from "axios";

const instance = axios.create({
  baseURL: "https://hotel-la-vista.firebaseio.com/"
});

export default instance;
