import { getAllTaskById } from "@/app/services/task";
import { getWorkSpaceById } from "@/app/services/workspace";
import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import ListToDoCard from "@/components/ListToDoCard";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import NavbarComponent from "@/components/NavbarComponent";
import React from "react";

async function WorkSpaceId({ params }) {
  const id = parseInt(params.id);
  const workSpace = await getWorkSpaceById(id);

  const taskById = await getAllTaskById(id);

  return (
    <>
     <div className="flex flex-col h-full overflow-y-scroll lg:overflow-y-hidden  pb-10">
      <ListBoardComponentHeader workSpace={workSpace}  type={"List"} />

      <div className="flex lg:h-[92%] gap-5 flex-col lg:flex-row overflow-y-scroll">
        {taskById.length === 0 ? (
          <div className="flex justify-center w-full items-center text-4xl text-center font-bold">
            No Task
          </div>
        ) : (
          <>
            <div className="mt-5 lg:h-[95%] flex gap-3 flex-col w-full overflow-y-scroll">
              <ListToDoCard taskById={taskById} />
            </div>
            <div className="divider ml-0 divider-horizontal mr-0"></div>
            <div className="lg:w-[30rem]">
              <MonthlyStatisticsComponent taskById={taskById} />
            </div>
          </>
        )}
      </div>
      <div className="self-end">
        <AddNewTaskComponent workSpace={workSpace} id={id} />
      </div>
    </div>
    </>
   
  );
}

export default WorkSpaceId;
