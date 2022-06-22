/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCallback, useMemo, useState } from "react";

import { Trash } from "phosphor-react";

import { ItemProps } from "./Item.types";

export function Item({ id, text }: ItemProps) {
  const [checkBoxChecked, setCheckBoxChecked] = useState(false);

  const handleDelete = useCallback(() => {
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
    <div className="mb-3 flex w-full justify-between rounded-lg bg-gray-500 p-4">
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
    </div>
  );
}
