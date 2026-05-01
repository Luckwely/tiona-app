<script setup>
import { ref } from "vue";

const menuBar = ref(false);

const handClick = () => {
    menuBar.value = !menuBar.value;
}

</script>

<template>
    <nav class="flex justify-between items-center bg-gradient-to-r from-slate-900 via-indigo-950 to-cyan-800 text-white px-4 py-2 fixed w-full top-0 shadow-2xl z-20 font-sans">
        <div class="flex items-center gap-3">
            <div class="text-3xl">𝄞</div>
            <div class="">
                <h2 class="text-lg font-semibold tracking-[0.3em]">TIONA</h2>
                <p class="text-xs uppercase tracking-[0.32em] text-cyan-200/80 -mt-1">E.E.M</p>
            </div>
        </div>
        <div>
            <button @click.prevent="handClick" class="text-xl rounded-full bg-white/10 w-10 h-10 flex items-center justify-center hover:bg-white/20 transition">
                <i class="pi pi-bars"></i>
            </button>
        </div>
    </nav>
    <Transition name="slide">
        <div v-if="menuBar" class="pl-6 h-full w-[65%] py-6 z-30 fixed top-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl">
            <button @click="handClick" class="mb-6 text-slate-900 hover:text-cyan-700">
                <i class="pi pi-times text-2xl"></i>
            </button>
            <div class="flex flex-col gap-5 text-slate-900 text-base font-medium">
                <RouterLink to="/" class="hover:text-cyan-700 transition" @click="menuBar = false">FIHIRANA</RouterLink>
                <RouterLink to="/haa" class="hover:text-cyan-700 transition" @click="menuBar = false">HAA</RouterLink>
                <RouterLink to="/tsanta" class="hover:text-cyan-700 transition" @click="menuBar = false">TSANTA</RouterLink>
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