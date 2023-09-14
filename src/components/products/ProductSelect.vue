<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { IProduct } from '@/types/products';
import { onMounted, ref } from 'vue';

const { getActiveProducts, getProducts, products } = useProductsStore()
const selectedProducts = ref<IProduct[] | []>([])

onMounted( async () => {
  await getProducts()
})


</script>
<template>
  <div class="w-full">
    <label class="block text-gray-700 text-sm font-bold mb-2">Select product</label>
    <select
      v-model="selectedProducts.values"
      multiple
      class="form-multiselect block w-full px-4 py-2 pr-8 leading-tight bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    >
      <option
        v-for="product in getActiveProducts"
        :key="product.id"
        :value="product.id"
      >{{ product.name }}</option>
    </select>
  </div>
</template>