import { useSelector } from "react-redux";

import { Todo } from "../interfaces/Todo";
import { TodoSliceName } from "../store/reducers/todo/Todo";

type TodoSelector = {
  todos: Todo;
};

export function useSelectorTodos(): Todo[] {
  const todos = useSelector<TodoSelector>(
    (state) => state[TodoSliceName]
  ) as Todo[];

  return todos;
}
