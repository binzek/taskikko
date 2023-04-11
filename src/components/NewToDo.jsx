import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const NewToDo = () => {
  return (
    <div className="relative mt-2 flex items-center justify-between px-5 py-2">
      <input
        type="text"
        className="peer w-full border-b-gunmetal border-opacity-40 bg-transparent pb-1 pl-1 pr-6 font-light text-gunmetal outline-none focus:border-b dark:border-b-azure dark:border-opacity-30 dark:text-azure"
        placeholder="Type new task"
      />
      <AiOutlinePlus className="invisible absolute right-5 cursor-pointer text-lg text-gunmetal opacity-60 peer-focus:visible dark:text-azure" />
    </div>
  );
};

export default NewToDo;
