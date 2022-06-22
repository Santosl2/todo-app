import { Todo } from "@/shared/interfaces/Todo";
import { PayloadAction } from "@reduxjs/toolkit";

export const todoReducers = {
  addTodo: (state: any, { payload }: PayloadAction<Todo>) => {
    return [
      ...state,
      {
        ...payload,
      },
    ];
  },
};
