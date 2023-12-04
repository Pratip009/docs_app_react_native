import axios from "axios";

const BASE_URL = "http://192.168.1.103:1337/api";
const API_KEY =
  "7f9aaf3052f2d6a9759514c5c6fd20fb6a2b70a571c85ff9c0dcafd6c5539f1b2bf060ced4e2ebec54aace7fcf6b443e60051352470f6f03cf4f7b6db9e938aeebe0000dd0166522ffd2a8797e1f5b9ecb77d576661ff3366e21c0dbe70ace11d7d0f5d7de5bfb603d0f055847b1d3abb92e169c310d79f618eea8c0c57f8c15";
const axiosInstace = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "Bearer " + API_KEY,
  },
});

const getSlider = () => axiosInstace.get("/sliders?populate=*");

export default {
  getSlider,
};
