<template>
  <q-page class="row justify-center">
    <TodoList
      title="TODO list"
    ></TodoList>
  </q-page>
</template>

<script setup lang="ts">
import TodoList from 'components/TodoList.vue';

defineOptions({
  name: 'IndexPage'
});

</script>
