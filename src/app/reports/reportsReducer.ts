import ReducerBuilder from "app/state/utils/factories/ReducerBuilder";
import { setKeyToPayload } from "app/state/utils/reducers/setKeyToPayload";
import { receivedOrdersReport } from "./actions";

export const reportsReducer = new ReducerBuilder()
  .setInitialState({
      ordersReport: null,
  })
  .addReducer(
    receivedOrdersReport.type,
    setKeyToPayload({
      key: "ordersReport",
    })
  )
  .build();
