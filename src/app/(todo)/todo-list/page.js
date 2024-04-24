import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getWorkSpace, getWorkSpaceById } from "@/app/services/workspace";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import ListToDoCard from "@/components/ListToDoCard";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import { getServerSession } from "next-auth";
import React from "react";

async function TodoList() {
  const session = await getServerSession(authOptions);
  return (
    <>
      {/* {!session ? (
        <div>Please log in first</div>
      ) : (
        <div className="h-full overflow-y-scroll lg:overflow-y-hidden  pb-10">
          <>
            <ListBoardComponentHeader type={"List"} />
            <div className="flex lg:h-[92%] gap-5 flex-col lg:flex-row overflow-y-scroll">
              <div className="mt-5 lg:h-[95%] flex gap-3 flex-col w-full overflow-y-scroll">
                <ListToDoCard />
              </div>
              <div className="lg:w-[30rem]">
                <MonthlyStatisticsComponent />
              </div>
            </div>
          </>
        </div>
      )} */}
    </>
  );
}

export default TodoList;
