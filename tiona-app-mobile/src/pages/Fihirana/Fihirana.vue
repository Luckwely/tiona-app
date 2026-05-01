<script setup>
import { ref, onMounted } from 'vue';
import { fetchFihirana } from '../../services/fihiranaData';
import Search from '../../components/search.vue';

const fihirana = ref([]);

onMounted(() => {
    fihirana.value = fetchFihirana();
});
</script>

<template>
    <div class="min-h-screen bg-slate-950/5 py-6">

        <div class="rounded-[28px] bg-white/10 border border-white/10 shadow-inner backdrop-blur-xl mt-10 mx-2">
            <Search />
        </div>

        <div class="mx-2 mt-5 grid gap-1 md:grid-cols-2 xl:grid-cols-3">
            <div v-for="song in fihirana" :key="song.id" class="group">
                <RouterLink :to="`/fihirana/show/${song.id}`" class="block overflow-hidden rounded-[28px] border border-slate-200/10 bg-white/90 py-1 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:bg-white">
                    <div class="flex items-center justify-between gap-3">
                        <div>
                            <p class="text-[15px] tracking-widest px-4 font-semibold text-slate-950">{{ song.title }}</p>
                        </div>
                        <div class="flex h-10 w-10 items-center justify-center rounded-3xl bg-cyan-700 text-white text-lg font-bold shadow-md">
                            {{ song.id }}
                        </div>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>