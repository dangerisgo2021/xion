import ReducerBuilder from "app/state/utils/factories/ReducerBuilder";

export const navReducer = new ReducerBuilder()
  .setInitialState({
    items: {
      home: { href: "/", displayText: "Active Orders", id: "home" },
      checkout: { href: "/checkout", displayText: "Checkout", id: "checkout" },
      catalog: { href: "/catalog", displayText: "Catalog", id: "catalog" },
      forms: { href: "/forms", displayText: "Forms", id: "forms" },
      reports: { href: "/reports", displayText: "Reports", id: "reports" },
    },
  })
  .build();
