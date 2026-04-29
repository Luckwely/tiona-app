<script setup>
import { ref } from 'vue';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';

const text1 = ref('');
</script>
<template>
    <div class="mx-4 my-2 pt-15">
        <InputGroup class="border rounded-xl">
            <InputGroupAddon class="my-2">
                <i class="pi pi-search"></i>
            </InputGroupAddon>
            <InputText v-model="text1" placeholder="Search here..." class="py-2 px-2 border-none outline-none" />
        </InputGroup>
    </div>
</template>