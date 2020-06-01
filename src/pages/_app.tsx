import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { compose } from "redux";
import { ApolloProvider } from "@apollo/client";
import { withGateway } from "app/gateway/withGateway";
import { AppLayout } from "app/layout/Layout";
import { makeStore } from "app/state/makeStore";
import { AuthProvider } from "app/auth/AuthProvider";

import "antd/dist/antd.min.css";

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
