import { getAllTaskById } from "@/app/services/task";
import React from "react";

async function ListToDoCard({ bg_color, color,taskById}) {

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


  return (
    <>
  
      {taskById.map((task) => {
        const convertdate = task.startDate;
        const date = new Date(convertdate).getDate();
        const dateNum = new Date(convertdate).getDay().toString();
        const ngai = daysOfWeek[dateNum];
        return (
          <div
            key={task.taskId}
            className={`${bg_color ? bg_color : "bg-blue-500"} ${
              color ? color : "text-white"
            } flex w-full p-4 rounded-2xl gap-5 fl lg:gap-0 items-center justify-between lg:flex-row flex-col`}
          >
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="bg-white p-4 px-8 rounded-xl flex flex-col items-center">
                <div className="text-red-500 font-bold">{ngai}</div>
                <div className="text-black text-4xl">{date}</div>
              </div>
              <div className="flex flex-col justify-center gap-2">
                <div className="font-bold">{task.taskTitle}</div>
                <div className="text-sm">{task.description}</div>
              </div>
            </div>
            <div className="lg:self-end">
              <div className="px-10 rounded-lg py-2 border border-white bg-white font-bold text-black capitalize">{task.tag}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ListToDoCard;
