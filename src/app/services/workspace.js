"use server"
import { revalidatePath, revalidateTag } from "next/cache";

export const addWorkSpace = async (workspaceName) => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/v1/workspaces`, {
    method: "POST",
    body: JSON.stringify({
      workspaceName: workspaceName,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  const data = await response.json();

  revalidateTag("workspace");
  return data;
};

export const getWorkSpaceById = async (id)=> {
    const response = await fetch(
        `${process.env.NEXTAUTH_URL}/v1/workspace/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.TOKEN}`,
          },
        }
      );

      const data = await response.json()
      return data.data;

}

export const getWorkSpace = async () => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/v1/workspaces`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  const data = await response.json();
  return data;
};

export const deleteWorkSpace = async (id) => {
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/v1/workspaces/${id}`,
    {
        method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    }
  );

  revalidateTag("workspace")
  revalidatePath("todo-list")

};
