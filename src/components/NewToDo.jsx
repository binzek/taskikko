import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const NewToDo = ({ setToDos, toDos }) => {
  const [newToDo, setNewToDo] = useState("");

  return (
    <form
      className="relative mt-2 flex items-center justify-between px-5 py-2"
      onSubmit={(e) => {
        e.preventDefault();
        setToDos([...toDos, newToDo]);
        setNewToDo("");
      }}
    >
      <input
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
        type="text"
        id="newToDo"
        className="w-full border-b-gunmetal border-opacity-40 bg-transparent pb-1 pl-1 pr-6 font-light text-gunmetal outline-none focus:border-b invalid:focus:border-b-raspberry invalid:focus:placeholder:text-raspberry dark:border-b-azure dark:border-opacity-30 dark:text-azure dark:invalid:focus:border-b-raspberry"
        placeholder="Type new task"
        required
      />
      <button
        type="submit"
        className="absolute right-5 cursor-pointer text-lg text-gunmetal opacity-60 dark:text-azure"
      >
        <AiOutlinePlus />
      </button>
    </form>
  );
};

export default NewToDo;
