import React from "react";
import { compose } from "redux";
import { AuthProvider } from "app/auth/components/AuthProvider";
import { withRedux } from "app/state/makeStore";
import { AppLayout } from "app/layout/components/Layout";
import { GatewayProvider } from "services/gateway/GatewayProvider";

import "antd/dist/antd.min.css";
function AppProvider({ Component, pageProps: { ...pageProps } }) {
  return (
    <AuthProvider>
      <GatewayProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </GatewayProvider>
    </AuthProvider>
  );
}

export default compose(withRedux)(AppProvider);
