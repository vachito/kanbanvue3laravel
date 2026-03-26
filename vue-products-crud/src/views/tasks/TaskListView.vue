<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { useTaskStore } from '../../stores/taskStore';
    import { VueDraggableNext } from 'vue-draggable-next';
    import type { Task } from '../../types/productTypes';

    const store = useTaskStore()
    const todo = ref<Task[]>([])
    const done = ref<Task[]>([])

    onMounted(async()=>{
        await store.getAllTasks()
    })
    
    const splitTasks = () =>{
        todo.value = store.tasks.filter(t => !t.is_complete)
        done.value = store.tasks.filter(t => t.is_complete)
    }
    splitTasks()

    const updateTaskStatus = async (task:Task, status:boolean) =>{
        
    }
</script>

<template>
    <h1>Lista de tareas</h1>
</template>


