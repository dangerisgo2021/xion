import { actionCreatorFactory } from "app/state/utils/factories/actionCreatorFactory";

const namespace = "auth";

export const userReceived = actionCreatorFactory({
  namespace,
  type: "userReceived",
});

export const profileReceived = actionCreatorFactory({
  namespace,
  type: "profileReceived",
});