import { getNavigations } from "@ijl/cli";

const domen = "LichessEngine";
const navigations = getNavigations();

const homeURL = navigations[`${domen}.main`];
const authURL = navigations[`${domen}.auth`];
const settingsURL = navigations[`${domen}.settings`];

export enum PathStrings {
  // @ts-ignore
  HOME = homeURL,
  // @ts-ignore
  AUTH = authURL,
  // @ts-ignore
  SETTINGS = settingsURL,
}
