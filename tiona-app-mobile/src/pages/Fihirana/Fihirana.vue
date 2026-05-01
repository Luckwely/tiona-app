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
        <div class="" v-for="song in fihirana">
            <RouterLink :to="`/fihirana/show/${song.id}`" class="flex gap-2 px-2 py-2 border-1 mb-1">
                <div>
                    <p>{{ song.id }} -</p>
                </div>
                <div class="">
                    <p>{{ song.title }}</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>