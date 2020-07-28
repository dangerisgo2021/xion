import ReducerBuilder from "app/state/utils/factories/ReducerBuilder";
import { setKeyToPayloadKeyValue } from "app/state/utils/reducers/setKeyToPayloadKeyValue";
import { receivedCheckoutSummary } from "app/checkout/actions";

export const checkoutReducer = new ReducerBuilder()
  .setInitialState({
    orders: undefined,
  })
  .addReducer(
    receivedCheckoutSummary.type,
    setKeyToPayloadKeyValue({
      key: "orders",
      payloadKey: "orders",
      defaultValue: [],
    })
  )
  .build();
