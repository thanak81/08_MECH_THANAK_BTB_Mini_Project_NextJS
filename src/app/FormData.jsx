export const getFormData = async ()=>{
    "use server"
    const workSpaceName = await FormData.get("work")
}