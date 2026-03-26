<script setup lang="ts">
    import { onMounted } from 'vue';
    import { useTaskStore } from '../../stores/taskStore';

    const store = useTaskStore()

    onMounted(async()=>{
        await store.getAllTasks()
        console.log(store.tasks)
    })
</script>

<template>
    <h1>Lista de tareas</h1>
</template>


