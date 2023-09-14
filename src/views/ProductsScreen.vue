<script setup lang="ts">
import ProductsTable from '@/components/products/ProductsTable.vue';
import { useProductsStore } from '@/stores/products'
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import Modal from '@/components/layout/Modal.vue';
import ProductsForm from '@/components/products/ProductsForm.vue';

const productsStore = useProductsStore()
const { getProducts } = productsStore
const { products } = storeToRefs(productsStore)

onMounted( async () => {
  await getProducts()
})

</script>
<template>
  <div class="my-[30px] w-full flex">
    <ProductsTable :products="products" />
    <Modal>
      <ProductsForm />
    </Modal>
  </div>
</template>