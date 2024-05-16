<template>
  <div class="todo-item">
    <q-checkbox @click="emit('toggle', todo.id)" v-model="completed"/>
    <span class="label">{{ todo.content }}</span>
    <button @click="emit('delete', todo.id)" class="delete-btn">x</button>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { Todo } from './models';

const props = defineProps<{todo: Todo}>();

const completed = ref<boolean>(props.todo.completed);

const emit = defineEmits(['delete', 'toggle']);

</script>

<style>
  .todo-item {
    align-items: center;
    display: flex;
    width: 100%;
    gap: 8px;

    .label {
      flex: 1;
    }

    .delete-btn {
      border: 1px solid black;
      width: 25px;
      background-color: #ffffff;
      color: black;
      border-radius: 10px;
    }
  }

</style>