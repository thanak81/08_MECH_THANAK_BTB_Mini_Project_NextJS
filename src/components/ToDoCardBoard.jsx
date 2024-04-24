import React, { Fragment, Suspense } from "react";
import TodoCardComponent from "./TodoCardComponent";

function ToDoCardBoard({ taskById }) {
  const toDoTask = taskById.filter((task) => task.status === 1);
  console.log("todotask", toDoTask);
  return (
    <>
      <div className="flex flex-col w-full h-full lg:overflow-y-scroll">
        <div>TODO</div>
        {/* <div>Status{task.status}</div> */}
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

export default ToDoCardBoard;
