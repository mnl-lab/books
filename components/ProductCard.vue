<template>
    <div class="container">
        <div class="card">
            <img :src="product.image" alt="Product Image" />
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <p>Price: {{ product.price }}</p>
            <button class="btn">Add to Cart</button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>