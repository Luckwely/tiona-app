<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getSongsByCategory } from '../../services/songService';
import { searchSongs } from '../../composables/searchUtils';
import Nav from '../../components/nav.vue';
import SearchBar from '../../components/search.vue';

const router = useRouter();
const songs = ref([]);
const searchQuery = ref('');

onMounted(async () => {
  songs.value = await getSongsByCategory('tsanta');
});

const filteredSongs = computed(() => {
  return searchSongs(searchQuery.value, songs.value);
});

const goToSong = (id) => {
  router.push(`/tsanta/show/${id}`);
};
</script>

<template>
  <Nav />
  <div class="p-4 max-w-md mx-auto bg-gray-50 min-h-screen pb-20">

    <div class="fixed top-[56px] left-0 right-0 z-10 bg-gray-50 px-4 py-3 max-w-md mx-auto border-b border-gray-100">
      <SearchBar v-model:search="searchQuery" />
    </div>

    <div v-if="filteredSongs.length > 0" class="flex flex-col gap-1 mt-27">
      <div 
        v-for="song in filteredSongs" 
        :key="song.id" 
        class="pl-4 pr-2 py-2 bg-white shadow-sm rounded-full border border-gray-100 cursor-pointer active:scale-98 transition-all hover:border-blue-200 flex items-center justify-between"
        @click="goToSong(song.id)"
      >
        <span class="font-medium text-gray-800 text-base line-clamp-1">{{ song.title }}</span>
        <span class="font-bold text-lg text-blue-100 bg-cyan-800 w-10 h-10 flex items-center justify-center rounded-full min-w-[45px] text-center rounded-full">
          {{ song.number }}
        </span>
      </div>
    </div>

    <div v-else-if="searchQuery" class="text-center py-12 text-gray-400">
      Aucun chant ne correspond à votre recherche
    </div>
    
    <div v-else class="text-center py-12 text-gray-400">
      Chargement du répertoire...
    </div>
    
  </div>
</template>
