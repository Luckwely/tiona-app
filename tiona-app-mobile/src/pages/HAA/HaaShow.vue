<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getSongsByCategory } from '../../services/songService';

const route = useRoute();
const router = useRouter();
const song = ref(null);

// Clé magique pour forcer le rafraîchissement de l'iframe lors d'une rotation
const rotationKey = ref(0);

const handleResize = () => {
  // Incrémenter la clé force Vue à détruire et recréer l'iframe avec les bonnes dimensions
  rotationKey.value++;
};

onMounted(async () => {
  const songId = parseInt(route.params.id);
  const haaSongs = await getSongsByCategory('haa');
  song.value = haaSongs.find(s => s.id === songId) || null;

  // Écoute les changements de taille/rotation de l'écran
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  // Nettoie l'événement quand on quitte la page
  window.removeEventListener('resize', handleResize);
});

const cleanPdfPath = computed(() => {
  if (!song.value?.pdfPath) return '';
  return `${song.value.pdfPath}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`;
});
</script>

<template>
  <div class="flex flex-col h-screen bg-gray-900 text-white overflow-hidden w-full m-0 p-0 select-none">
    
    <div class="p-4 bg-gray-800 flex items-center justify-between shadow-md h-[56px] flex-shrink-0 z-10">
      <button @click="router.back()" class="text-white flex items-center gap-2 font-medium">
        ← Retour
      </button>
      <h1 class="text-lg font-bold line-clamp-1 text-center flex-1 mx-4">
        {{ song?.title || 'Chargement...' }}
      </h1>
      <span v-if="song" class="bg-blue-600 px-3 py-1 rounded-full text-xs font-bold">
        {{ song.number }}
      </span>
    </div>

    <div class="flex-1 bg-white w-full h-full p-0 m-0 overflow-hidden relative flex items-center justify-center">
      <iframe
        v-if="cleanPdfPath"
        :key="rotationKey"
        :src="cleanPdfPath"
        class="w-full h-full block border-none outline-none m-0 p-0"
        style="border: none; width: 100%; height: 100%; display: block;"
      ></iframe>
      <div v-else class="flex items-center justify-center h-full text-gray-400 bg-gray-700 w-full">
        Chargement de la partition...
      </div>
    </div>

  </div>
</template>

<style scoped>
iframe {
  width: 100% !important;
  height: 100% !important;
  border: 0 !important;
  outline: none !important;
}
</style>