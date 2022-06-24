import {
  BaseSyntheticEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDispatch } from "react-redux";

import { PlusCircle } from "phosphor-react";

import { useSelectorTodos } from "@/shared/hooks/useSelectorTodos";
import { addTodo } from "@/shared/store/reducers/todo/Todo";

import { Button } from "../Button";
import { Input } from "../Input";

export function MainForm(): JSX.Element {
  const [inputValue, setInputValue] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();
  const todoSelector = useSelectorTodos();

  const buttonIsDisabled = useMemo(
    () => inputValue.trim().length <= 0,
    [inputValue]
  );

  const handleSubmit = useCallback(
    (e: BaseSyntheticEvent) => {
      e.preventDefault();

      const id = todoSelector.length + 1;

      dispatch(
        addTodo({
          id,
          value: inputValue,
          isCompleted: false,
        })
      );

      e.target.reset();
      setInputValue("");
    },
    [inputValue, todoSelector]
  );

  return (
    <form
      className="flex w-full items-center justify-center gap-2"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="O que você precisa fazer?"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
        }}
      />
      <Button
        type="submit"
        disabled={buttonIsDisabled}
        data-testid="createBtnTest"
      >
        Criar <PlusCircle weight="bold" size={16} />
      </Button>
    </form>
  );
}
