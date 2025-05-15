<template>
    <div>
        <div class="products">
            <div v-for="product in products" :key="product.id">
                <ProductCard :product="product" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getProducts } from "@/composables/getProducts.js";
const products = ref([]);

onMounted(async () => {
    try {
        products.value = await getProducts();
    } catch (error) {
        console.log(error);
    }
})


</script>