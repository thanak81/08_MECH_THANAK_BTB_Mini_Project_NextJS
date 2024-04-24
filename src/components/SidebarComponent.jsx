
import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import WorkspacePopupComponent from "./WorkspacePopupComponent";
import { getWorkSpace } from "@/app/services/workspace";
import Link from "next/link";

export default async function SidebarComponent() {
  const data = await getWorkSpace();
  // let currentWorkspaceLength = data.data.length;
  // if(data.data.length > currentWorkspaceLength){
  //   // toast({
  //   //   className: "bg-green-500 font-bold text-white text-2xl",
  //   //   description: "Login Success!",
  //   //   description: "Welcome to TO-DO Lists",
  //   // });
  //   currentWorkspaceLength = data.data.length;
  // }
  return (
    <div className="pl-3 lg:pl-10 mt-6 overflow-y-scroll h-screen pb-10 ">
      <div className="flex justify-between">
        <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
        <Image src={"/assets/icons/arrow.svg"} width={25} height={30} />
      </div>

      {/* workspace */}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">workspace</h1>
        <WorkspacePopupComponent />
      </div>

      {/* each workspace */}
      {data.data.map((dat) => {
        return (
          <div key={dat.workSpaceId} className="flex items-center mt-5 w-full">
            <div className="rounded-full w-4 h-4 bg-todo"></div>
            <div className="flex justify-between w-full pl-3">
              <Link href={`/todo-list/${dat.workSpaceId}`}>{dat.workspaceName}</Link>
              <EditDeleteDropDownComponent id={dat.workSpaceId} absolute={"absolute"} />
            </div>
          </div>
        );
      })}

      {/* favorite*/}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">favorite</h1>

        <Image src={"/assets/icons/favorite.svg"} width={22} height={22} />
      </div>

      {/* each favorite workspace */}
      <div className="flex items-center mt-5 w-full">
        <div className="rounded-full w-4 h-4 bg-workingOn"></div>
        <div className="flex justify-between w-full pl-3">
          <p>GKS Scholarship</p>
        </div>
      </div>
    </div>
  );
}
