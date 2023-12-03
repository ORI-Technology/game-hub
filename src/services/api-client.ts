import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bf529ad78e964cf1b5d179e7d6f6922e",
  },
});
