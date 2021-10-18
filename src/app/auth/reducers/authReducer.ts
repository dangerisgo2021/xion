import ReducerBuilder from "app/state/utils/factories/ReducerBuilder";
import {
  userReceived,
  profileReceived,
  sessionReceived,
} from "app/auth/actions";
import { setKeyToPayload } from "app/state/utils/reducers/setKeyToPayload";
import { setKeyToPayloadKeyValue } from "app/state/utils/reducers/setKeyToPayloadKeyValue";

export const authReducer = new ReducerBuilder()
  .addReducer(userReceived.type, setKeyToPayload({ key: "user" }))
  .addReducer(profileReceived.type, setKeyToPayload({ key: "profile" }))
  .addReducer(
    sessionReceived.type,
    setKeyToPayloadKeyValue({ key: "session", payloadKey: "session" })
  )
  .build();
