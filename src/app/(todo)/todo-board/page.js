import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import ToDoCardBoard from "@/components/ToDoCardBoard";
import TodoCardComponent from "@/components/TodoCardComponent";
import WorkingCardBoard from "@/components/WorkingCardBoard";
import React from "react";

function TodoBoard({ type }) {
  return (
    <div className="h-full overflow-y-scroll lg:overflow-y-hidden">
      <ListBoardComponentHeader type={"Board"} />
      <div className="flex flex-col lg:flex-row lg:h-[90%] mt-3 gap-5 justify-between w-full pb-10 overflow-y-scroll">
      <ToDoCardBoard/>
      <WorkingCardBoard/>
      <ToDoCardBoard/>
      <ToDoCardBoard/>
      </div>

    </div>
  );
}

export default TodoBoard;
