import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  split,
  concat,
  ApolloLink,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/link-ws";
import { getSession } from "app/session/selectors/getSession";
import { getSessionUserId } from "app/auth/selectors/getSessionUserId";

export const createBrowserClient = ({ initialState, uri }) => {
  const httpLink = new HttpLink({ uri });

  const contextMiddleware = new ApolloLink((operation, forward) => {
    const state = (window as any)?.__REDUX_STORE__?.getState();
    const session = getSession(state);
    const userId = getSessionUserId(state);
    operation.setContext(({ headers = {} }) => {
      return {
        headers: {
          ...headers,
          authorization: userId,
          session: session?.id,
          client: session?.clientId,
        },
      };
    });

    return forward(operation);
  });

  const wsLink = new WebSocketLink({
    uri: uri.replace("http", "ws"),
    options: {
      reconnect: true,
    },
  });
  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    httpLink
  );
  return new ApolloClient({
    cache: new InMemoryCache().restore(initialState || {}),
    link: concat(contextMiddleware, splitLink),
    connectToDevTools: true,
  });
};
