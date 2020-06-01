import { actionCreatorFactory } from "app/state/utils/factories/actionCreatorFactory";

const namespace = "sider";

export const collapseSider = actionCreatorFactory({
    namespace,
    type: "collapseSider",
});

export const expandSider = actionCreatorFactory({
    namespace,
    type: "expandSider",
});

export const sliderBreak = actionCreatorFactory({
    namespace,
    type: "sliderBreak",
    creator: (broken) => broken,
});

export const clickedOutsideExpandedSider = actionCreatorFactory({
    namespace,
    type: "clickedOutsideExpandedSider"
});