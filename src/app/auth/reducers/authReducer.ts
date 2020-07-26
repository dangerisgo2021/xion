import ReducerBuilder from "app/state/utils/factories/ReducerBuilder";
import { userReceived, profileReceived } from "app/auth/actions";
import { setKeyToPayload } from "app/state/utils/reducers/setKeyToPayload";

export const authReducer = new ReducerBuilder()
  .setInitialState({ user: null })
  .addReducer(userReceived.type, setKeyToPayload({ key: "user" }))
  .addReducer(profileReceived.type, setKeyToPayload({ key: "profile" }))
  .build();
