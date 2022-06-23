/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

import { motion, Variants } from "framer-motion";
import { Trash } from "phosphor-react";

import { useSelectorTodos } from "@/shared/hooks/useSelectorTodos";
import { updateTodo, deleteTodo } from "@/shared/store/reducers/todo/Todo";

import { ItemProps } from "./Item.types";

const itemVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export function Item({ id, text }: ItemProps) {
  const [isVisible, setIsVisible] = useState(true);
  const tasks = useSelectorTodos();
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    setIsVisible(false);

    dispatch(deleteTodo({ id }));
  }, [id]);

  const verifyIsCompleted = useMemo(
    () => tasks.find((t) => t.id === id)?.isCompleted ?? false,
    [tasks, id]
  );

  const handleChecked = useCallback(() => {
    dispatch(
      updateTodo({
        id,
        isCompleted: !verifyIsCompleted,
      })
    );
  }, [verifyIsCompleted]);

  const classNamesFromText = useMemo(() => {
    return ["line-through", "text-sm", "text-gray-100", "text-gray-300"]
      .filter((e) =>
        !verifyIsCompleted
          ? !e.includes("line-through") && !e.includes("text-gray-300")
          : e
      )
      .join(" ");
  }, [verifyIsCompleted]);

  return (
    <>
      {isVisible && (
        <motion.li
          layout
          variants={itemVariants}
          initial="initial"
          animate="animate"
          className="mb-3 flex w-full justify-between rounded-lg bg-gray-500 p-4"
        >
          <label className="flex items-center gap-3">
            <input
              data-testid="checkboxItemTest"
              id="checkbox"
              type="checkbox"
              className="h-4 w-4 cursor-pointer rounded-full border-blue-300 bg-transparent checked:bg-purple-500 checked:hover:bg-purple-500 focus:ring-0 transition-all"
              onChange={handleChecked}
              defaultChecked={verifyIsCompleted}
            />
            <p className={classNamesFromText}>{text}</p>
          </label>
          <button
            className="text-gray-300 transition-colors hover:text-red-500 hover:bg-gray-600 p-1 rounded"
            type="button"
            onClick={handleDelete}
            data-testid="deleteItemTest"
          >
            <Trash size={24} />
          </button>
        </motion.li>
      )}
    </>
  );
}
