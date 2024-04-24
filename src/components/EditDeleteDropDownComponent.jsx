"use client"
import { deleteWorkSpace } from "@/app/services/workspace";
import Image from "next/image";
import React from "react";

export default function EditDeleteDropDownComponent({id,absolute}) {
  return (
    <details className="">
      <summary className=" btn bg-white shadow-none border-0 p-0 h-0 min-h-0">
        <Image
          src={"/assets/icons/tabler_dots.svg"}
          width={20}
          height={20}
          alt={"edit delete card"}
        />
      </summary>
      <ul className={`p-2 border border-black/25 text-white  ${absolute} shadow menu dropdown-content z-[1] bg-base-100 rounded-md`}>
        <li>
          <a>Edit</a>
        </li>
        <li>
          <button onClick={()=>deleteWorkSpace(id)}>Delete</button>
        </li>
      </ul>
    </details>
  );
}
