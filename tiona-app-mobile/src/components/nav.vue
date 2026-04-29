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
    <div v-if="menuBar" class="p-4 rounded-3xl mt-1 z-10 fixed top-15 bg-black/20 backdrop-blur-sm w-full">
        <ul>
            <li class="mb-2 ">FIHIRANA</li>
            <li class="mb-2 ">HAA</li>
            <li class="mb-2 ">TSANTA</li>
        </ul>
    </div>
</template>
