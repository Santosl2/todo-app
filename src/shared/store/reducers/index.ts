import { combineReducers } from "@reduxjs/toolkit";

import TodoReducer, { TodoSliceName } from "./todo/Todo";

export const combinedReducer = combineReducers({
  [TodoSliceName]: TodoReducer,
});
