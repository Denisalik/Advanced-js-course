import { getConfig } from "@ijl/cli";

export const api = {
  URL: getConfig()["LichessEngine.backendurl"],
  PORT: getConfig()["LichessEngine.backendport"],
  API: {
    API: "api",
    AUTH: "auth",
    USERS: "users",
    LOGIN: "login",
    RELOGIN: "relogin",
    REGISTRATION: "registration",
    GAME_SETTINGS: "changesettings",
    ACCOUNT_SETTINGS: "changecredentials",
  },
};
