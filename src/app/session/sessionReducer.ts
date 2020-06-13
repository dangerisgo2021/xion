import ReducerBuilder from "app/state/utils/factories/ReducerBuilder";
import { v1 as uuid } from "uuid";

export const sessionReducer = new ReducerBuilder()
  .setInitialState({
    id: uuid(),
      clientId: "xionFrontDeskWeb"
  })
  .build();
