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
    <Search />
    <div class="mt-4 mx-4">
        <div class="flex gap-4 px-2 py-2 border-1 mb-1" v-for="song in fihirana">
            <div>
                <p>{{ song.id }}</p>
            </div>
            <div class="p-5">
                <RouterLink :to="`/fihirana/show/${song.id}`" class="text-lg font-bold text-gray-800 mb-2">{{ song.title }}</RouterLink>
            </div>
        </div>
    </div>
</template>