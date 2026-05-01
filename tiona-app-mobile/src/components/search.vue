<script setup>
import { ref } from 'vue';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';

const text1 = ref('');
</script>
<template>
    <div>
        <InputGroup class="border-1 rounded-xl">
            <InputGroupAddon class="my-2 bg-transparent">
                <i class="pi pi-search"></i>
            </InputGroupAddon>
            <InputText v-model="text1" placeholder="Search here..." class="py-2 px-1 border-none outline-none" />
        </InputGroup>
    </div>
</template>