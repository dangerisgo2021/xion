import ReducerBuilder from "app/state/utils/factories/ReducerBuilder";
import { authReducer } from "app/auth/reducers/authReducer";
import { navReducer } from "app/nav/reducers/navReducer";
import { sessionReducer } from "app/session/reducers/sessionReducer";
import { avatarReducer } from "app/avatar/reducers/avatarReducer";
import { catalogReducer } from "app/catalog/reducers/catalogReducer";
import { reportsReducer } from "app/reports/reducers/reportsReducer";
import { checkoutReducer } from "app/checkout/reducers/checkoutReducer";

const rootReducerBuilder = new ReducerBuilder()
  .combine("auth", authReducer)
  .combine("avatar", avatarReducer)
  .combine("catalog", catalogReducer)
  .combine("checkout", checkoutReducer)
  .combine("nav", navReducer)
  .combine("reports", reportsReducer)
  .combine("session", sessionReducer);

export const rootReducer = rootReducerBuilder.build();
