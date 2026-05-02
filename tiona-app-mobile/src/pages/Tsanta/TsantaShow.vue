<script setup>
import { ref, computed } from 'vue';
import { fetchTsantaById } from '../../services/tsantaData';
import { useRoute } from 'vue-router';
import ReturnBtn from '../../components/returnBtn.vue';

const route = useRoute();
const id = route.params.id;
const tsanta = ref({});

function getSongDetails() {
    const data = fetchTsantaById(id);
    if (data) tsanta.value = data;
}

getSongDetails();

// Find the widest measure by character count across all voice parts
const measureWidth = computed(() => {
    if (!tsanta.value.measures) return 80;
    let maxLen = 0;
    for (const measure of tsanta.value.measures) {
        for (const voice of ['S', 'A', 'T', 'B']) {
            if (measure[voice]?.length > maxLen) maxLen = measure[voice].length;
        }
    }
    // 7px per character at 12px monospace font + 8px padding
    return Math.max(60, maxLen * 7 + 8);
});
</script>

<template>
  <div class="pt-20 w-[90%] m-auto bg-white min-h-screen font-mono text-gray-900">
    <!-- Header info-->
    <div class="text-center mb-1 w-[95%] m-auto">
      <h2 class="text-xl font-medium uppercase tracking-widest">{{ tsanta.title }}</h2>
      <div class="flex justify-between my-2">
        <p class="text-[13px]">Do dia Do</p>
        <p class="text-[13px]">Liva R</p>
      </div>
    </div>

    <!-- note and lyric -->
    <div class="flex flex-wrap w-[95%] m-auto">
      <div
        v-for="(measure, index) in tsanta.measures"
        :key="index"
        class="flex flex-col"
        :style="{ width: measureWidth + 'px' }"
      >
        <div class="text-[10px] text-end px-2 whitespace-pre h-4">
          {{ measure.indication }}
        </div>

        <div
          class="border-l border-black px-1 text-[12px] leading-tight w-full"
          :class="{
            'border-r-4 border-double border-black': index === tsanta.measures.length - 1,
            'border-r border-black': index !== tsanta.measures.length - 1
          }"
        >
          <p class="whitespace-pre text-center">{{ measure.S }}</p>
          <p class="whitespace-pre text-center">{{ measure.A }}</p>
          <p class="whitespace-pre text-center">{{ measure.T }}</p>
          <p class="whitespace-pre text-center">{{ measure.B }}</p>
        </div>
      </div>
    </div>

    <!-- Full lyrics -->
    <div class="mt-4 sm:columns-2 gap-8">
       <div v-for="(verse, i) in tsanta.content" :key="i" class="flex gap-1 mb-3 break-inside-avoid items-baseline">
         <span class="font-bold text-[11px]">{{ i + 1 }}.</span>
         <p class="text-[12px] whitespace-pre-line leading-relaxed tracking-widest">{{ verse }}</p>
       </div>
    </div>
  </div>

  <div class="fixed bottom-5 right-5 text-white rounded-full w-8 h-8 flex items-center justify-center">
    <ReturnBtn />
  </div>
</template>