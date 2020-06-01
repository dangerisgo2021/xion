import ReducerBuilder from "app/state/utils/factories/ReducerBuilder";
import { authReducer } from "app/auth/authReducer";
import { navReducer } from "app/nav/navReducer";
import { sessionReducer } from "app/session/sessionReducer";
import { avatarReducer } from "app/avatar/avatarReducer";

const rootReducerBuilder = new ReducerBuilder()
  .combine("auth", authReducer)
  .combine("nav", navReducer)
  .combine("avatar", avatarReducer)
  .combine("session", sessionReducer);

export const rootReducer = rootReducerBuilder.build();
