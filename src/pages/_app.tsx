import React from "react";
import { compose } from "redux";
import { SessionProvider } from "next-auth/react";
import { withRedux } from "app/state/makeStore";
import { AppLayout } from "app/layout/components/Layout";
import { GatewayProvider } from "services/gateway/GatewayProvider";

import "antd/dist/antd.min.css";
function AppProvider({ Component, pageProps: { ...pageProps } }) {
  return (
    <SessionProvider>
      <GatewayProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </GatewayProvider>
    </SessionProvider>
  );
}

export default compose(withRedux)(AppProvider);
