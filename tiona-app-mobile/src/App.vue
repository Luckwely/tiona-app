<script setup>
import { RouterView } from 'vue-router';
import Nav from './components/nav.vue';
// ❌ Remove ALL database imports and onMounted DB logic here
</script>

<template>
  <Nav />
  <main>
    <RouterView />
  </main>
</template>