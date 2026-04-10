import api from "../api/axios";
import type { Task } from "../types/productTypes";

export const TaskService = {
    async getAllTask():Promise<Task[]>{
        const {data} = await api.get('/tasks')
        return data.data
    },

    async setStatus(id:number,is_complete:boolean):Promise<string>{
        const {data} = await api.patch(`/tasks/${id}`,{is_complete})
        return data.msg
    }
}