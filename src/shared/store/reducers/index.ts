import { combineReducers } from "@reduxjs/toolkit";

import TodoReducer, { TodoSlice } from "./todo/Todo";

export const combinedReducer = combineReducers({
  [TodoSlice.name]: TodoReducer,
});
