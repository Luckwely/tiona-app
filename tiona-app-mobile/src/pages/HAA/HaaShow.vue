<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getSongsByCategory } from '../../services/songService';
import * as pdfjsLib from 'pdfjs-dist';
import PDFWorker from 'pdfjs-dist/build/pdf.worker.mjs?worker';
pdfjsLib.GlobalWorkerOptions.workerPort = new PDFWorker();

const route = useRoute();
const router = useRouter();
const song = ref(null);
const isLoading = ref(true);
const pagesContainerRef = ref(null);

// Track orientation to re-render on change
const isLandscape = ref(window.innerWidth > window.innerHeight);

onMounted(async () => {
  const songId = parseInt(route.params.id);
  const haaSongs = await getSongsByCategory('haa');
  song.value = haaSongs.find(s => s.id === songId) || null;
  if (!song.value) isLoading.value = false;

  // Re-render PDF when orientation changes
  window.addEventListener('resize', handleOrientationChange);
});

function handleOrientationChange() {
  const landscape = window.innerWidth > window.innerHeight;
  if (landscape !== isLandscape.value) {
    isLandscape.value = landscape;
    if (song.value?.pdfPath) {
      renderPdfPages(song.value.pdfPath);
    }
  }
}

watch(() => song.value?.pdfPath, async (newPath) => {
  if (!newPath) return;
  try {
    await renderPdfPages(newPath);
  } catch (error) {
    console.error("Error rendering partition:", error);
  } finally {
    isLoading.value = false;
  }
});

const TOPBAR_HEIGHT = 56; // px — matches py-2 + icon height

async function renderPdfPages(url) {
  const loadingTask = pdfjsLib.getDocument(url);
  const pdf = await loadingTask.promise;

  // Compute scale based on available width (viewport minus any scrollbar)
  const availableWidth = window.innerWidth;

  // Build all pages off-screen first, then swap in one shot
  const fragment = document.createDocumentFragment();

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);

    // Use available width to compute a responsive scale
    const baseViewport = page.getViewport({ scale: 1 });
    const scale = availableWidth / baseViewport.width;
    const viewport = page.getViewport({ scale });

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    canvas.className = "w-full h-auto block m-0 p-0 bg-white";

    await page.render({ canvasContext: context, viewport }).promise;
    fragment.appendChild(canvas);
  }

  // Single DOM write — no flicker
  if (pagesContainerRef.value) {
    pagesContainerRef.value.innerHTML = '';
    pagesContainerRef.value.appendChild(fragment);
  }
}
</script>

<template>
  <div class="w-full h-screen bg-white select-none m-0 p-0 overflow-hidden">

    <!-- Top bar -->
    <div class="flex items-center gap-3 bg-gradient-to-r from-slate-900 via-indigo-950 to-cyan-800 text-white px-4 py-2 fixed w-full top-0 shadow-2xl z-20">
      <button
        @click="router.back()"
        class="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-colors shrink-0"
        aria-label="Retour"
      >
        <i class="pi pi-arrow-left text-sm"></i>
      </button>

      <div class="flex flex-col leading-tight min-w-0">
        <span class="text-[10px] font-medium tracking-[0.25em] text-cyan-300 uppercase">Partition</span>
        <span class="text-sm font-bold tracking-widest text-white truncate">
          {{ song?.title || 'SOLFA NOTATION' }}
        </span>
      </div>
    </div>

    <!-- PDF viewport — top padding matches fixed topbar height (56px) -->
    <div
      class="w-full h-full pt-14 overflow-y-auto overflow-x-hidden bg-white sheet-viewport"
    >
      <!-- Pages render here; hidden until load completes -->
      <div
        ref="pagesContainerRef"
        :class="['w-full h-auto block m-0 p-0 bg-white transition-opacity duration-300', isLoading ? 'opacity-0' : 'opacity-100']"
      ></div>
    </div>

    <!-- Loading overlay — only shown while rendering -->
    <Transition name="fade">
      <div
        v-if="isLoading"
        class="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white z-10"
      >
        <div class="w-8 h-8 rounded-full border-2 border-indigo-300 border-t-indigo-700 animate-spin"></div>
        <span class="text-sm text-gray-400 tracking-widest uppercase font-medium">Chargement…</span>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
.sheet-viewport::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
.sheet-viewport {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>