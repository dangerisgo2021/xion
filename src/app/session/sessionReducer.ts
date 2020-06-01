import ReducerBuilder from "app/state/utils/factories/ReducerBuilder";
// noinspection SpellCheckingInspection
import { v1 as uuidv1 } from "uuid";

export const sessionReducer = new ReducerBuilder()
  .setInitialState({
    id: uuidv1(),
  })
  .build();
