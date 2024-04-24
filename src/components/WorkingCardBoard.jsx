import React, { Fragment } from "react";
import TodoCardComponent from "./TodoCardComponent";

function WorkingCardBoard({ taskById }) {
  const toDoTask = taskById.filter((task) => task.status === 2);
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div>WORKING ON</div>
        <div className="divider divider-info mt-1 mb-0"></div>
        {toDoTask?.map((task) => {
          return (
            <Fragment key={task.taskId}>
              <div className="divider divider-warning mt-1 mb-0"></div>
              <div className="lg:pb-5 lg:h-full  ">
                <TodoCardComponent task={task} />
              </div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}

export default WorkingCardBoard;
