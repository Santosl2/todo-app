/* eslint-disable import/no-extraneous-dependencies */
import { ReactNode } from "react";
import { Provider } from "react-redux";

import { RootState } from "@/shared/store";
import { combinedReducer } from "@/shared/store/reducers";
import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";

export const testStore = (state: Partial<RootState>) => {
  return configureStore({
    reducer: combinedReducer,
    preloadedState: state,
  });
};

export const customRender = (component: any, initialState: any = {}) => {
  function Wrapper({ children }: { children: ReactNode }) {
    return <Provider store={testStore(initialState)}>{children}</Provider>;
  }
  return render(component, { wrapper: Wrapper });
};
