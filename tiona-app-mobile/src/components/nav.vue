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
    <Transition name="slide">
        <div v-if="menuBar" class="pl-5 h-full w-[60%] py-5 z-30 fixed top-0 right-0 bg-white/80 backdrop-blur-md shadow-xl">
            <button @click="handClick" class="mb-6"><i class="pi pi-times"></i></button>
            <div class="flex flex-col gap-4">
                <RouterLink to="/" class="hover:text-blue-600 transition" @click="menuBar = false">FIHIRANA</RouterLink>
                <RouterLink to="/haa" class="hover:text-blue-600 transition" @click="menuBar = false">HAA</RouterLink>
                <RouterLink to="/tsanta" class="hover:text-blue-600 transition" @click="menuBar = false">TSANTA</RouterLink>
            </div>
        </div>
    </Transition>
</template>
<style scoped>

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%); 
  opacity: 0;
}
</style>