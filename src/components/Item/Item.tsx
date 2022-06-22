/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCallback, useMemo, useState } from "react";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { Trash } from "phosphor-react";

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
  exit: {
    opacity: 0,
  },
};

export function Item({ id, text }: ItemProps) {
  const [checkBoxChecked, setCheckBoxChecked] = useState(false);
  const [isVisble, setIsVisble] = useState(true);

  const handleDelete = useCallback(() => {
    setIsVisble(false);

    console.log("delete", id);
  }, []);

  const classNamesFromText = useMemo(() => {
    return ["line-through", "text-sm", "text-gray-100", "text-gray-300"]
      .filter((e) =>
        !checkBoxChecked
          ? !e.includes("line-through") && !e.includes("text-gray-300")
          : e
      )
      .join(" ");
  }, [checkBoxChecked]);

  return (
    <AnimatePresence>
      {isVisble && (
        <motion.li
          layout
          variants={itemVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="mb-3 flex w-full justify-between rounded-lg bg-gray-500 p-4"
        >
          <label className="flex items-center gap-3">
            <input
              id="checkbox"
              type="checkbox"
              onChange={(e) => setCheckBoxChecked(e.target.checked)}
              className="h-4 w-4 cursor-pointer rounded-full border-blue-300 bg-transparent checked:bg-purple-500 checked:hover:bg-purple-500 focus:ring-0 transition-all"
            />
            <p className={classNamesFromText}>{text}</p>
          </label>
          <button
            className="text-gray-300 transition-colors hover:text-red-500 hover:bg-gray-600 p-1 rounded"
            type="button"
            onClick={handleDelete}
          >
            <Trash size={24} />
          </button>
        </motion.li>
      )}
    </AnimatePresence>
  );
}
