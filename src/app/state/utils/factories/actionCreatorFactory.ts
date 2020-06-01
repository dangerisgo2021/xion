const { get, set } = require("lodash");

const ActionTypes = {};

const registerActionType = ({ namespace = "ACTION", type }) => {
  if (!ActionTypes[namespace]) {
    ActionTypes[namespace] = {};
  }

  const actionTypeList = [namespace, type];
  const actionString = actionTypeList.join(".");
  if (!get(ActionTypes, actionString)) {
    ActionTypes[namespace] = {};
  }

  if (get(ActionTypes, actionString)) {
    throw new Error(
      "Registering ActionType that already exists : " +
        ActionTypes[actionString]
    );
  } else {
    const actionType = actionTypeList.join("::");
    set(ActionTypes, actionString, actionType);
    return actionType;
  }
};

export const actionCreatorFactory = ({
  namespace,
  type,
  creator = (...args) => ({ ...args }),
}) => {
  let registeredType = registerActionType({ namespace, type });
  const actionCreator = (...args) => {
    return {
      type: registeredType,
      payload: creator ? creator(...args) : {},
      // disabling set meta till i can figure out why this is null
      //     meta: this?.meta,
    };
  };
  actionCreator.type = registeredType;

  // actionCreator.setMeta = (meta) => {
  //   this.meta = meta;
  //   return actionCreator;
  // };
  return actionCreator;
};

export {};
