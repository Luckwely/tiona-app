<script setup>
import { RouterView } from 'vue-router';
import Nav from './components/nav.vue';
import Search from './components/search.vue';

</script>

<template> 
  <Nav />
  <Search />
  <main>
    <RouterView />
  </main>
</template>
