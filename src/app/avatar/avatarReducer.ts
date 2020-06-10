import ReducerBuilder from "app/state/utils/factories/ReducerBuilder";
import { userReceived } from "../auth/actions";
import { setKeyToValue } from "../state/utils/reducers/setKeyToValue";

export const avatarReducer = new ReducerBuilder()
  .setInitialState({
    menuItems: {
      login: { text: "Login", id: "login" },
      logout: { text: "Logout", id: "logout" },
      profile: { text: "Profile", id: "profile" },
    },
    currentMenuItems: {
      login: { text: "Login", id: "login" },
    },
  })
  // .addReducer(userReceived.type, (state, action) => {
  //   console.log("userReceived", { state, action });
  //   return {
  //     ...state,
  //     currentMenuItems: {
  //       logout: { text: "Logout", id: "logout" },
  //       profile: { text: "Profile", id: "profile" },
  //     },
  //   };
  // })
  .addReducer(
    userReceived.type,
    setKeyToValue({
      key: "currentMenuItems",
      value: {
        logout: { text: "Logout", id: "logout" },
        profile: { text: "Profile", id: "profile" },
      },
    })
  )
  .build();
