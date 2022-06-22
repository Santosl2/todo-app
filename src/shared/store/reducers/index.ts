import { combineReducers } from "@reduxjs/toolkit";

import TodoReducer from "./todo/Todo";

export const combinedReducer = combineReducers({
  todo: TodoReducer,
});
