import { getAllTaskById } from "@/app/services/task";
import { getWorkSpaceById } from "@/app/services/workspace";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import ToDoCardBoard from "@/components/ToDoCardBoard";
import WorkingCardBoard from "@/components/WorkingCardBoard";
import React, { Suspense } from "react";

async function TodoBoard({ params }) {
  const id = parseInt(params.id);
  const workSpace = await getWorkSpaceById(id);
  const taskById = await getAllTaskById(id);
  console.log("borad",workSpace)
  console.log("board1",taskById)
  return (
    <div className="h-full overflow-y-scroll lg:overflow-y-hidden">
        <ListBoardComponentHeader type={"Board"} workSpace={workSpace} />
        <div className="flex flex-col lg:flex-row lg:h-[90%] mt-3 gap-5 justify-between w-full pb-10 overflow-y-scroll">
          <ToDoCardBoard taskById={taskById} />
          <WorkingCardBoard taskById={taskById} />
          <WorkingCardBoard taskById={taskById} />
        </div>
    </div>
  );
}

export default TodoBoard;
