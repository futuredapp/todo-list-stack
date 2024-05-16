<template>
  <div>
    <p>{{ title }}</p>
    <div class="add-wrap">
      <q-input v-model="todoContent" placeholder="Do something..."/>
      <q-btn :disable="todoContent.length <= 0" no-caps @click="addTask">add</q-btn>
    </div>
    <q-scroll-area style="height: 85%; max-width: 300px;">
      <div v-for="task in tasks" :key="task.id">
        <TodoItem
            :todo="task"
            @delete="deleteTask"
            @toggle="toggleTask"
        ></TodoItem>
      </div>
    </q-scroll-area>
  </div>
</template>

<style>
.add-wrap {
  display: flex;
  align-items: center;
}
</style>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import TodoItem from './TodoItem.vue'
import { Todo } from 'components/models'
import { useTasksQuery } from 'src/graphql'

interface Props {
  title: string;
}

const props = defineProps<Props>()

const {
  loading: loadingTasks,
  result,
  refetch: refetchTasks,
  onResult: onTaskResult,
} = useTasksQuery()
const tasks = computed<Todo[]>(() => result.value?.tasks ?? [])

function toggleTask (id: string) {

}

function deleteTask (id: string) {

}

function addTask () {
  if (todoContent.value) {
  }
}

const todoContent = ref('')

</script>
