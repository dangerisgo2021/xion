import { menuItemClicked } from "app/avatar/actions";
import { createWatcherMiddleware } from "app/state/utils/factories/createWatcherMiddleware";
import { getAuthClient } from "app/auth/components/AuthProvider";
import { apolloClient } from "app/gateway/graphql/initGraphqlClient";
import { loginMutation } from "app/auth/mutations/loginMutation";
export const login = createWatcherMiddleware({
  actionType: menuItemClicked.type,
  postReducer: true,
  execute: async ({ action }) => {
    const authClient = getAuthClient();
    if (action?.payload?.id === "login") {
      const user = await authClient.loginWithPopup();

      if (user) {
        apolloClient.mutate({
          mutation: loginMutation,
        });
      }
    }
  },
});
