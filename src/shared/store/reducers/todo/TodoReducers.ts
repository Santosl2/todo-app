import { PayloadAction } from "@reduxjs/toolkit";

export const todoReducers = {
  addTodo: (state: any, { payload }: PayloadAction) => {
    return {
      ...state,
      todos: "f",
    };
  },
};
