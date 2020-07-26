import { userReceived } from "app/auth/actions";
import ReducerBuilder from "app/state/utils/factories/ReducerBuilder";
import { setKeyToValue } from "app/state/utils/reducers/setKeyToValue";

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
