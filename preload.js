const { contextBridge } = require("electron");

const DEFAULT_API_BASE_URL =
  process.env.CYGNUS_API_BASE_URL ??
  process.env.VITE_API_BASE_URL ??
  "http://localhost:4000";

contextBridge.exposeInMainWorld("cygnusDesktop", {
  config: {
    apiBaseUrl: DEFAULT_API_BASE_URL,
  },
});
