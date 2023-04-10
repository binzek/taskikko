import React from "react";
import { CiTrash } from "react-icons/ci";

const ToDo = () => {
  return (
    <div className="group flex cursor-default items-center justify-between px-5 py-2 duration-200 hover:bg-azure dark:hover:bg-gunmetal">
      <input
        type="checkbox"
        className="todo-checkbox peer h-3.5 w-3.5 cursor-pointer appearance-none rounded-full border border-gunmetal duration-200 checked:bg-keppel dark:border-azure"
      />
      <label className="ml-3 flex-1 font-light text-gunmetal decoration-1 peer-checked:line-through peer-checked:opacity-40 dark:text-azure">
        Draw a complete portrait
      </label>
      <CiTrash className="invisible cursor-pointer text-raspberry group-hover:visible" />
    </div>
  );
};

export default ToDo;
