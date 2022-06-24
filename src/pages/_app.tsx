/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import type { AppProps } from "next/app";

import "../styles/globals.scss";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "@/shared/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={<>Loading</>} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
