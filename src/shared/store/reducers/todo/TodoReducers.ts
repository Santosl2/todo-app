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

  updateTodo: (
    state: any,
    { payload }: PayloadAction<Pick<Todo, "id" | "isCompleted">>
  ) => {
    const findByPayloadId = state.find((e: Todo) => e.id === payload.id);
    const findAllStates = state.filter((e: Todo) => e.id !== payload.id);

    return [
      ...findAllStates,
      {
        ...findByPayloadId,
        isCompleted: payload.isCompleted,
      },
    ];
  },

  deleteTodo: (state: any, { payload }: PayloadAction<Pick<Todo, "id">>) => {
    const findAllStates = state.filter((e: Todo) => e.id !== payload.id);

    return [...findAllStates];
  },
};
