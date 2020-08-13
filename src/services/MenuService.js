import axios from "../../node_modules/axios";

const apiClient = axios.create({
  baseURL: "https://cdn-scorpius.elifebackup.com/files/menu.json",
  withCredentials: false,
  header: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getMenu() {
    return apiClient.get("/navigation");
  },

  getMenuItems() {
    return apiClient.get("/navigation");
  },
  getFooterMenu() {
    return apiClient.get("/footer");
  },
};
