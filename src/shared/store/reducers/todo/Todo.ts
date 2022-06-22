import { Todo } from "@/shared/interfaces/Todo";
import { createSlice } from "@reduxjs/toolkit";

import { todoReducers } from "./TodoReducers";

const initialState = [] as Todo[];

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: todoReducers,
});

export const TodoSliceName = TodoSlice.name;

export const { addTodo, updateTodo, deleteTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
