import { defineStore } from "pinia";
import type { Task } from "../types/productTypes";
import { TaskService } from "../services/TaskService";

export const useTaskStore = defineStore('task',{
    state:() => ({
        tasks:[] as Task[]
    }),
    actions:{
        async getAllTasks(){
            this.tasks = await TaskService.getAllTask()
        }
    }
})