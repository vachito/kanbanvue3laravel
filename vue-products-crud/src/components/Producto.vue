<script setup lang="ts">
    import type { PropType } from 'vue';
    import type { Product } from '../types/productTypes';

    defineProps({
        product: Object as PropType<Product>
    })
</script>
<template>
    <div class=" bg-gray-100 shadow rounded-lg p-2">
        <h1 class="text-xl font-bold">Nombre : <span class="font-semibold">{{ product?.name }}</span></h1>
        <p class="font-semibold text-blue-700">Precio : {{ product?.price }}</p>
        <p class="font-semibold text-green-700">Disponible : {{ product?.stock }}</p>
    </div>
</template>