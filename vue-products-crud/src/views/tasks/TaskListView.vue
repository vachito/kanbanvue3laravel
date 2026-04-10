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
        splitTasks()
    })
    
    const splitTasks = () =>{
        todo.value = store.tasks.filter(t => !t.is_complete)
        done.value = store.tasks.filter(t => t.is_complete)
    }
    

    const onChange = async (evt:any, target:'todo'|'done') =>{
        if(evt.added){
            const task = evt.added.element
            const isComplete = target === 'done'
            task.is_complete = isComplete
            await store.completeTask(task.id,isComplete)
        }
    }
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="grid grid-cols-2 gap-6">

      <!-- TODO -->
      <div class="bg-white rounded-2xl shadow p-4">
        <h2 class="text-xl font-semibold mb-4 text-gray-700">
          📝 Por hacer
        </h2>

        <VueDraggableNext
          v-model="todo"
          group="tasks"
          item-key="Id"
          tag="div"
          :animation="200"
          @change="(e) => onChange(e, 'todo')"
          class="space-y-3 min-h-[200px]"
        >
          <div
            v-for="task in todo"
            :key="task.id"
            class="bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition cursor-grab"
          >
            <h3 class="font-bold text-gray-800">
              {{ task.id }}
            </h3>
            <p class="text-sm text-gray-500">
              {{ task.name }}
            </p>
            <p class="text-xs text-blue-500 mt-2">
              👤 {{ task.is_complete }}
            </p>
          </div>
        </VueDraggableNext>
      </div>

      <!-- DONE -->
      <div class="bg-white rounded-2xl shadow p-4">
        <h2 class="text-xl font-semibold mb-4 text-green-600">
          ✅ Completadas
        </h2>

        <VueDraggableNext
          v-model="done"
          group="tasks"
          item-key="Id"
          tag="div"
          :animation="200"
          @change="(e) => onChange(e, 'done')"
          class="space-y-3 min-h-[200px]"
        >
          <div
            v-for="task in done"
            :key="task.id"
            class="bg-green-50 border border-green-200 p-4 rounded-xl shadow-sm hover:shadow-md transition cursor-grab"
          >
            <h3 class="font-bold text-gray-800">
              {{ task.id }}
            </h3>
            <p class="text-sm text-gray-500">
              {{ task.name }}
            </p>
            <p class="text-xs text-green-600 mt-2">
              ✔ {{ task.is_complete }}
            </p>
          </div>
        </VueDraggableNext>
      </div>

    </div>
  </div>
</template>


