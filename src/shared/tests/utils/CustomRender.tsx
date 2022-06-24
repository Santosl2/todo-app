/* eslint-disable import/no-extraneous-dependencies */
import { ReactNode } from "react";
import { Provider } from "react-redux";

import { RootState } from "@/shared/store";
import { combinedReducer } from "@/shared/store/reducers";
import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";

import { RenderReturnProps } from "../interfaces";

export const testStore = (state: Partial<RootState>) => {
  return configureStore({
    reducer: combinedReducer,
    preloadedState: state,
  });
};

export const renderWithRedux = (
  component: ReactNode,
  initialState: object = {},
  renderFn: ReturnType<typeof render> | any = render
): RenderReturnProps => {
  const mockStore = testStore(initialState);

  const obj = {
    ...renderFn(<Provider store={mockStore}>{component}</Provider>),
    mockStore,
    rerenderWithRedux: null,
  };

  obj.rerenderWithRedux = (el: ReactNode, nextState: any) => {
    if (nextState) {
      mockStore.replaceReducer(() => nextState);
      mockStore.dispatch({ type: "__TEST_ACTION_REPLACE_STATE__" });
      mockStore.replaceReducer(combinedReducer);
    }

    return renderWithRedux(el, mockStore, obj.rerender);
  };

  return obj;
};
