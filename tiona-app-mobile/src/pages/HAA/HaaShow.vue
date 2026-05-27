<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getSongsByCategory } from '../../services/songService';
import * as pdfjsLib from 'pdfjs-dist';

// Use Vite's native worker loader to cleanly pull the worker file locally
import PDFWorker from 'pdfjs-dist/build/pdf.worker.mjs?worker';
pdfjsLib.GlobalWorkerOptions.workerPort = new PDFWorker();

const route = useRoute();
const router = useRouter();
const song = ref(null);
const isLoading = ref(true);
const pagesContainerRef = ref(null);

onMounted(async () => {
  const songId = parseInt(route.params.id);
  const haaSongs = await getSongsByCategory('haa');
  song.value = haaSongs.find(s => s.id === songId) || null;
  if (!song.value) isLoading.value = false;
});

watch(() => song.value?.pdfPath, async (newPath) => {
  if (!newPath) return;
  isLoading.value = true;
  try {
    await renderPdfPages(newPath);
  } catch (error) {
    console.error("Error rendering partition:", error);
  } finally {
    isLoading.value = false;
  }
});

async function renderPdfPages(url) {
  const loadingTask = pdfjsLib.getDocument(url);
  const pdf = await loadingTask.promise;
  
  if (pagesContainerRef.value) {
    pagesContainerRef.value.innerHTML = '';
  }

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    
    // Scale 2.5 ensures text/musical notation remains crystal clear on high-DPI viewports
    const viewport = page.getViewport({ scale: 2.5 });
    
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    
    // block layout eliminates microscopic base spacing rendering gaps
    canvas.className = "w-full h-auto block m-0 p-0 bg-white";

    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    
    await page.render(renderContext).promise;
    pagesContainerRef.value?.appendChild(canvas);
  }
}

const downloadPdf = () => {
  if (!song.value?.pdfPath) return;
  const link = document.createElement('a');
  link.href = song.value.pdfPath;
  link.download = song.value.title ? `${song.value.title}.pdf` : 'partition.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<template>
  <div class="relative w-full h-screen bg-white select-none m-0 p-0 overflow-hidden">
    
    <div class="absolute top-4 left-4 z-50">
      <button 
        @click="router.back()" 
        class="flex items-center justify-center w-12 h-12 bg-gray-900/80 hover:bg-gray-800 text-white rounded-full shadow-lg backdrop-blur-sm transition-colors"
        aria-label="Retour"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </button>
    </div>

    <div class="absolute top-4 right-4 z-50">
      <button 
        v-if="song"
        @click="downloadPdf" 
        class="flex items-center justify-center w-12 h-12 bg-blue-600/90 hover:bg-blue-500 text-white rounded-full shadow-lg backdrop-blur-sm transition-colors"
        aria-label="Télécharger"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
      </button>
    </div>

    <div class="w-full h-full p-0 m-0 overflow-y-auto overflow-x-hidden bg-white sheet-viewport">
      
      <div ref="pagesContainerRef" class="w-full h-auto block m-0 p-0 bg-white"></div>
      
      <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center text-gray-500 bg-white font-medium z-10">
        Chargement de la partition...
      </div>
    </div>

  </div>
</template>

<style scoped>
/* Hides any native scrollbars from view */
.sheet-viewport::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
.sheet-viewport {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>