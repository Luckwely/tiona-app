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
    <p>{{ fihirana.title }}</p>
    <p>{{ fihirana.soprano }}</p>
    <p>{{ fihirana.alto }}</p>
    <p>{{ fihirana.tenor }}</p>
</template>