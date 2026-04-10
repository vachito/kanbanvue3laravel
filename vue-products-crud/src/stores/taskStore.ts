import { defineStore } from "pinia";
import type { Task } from "../types/productTypes";
import { TaskService } from "../services/TaskService";

export const useTaskStore = defineStore('task',{
    state:() => ({
        tasks:[] as Task[],
        taskmsg:''
    }),
    actions:{
        async getAllTasks(){
            this.tasks = await TaskService.getAllTask()
        },
        async completeTask(id:number, is_complete:boolean){
            this.taskmsg = await TaskService.setStatus(id,is_complete);
        }
    }
})