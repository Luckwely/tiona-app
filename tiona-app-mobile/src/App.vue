<script setup>
import { RouterView } from 'vue-router';
import Nav from './components/nav.vue';

</script>

<template> 
  <Nav />
  <main>
    <RouterView />
  </main>
</template>
