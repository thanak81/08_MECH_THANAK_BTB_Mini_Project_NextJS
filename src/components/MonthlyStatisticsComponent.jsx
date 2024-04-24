import React from "react";

export default function MonthlyStatisticsComponent({ taskById }) {
  let status;
  taskById.map((task) => {
    if (task.status === 1) {
      status = "Todo";
    } else if (task.status === 2) {
       status = "Working on";
    } else if (task.status === 3) {
      status = "Checking";
    } else if (task.status === 4) {
      status = "Complete";
    }
  });
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return (
    <>
      {taskById.map((task) => {
        return (
          <div key={task.taskId}>
            <h1 className="text-xl font-bold mb-5 mt-4 text-center">
              Statistics on {months[new Date(task.startDate).getMonth()]}
            </h1>
            <div className="flex gap-3 items-center">
              <div className="bg-completed h-5 rounded-lg w-1"></div>
              <p>
                {status}: <span>10</span> tasks
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
