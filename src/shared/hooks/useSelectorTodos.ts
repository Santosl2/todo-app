import { useSelector } from "react-redux";

import { Todo } from "../interfaces/Todo";

type TodoSelector = {
  todos: Todo;
};

export function useSelectorTodos(): Todo[] {
  const todos = useSelector<TodoSelector>((state) => state.todos) as Todo[];

  return todos;
}
