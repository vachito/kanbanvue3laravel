<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { useProductStore } from '../../stores/productStore';
    import Producto from '../../components/Producto.vue';

    const store = useProductStore()

    onMounted(async()=>{
        await store.getAllProducts()
    })
</script>

<template>
    <h1>Listado de productos</h1>
    <div class="w-10/12 mx-auto mt-5 grid grid-cols-4 gap-5">
        <Producto 
            v-for="product in store.products"
            :key="product.id"
            :product="product"
        />
    </div>
</template>