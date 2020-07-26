import React from "react";
import App from "next/app";
import dynamic from "next/dynamic";
import withRedux from "next-redux-wrapper";
import { compose } from "redux";
import { makeStore } from "app/state/makeStore";
import { withGateway } from "app/gateway/withGateway";
import { Provider } from "react-redux";

import "antd/dist/antd.min.css";

const ApolloProvider = dynamic(
  import("@apollo/client").then(({ ApolloProvider }) => ApolloProvider)
);
const AppLayout = dynamic(
  import("app/layout/components/Layout").then(({ AppLayout }) => AppLayout)
);
const AuthProvider = dynamic(
  import("app/auth/components/AuthProvider").then(({ AuthProvider }) => AuthProvider)
);

//Root of application where all providers and layout are handle or all pages
const AppProvider = ({ Component, pageProps, store, graphqlClient }) => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ApolloProvider client={graphqlClient}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ApolloProvider>
      </AuthProvider>
    </Provider>
  );
};

AppProvider.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default compose(withGateway, withRedux(makeStore))(AppProvider);
