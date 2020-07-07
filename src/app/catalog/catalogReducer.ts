import ReducerBuilder from "app/state/utils/factories/ReducerBuilder";
import { setKeyToPayloadKeyValue } from "app/state/utils/reducers/setKeyToPayloadKeyValue";
import { editCatalogItemClicked } from "./actions";

export const catalogReducer = new ReducerBuilder()
  .setInitialState({
    selectedItemToEdit: null,
  })
  .addReducer(
    editCatalogItemClicked.type,
    setKeyToPayloadKeyValue({
      key: "selectedItemToEdit",
      payloadKey: "id",
      defaultValue: null,
    })
  )
  .build();
