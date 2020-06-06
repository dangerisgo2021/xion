import ReducerBuilder from "app/state/utils/factories/ReducerBuilder";

export const navReducer = new ReducerBuilder()
  .setInitialState({
    items: {
      home: { href: "/", displayText: "Home", id: "home" },
      profile: { href: "/profile", displayText: "Profile", id: "profile" },
    },
  })
  .build();
