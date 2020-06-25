import ReducerBuilder from "app/state/utils/factories/ReducerBuilder";

export const navReducer = new ReducerBuilder()
  .setInitialState({
    items: {
      home: { href: "/", displayText: "Home", id: "home" },
      profile: { href: "/profile", displayText: "Profile", id: "profile" },
      catalog: { href: "/catalog", displayText: "Catalog", id: "catalog" },
      forms: { href: "/forms", displayText: "Forms", id: "forms" },
    },
  })
  .build();
