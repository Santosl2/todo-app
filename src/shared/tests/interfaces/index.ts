import { ReactNode } from "react";

import { RootState } from "@/shared/store";
import { EnhancedStore } from "@reduxjs/toolkit";

export type StoreProps = EnhancedStore<RootState>;

export type RenderReturnProps = {
  mockStore: StoreProps;
  rerenderWithRedux: (el: ReactNode, nextState: any) => void;
};
