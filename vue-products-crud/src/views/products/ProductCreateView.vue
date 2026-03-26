<script setup lang="ts">
import { ref } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'

interface Person {
  id: number
  name: string
}

const list = ref<Person[]>([
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' }
])

const todoList = ref([
  { id: 1, text: 'Learn Vue 3' },
  { id: 2, text: 'Build awesome apps' }
])

const doneList = ref([
  { id: 3, text: 'Read documentation' }
])
</script>

<template>
  <div class="drag-container">
    <VueDraggableNext v-model="list" item-key="id" tag="div">
      <div v-for="item in list" :key="item.id" class="drag-item">
        {{ item.name }}
      </div>
    </VueDraggableNext>
  </div>

  <div class="lists-container">
    <div class="list-column">
      <h3>To Do</h3>
      <VueDraggableNext v-model="todoList" group="tasks" class="drag-container" :animation="150">
        <div v-for="item in todoList" :key="item.id" class="drag-item">
          {{ item.text }}
        </div>
      </VueDraggableNext>
    </div>

    <div class="list-column">
      <h3>Done</h3>
      <VueDraggableNext v-model="doneList" group="tasks" class="drag-container" :animation="150">
        <div v-for="item in doneList" :key="item.id" class="drag-item">
          {{ item.text }}
        </div>
      </VueDraggableNext>
    </div>
  </div>
</template>

<style scoped>
.drag-container {
  min-height: 200px;
  padding: 20px;
}

.drag-item {
  padding: 10px;
  margin: 5px 0;
  background: #f0f0f0;
  border-radius: 4px;
  cursor: move;
  transition: background 0.2s;
}

.drag-item:hover {
  background: #c3c3c3;
}

.lists-container{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;
}

.list-column{
  border: 1px solid #f0f0f0;
  padding: 10px;
  border-radius: 20px;
}

.list-column h3{
  text-align: center;
}

.lists-container{
  width: 90%;
  margin: 0 auto;
}
</style>