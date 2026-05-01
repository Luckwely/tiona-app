<script setup >
import { ref } from 'vue';
import Fihirana from './Fihirana.vue';
import { fetchFihiranaById } from '../../services/fihiranaData';
import { useRoute } from 'vue-router';
import ReturnBtn from '../../components/returnBtn.vue';

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
  <div class="pt-20 w-[90%] m-auto bg-white min-h-screen font-mono text-gray-900">
    <!-- Header info-->
    <div class="text-center mb-4 w-[90%] m-auto">
      <h2 class="text-xl font-medium uppercase tracking-widest">{{ fihirana.title }}</h2>
      <div class="flex justify-between my-2">
        <p class="text-[13px]">Do dia Do</p>
        <p class="text-[13px]">Liva R</p>
      </div>
    </div>

    <!-- note and lyric -->
    <div class="flex flex-wrap w-[90%] m-auto">
      <div v-for="(measure, index) in fihirana.measures" :key="index">

        <div class="text-[10px] text-end px-2 whitespace-pre">
          {{ measure.indication }}
        </div>

        <div 
          class="border-l border-black w-fit px-1 text-[11px] leading-tight"
          :class="{
            'border-r-4 border-double border-black': index === fihirana.measures.length - 1,
            'border-r border-black': index !== fihirana.measures.length - 1
          }"
        >
          <p class="whitespace-pre">{{ measure.S }}</p>
          <p class="whitespace-pre">{{ measure.A }}</p>
          <p class="whitespace-pre">{{ measure.T }}</p>
          <p class="whitespace-pre">{{ measure.B }}</p>
        </div>
      
        <div class="text-[11px] text-center mt-1 px-1 min-h-[1.5rem]">
          {{ measure.lyrics }}
        </div>
      </div>
    </div>

    <!-- Full lyrics -->
    <div class="mt-3 columns- sm:columns-2 gap-8">
       <div v-for="(verse, i) in fihirana.content" :key="i" class="flex gap-1 mb-6 break-inside-avoid items-baseline">
         <span class="font-bold text-[11px]">{{ i + 1 }}.</span>
         <p class="text-[13px] whitespace-pre-line leading-relaxed tracking-widest">{{ verse }}</p>
       </div>
    </div>
  </div>

  <div class="fixed bottom-5 right-10 bg-amber-700 text-white rounded-full w-10 h-10 flex items-center justify-center">
    <ReturnBtn />
  </div>
</template>