import { actions as auth } from "./auth";
import { actions as game } from "./game";

export const actions = {
  ...auth,
  ...game,
};
