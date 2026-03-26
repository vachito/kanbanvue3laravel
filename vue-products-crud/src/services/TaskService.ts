import api from "../api/axios";
import type { Task } from "../types/productTypes";

export const TaskService = {
    async getAllTask():Promise<Task[]>{
        const {data} = await api.get('/tasks')

        return data.data
    }
}