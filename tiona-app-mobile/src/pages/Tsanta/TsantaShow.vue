<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getSongById } from '../../services/songService';

const route = useRoute();
const router = useRouter();
const song = ref(null);

onMounted(async () => {
  const songId = route.params.id;
  song.value = await getSongById(songId);
});
</script>

<template>
  <div class="flex flex-col h-screen bg-gray-900 text-white">
    <div class="p-4 bg-gray-800 flex items-center justify-between shadow-md">
      <button @click="router.back()" class="text-white flex items-center gap-2 font-medium">
        ← Retour
      </button>
      <h1 class="text-lg font-bold line-clamp-1 text-center flex-1 mx-4">
        {{ song?.title || 'Chargement...' }}
      </h1>
      <span v-if="song" class="bg-blue-600 px-3 py-1 rounded-full text-xs font-bold">
        N° {{ song.number }}
      </span>
    </div>

    <div class="flex-1 bg-gray-700 relative">
      <iframe
        v-if="song?.pdfPath"
        :src="song.pdfPath"
        class="w-full h-full border-none"
      ></iframe>
      <div v-else class="flex items-center justify-center h-full text-gray-400">
        Chargement de la partition...
      </div>
    </div>
  </div>
</template>

