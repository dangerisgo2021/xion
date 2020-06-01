import ReducerBuilder from "app/state/utils/factories/ReducerBuilder";

export const avatarReducer = new ReducerBuilder()
  .setInitialState({
    menuItems: {
      login: { text: "Login", id: "login" },
      logout: { text: "Logout", id: "logout" },
      profile: { text: "Profile", id: "profile" },
    },
  })
  .build();
