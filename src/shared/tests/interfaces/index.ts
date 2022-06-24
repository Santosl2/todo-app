/* eslint-disable import/no-extraneous-dependencies */
import { ReactNode } from "react";

import { RootState } from "@/shared/store";
import { EnhancedStore } from "@reduxjs/toolkit";
import { RenderResult } from "@testing-library/react";

export type StoreProps = EnhancedStore<RootState>;

export type RenderReturnProps = RenderResult & {
  mockStore: StoreProps;
  rerenderWithRedux: (el: ReactNode, nextState: any) => void;
};
