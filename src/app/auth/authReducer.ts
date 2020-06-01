import ReducerBuilder from "app/state/utils/factories/ReducerBuilder";
import { userReceived, profileReceived } from "app/auth/actions";
import { setKeyToPayload } from "app/state/utils/reducers/setKeyToPayload";
import { setKeyToPayloadKeyValue } from "app/state/utils/reducers/setKeyToPayloadKeyValue";

export const authReducer = new ReducerBuilder()
  .addReducer(userReceived.type, setKeyToPayloadKeyValue({ key: "user" }))
  .addReducer(profileReceived.type, setKeyToPayload({ key: "profile" }))
  .build();
