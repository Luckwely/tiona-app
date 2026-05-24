<script setup>
import { ref, watch } from 'vue';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';

const emit = defineEmits(['update:search']);
const text1 = ref('');

watch(text1, (value) => {
    emit('update:search', value);
});
</script>
<template>
    <div>
        <InputGroup class="border-1 rounded-full">
            <InputGroupAddon class="my-2 bg-transparent">
                <i class="pi pi-search"></i>
            </InputGroupAddon>
            <InputText v-model="text1" placeholder="Search here..." class="py-2 px-1 border-none outline-none" />
        </InputGroup>
    </div>
</template>