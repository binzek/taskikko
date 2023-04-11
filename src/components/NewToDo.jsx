import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const NewToDo = ({ setToDos, toDos }) => {
  const [newToDo, setNewToDo] = useState("");

  return (
    <div className="relative mt-2 flex items-center justify-between px-5 py-2">
      <input
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
        type="text"
        className="w-full border-b-gunmetal border-opacity-40 bg-transparent pb-1 pl-1 pr-6 font-light text-gunmetal outline-none focus:border-b dark:border-b-azure dark:border-opacity-30 dark:text-azure"
        placeholder="Type new task"
      />
      <AiOutlinePlus
        className="absolute right-5 cursor-pointer text-lg text-gunmetal opacity-60 dark:text-azure"
        onClick={() => {
          setNewToDo("");
          setToDos([...toDos, newToDo]);
        }}
      />
    </div>
  );
};

export default NewToDo;
