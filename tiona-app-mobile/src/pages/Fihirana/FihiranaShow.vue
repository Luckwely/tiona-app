<script setup >
import { ref } from 'vue';
import Fihirana from './Fihirana.vue';
import { fetchFihiranaById } from '../../services/fihiranaData';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;
const fihirana = ref({});

function getSongDetails() {
    const data = fetchFihiranaById(id);
    
    if (data) {
        fihirana.value = data;
    }
}

getSongDetails();

</script>
<template>
  <div class="p-6 bg-white min-h-screen font-mono text-gray-900">
    <!-- Header info like the reference image -->
    <div class="text-center mb-8">
      <h1 class="text-2xl font-bold uppercase">{{ fihirana.title }}</h1>
      <div class="flex justify-between text-xs mt-4 px-4 italic">
        <span>Do dia Eb (p=75)</span>
        <span>Liva RAKOTONDRATSIMBA</span>
      </div>
    </div>

    <!-- Music and Lyrics Grid -->
    <div class="flex flex-wrap px-2">
      <div 
        v-for="(measure, index) in fihirana.measures" 
        :key="index" 
        class="flex flex-col -ml-[1px] mb-8"
      >
        <!-- Musical Notes -->
        <div class="text-[13px] leading-tight tracking-tighter border-gray-400">
          <pre class="whitespace-pre bg-white">{{ measure.s }}</pre>
          <pre class="whitespace-pre bg-white">{{ measure.a }}</pre>
          <pre class="whitespace-pre bg-white">{{ measure.t }}</pre>
          <pre class="whitespace-pre bg-white">{{ measure.b }}</pre>
        </div>

        <!-- Lyrics for this specific measure -->
        <div class="text-[11px] text-center mt-1 px-1 min-h-[1.5rem]">
          {{ measure.lyrics }}
        </div>
      </div>
    </div>

    <!-- Traditional Lyrics (Full text below) -->
    <div class="mt-12 border-t pt-6 space-y-4">
       <div v-for="(verse, i) in fihirana.content" :key="i" class="flex gap-4">
         <span class="font-bold">{{ i + 1 }}.</span>
         <p class="italic">{{ verse }}</p>
       </div>
    </div>
  </div>
</template>