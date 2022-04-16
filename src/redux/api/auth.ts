import { api } from ".";

const loginURL = () =>
  `${api.URL}:${api.PORT}/${api.API.API}/${api.API.AUTH}/${api.API.LOGIN}`;
const reloginURL = () =>
  `${api.URL}:${api.PORT}/${api.API.API}/${api.API.AUTH}/${api.API.RELOGIN}`;
const registrationURL = () =>
  `${api.URL}:${api.PORT}/${api.API.API}/${api.API.AUTH}/${api.API.REGISTRATION}`;
export { loginURL, registrationURL, reloginURL };
