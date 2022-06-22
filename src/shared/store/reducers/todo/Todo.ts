import { Todo } from "@/shared/interfaces/Todo";
import { createSlice } from "@reduxjs/toolkit";

import { todoReducers } from "./TodoReducers";

const initialState = [] as Todo[];

export const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: todoReducers,
});

export const { addTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
