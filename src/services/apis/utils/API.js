import axios from "axios";
import apiConfig from "../apiConfig";
import { getAccessToken } from "./Storage";
import { responseCodes } from "../../../constants/global";

export default class API {
  constructor(baseURL = apiConfig.api, defaultToken = false) {
    this.baseURL = baseURL;

    this.instance = axios.create({
      baseURL: this.baseURL,
      headers: {
        "Content-Type": "application/json",
      }
    });
    this.instance.interceptors.request.use(config => {
      let token = defaultToken || getAccessToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
    });
    this.instance.interceptors.response.use(
      response => {
        return response;
      },
      data => {
        if (data && data.response && data.response.status) {
          if (data.response.status === responseCodes["401"]) {
            // Needs proper fixing, patching it to fix infinite reload
            localStorage.clear();
            
            window.location.href = "/login";
          }
        }
        return Promise.reject(data.response);
      }
    );
  }

  callApi({ method = "get", ...rest }) {
    return this.instance({ method, ...rest });
  }
}
