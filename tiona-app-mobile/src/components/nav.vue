<script setup>
import { ref } from "vue";

const menuBar = ref(false);

const handClick = () => {
    menuBar.value = !menuBar.value;
}

</script>

<template>
    <nav class="flex justify-between items-center bg-blue-200 px-4 py-4 fixed w-full top-0">
        <div class="flex gap-2 items-center">
            <div>
                <i class="pi pi-book"></i>
            </div>
            <h2>TIONA</h2>
        </div>
        <div>
            <div @click.prevent="handClick">
                <i class="pi pi-bars"></i>
            </div>
        </div>
    </nav>
    <div v-if="menuBar" class="px-10 py-5 mt-1 z-10 fixed top-14 bg-blue-400/30 backdrop-blur-2xl w-full">
        <div class="flex flex-col gap-3">
            <RouterLink to="/fihirana" class="mb-2 " @click="menuBar = false">FIHIRANA</RouterLink>
            <RouterLink to="/haa" class="mb-2 " @click="menuBar = false">HAA</RouterLink>
            <RouterLink to="/tsanta" class="mb-2 " @click="menuBar = false">TSANTA</RouterLink>
        </div>
    </div>
</template>
