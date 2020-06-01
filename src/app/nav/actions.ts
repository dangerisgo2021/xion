import { actionCreatorFactory } from "app/state/utils/factories/actionCreatorFactory";

const namespace = "nav";

export const navMenuItemClicked = actionCreatorFactory({
    namespace,
    type: "navMenuItemClicked"
});