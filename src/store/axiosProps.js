/*
 * Так проще управлять настройкой API
 *
 * */
import axios from "axios";
const PROXY_URL = "https://thingproxy.freeboard.io/fetch/";
const SERVER_URL = `http://test.goodwan.ru:16000/api`;

export const ROUTES = {
  get: {
    things: "/things",
    types: "/types",
  },
  post: {
    youAPIroutName: "you route",
  },
  put: {
    things: "/things",
  },
  delete: {
    youAPIroutName: "you route",
  },
};

export const instance = axios.create({
  baseURL: `${PROXY_URL}${SERVER_URL}`,
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json;charset=utf-8",
  },
});
