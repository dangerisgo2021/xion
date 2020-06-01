import ReducerBuilder from "app/state/utils/factories/ReducerBuilder";

export const navReducer = new ReducerBuilder()
  .setInitialState({
    items: {
      home: { href: "/", displayText: "Home", id: "home" },
      search: { href: "/search", displayText: "Search", id: "search" },
    },
  })
  .build();
