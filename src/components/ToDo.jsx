import React, { useState } from "react";

const ToDo = ({ value, index, setToDos, toDos }) => {
  const [checkBox, setCheckBox] = useState(false);

  return (
    <div className="group flex cursor-default items-center justify-between px-5 py-2 duration-200 hover:bg-azure dark:hover:bg-gunmetal">
      <input
        checked={checkBox}
        onChange={(e) => {
          setCheckBox(e.target.checked);
          setTimeout(() => {
            if (e.target.checked) {
              toDos.splice(index, 1);
              setToDos([...toDos]);
              setCheckBox(!e.target.checked);
            }
          }, 500);
        }}
        type="checkbox"
        className="todo-checkbox peer h-3.5 w-3.5 cursor-pointer appearance-none rounded-full border border-gunmetal duration-200 checked:bg-keppel dark:border-azure"
      />

      <label className="ml-3 flex-1 font-light text-gunmetal decoration-1 peer-checked:line-through peer-checked:opacity-40 dark:text-azure">
        {value}
      </label>
    </div>
  );
};

export default ToDo;
