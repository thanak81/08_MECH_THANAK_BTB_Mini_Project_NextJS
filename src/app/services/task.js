import { revalidatePath, revalidateTag } from "next/cache";
import WorkSpaceId from "../(todo)/todo-list/[id]/page"

export const addTask = async (task) => {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/v1/tasks`,{
        method: "POST",
        body: JSON.stringify({
            taskTitle : task.taskTitle,
            description : task.description,
            startDate : task.startDate,
            dueDate : task.endDate,
            tag : task.tag,
            status :2,
            workspaceId : task.workspaceId
        }),
        headers : {
            "Content-Type" : "application/json",
            Authorization : `Bearer ${process.env.TOKEN}`
        }
    })
    const data = await response.json();
    console.log(data)
    revalidateTag("task")
    return data;
}

export const getAllTaskById = async (id) =>{
    const response = await fetch(`${process.env.NEXTAUTH_URL}/v1/tasks?workspaceId=${id}`,{
        headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${process.env.TOKEN}`
        }
    })
    const data = await response.json()
    return data.data;
}