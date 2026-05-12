<script setup>
import { ref, computed, onMounted } from 'vue';
import { fetchFihirana, searchFihirana } from '../../services/fihiranaData';
import Search from '../../components/search.vue';

const searchQuery = ref('');
const fihirana = ref([]);
const isLoading = ref(true);

onMounted(async () => {
    try {
        fihirana.value = await fetchFihirana();
    } catch (error) {
        console.error('Error loading FIHIRANA data:', error);
    } finally {
        isLoading.value = false;
    }
});

const filteredFihirana = computed(() => searchFihirana(searchQuery.value, fihirana.value));
</script>

<template>
    <div class="min-h-screen bg-slate-950/5 py-6">

        <div class="rounded-[28px] bg-white/10 border border-white/10 shadow-inner backdrop-blur-xl mt-10 mx-2">
            <Search v-model:search="searchQuery" />
        </div>

        <div class="mx-2 mt-5">
            <div v-if="filteredFihirana.length === 0" class="rounded-[28px] bg-white/90 border border-slate-200/20 p-8 text-center text-slate-600">
                No results found.
            </div>

            <div v-else class="grid gap-1 md:grid-cols-2 xl:grid-cols-3">
                <div v-for="song in filteredFihirana" :key="song.id" class="group">
                    <RouterLink :to="`/fihirana/show/${song.id}`" class="block overflow-hidden rounded-[28px] border border-slate-200/10 bg-white/90 py-1 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:bg-white">
                        <div class="flex items-center justify-between gap-3">
                            <div>
                                <p class="text-[15px] tracking-widest pl-4 font-semibold text-slate-950">{{ song.title }}</p>
                            </div>
                            <div class="flex h-10 w-10 items-center justify-center rounded-3xl bg-cyan-700 text-white text-lg font-bold shadow-md">
                                {{ song.id }}
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>