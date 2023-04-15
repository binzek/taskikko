import React, { useState } from "react";

import { ToDo, NewToDo } from "./";

const ToDos = () => {
  const [toDos, setToDos] = useState([]);

  return (
    <div className="mx-auto my-6 flex w-11/12 flex-col gap-1 rounded-md bg-gray-200 py-3  dark:bg-gray-900 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-7/12">
      {toDos.map((value, index) => (
        <ToDo
          value={value}
          key={index}
          index={index}
          setToDos={setToDos}
          toDos={toDos}
        />
      ))}
      <NewToDo setToDos={setToDos} toDos={toDos} />
    </div>
  );
};

export default ToDos;
