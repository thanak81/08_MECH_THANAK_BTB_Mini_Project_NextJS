import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";

export default function TodoCardComponent({task}) {

  let bgColor;
    if (task.status === 1) {
      bgColor = "bg-yellow-500";
    } else if (task.status === 2) {
      bgColor = "bg-blue-500";
    } else if (task.status === 3) {
      bgColor = "bg-orange-500";
    } else if (task.status === 4) {
      bgColor = "bg-green-500";
    }
  return (
    <div className={`border border-gray rounded-lg  mt-4 relative ${bgColor}`}>
      <div className="p-5">
        <div className="flex justify-between">
          <p>{task?.taskTitle}</p>
          <div className="">
            {/* <Image
              src={"/assets/icons/tabler_dots.svg"}
              width={20}
              height={20}
              alt={"edit delete card"}
            /> */}
            <EditDeleteDropDownComponent task={task} absolute={"absolute right-5"}/>
          </div>
        </div>

        <p className="text-gray">{task?.description}</p>
        <div className="flex justify-between items-center mt-5">
          <div className="bg-bgTag text-colorTag py-1 px-5 rounded-lg font-bold">
            {task?.tag}
          </div>
          <div className="rounded-full w-5 h-5 bg-todo"></div>
        </div>
      </div>

      <hr className="text-gray" />
      <div className="flex gap-2 justify-end pr-3 py-2">
        <Image
          src={"/assets/icons/calendar.svg"}
          width={20}
          height={20}
          alt="calendar icon"
        />
        <p className="text-gray">{new Date(task.dueDate).toUTCString()}</p>
      </div>
    </div>
  );
}
