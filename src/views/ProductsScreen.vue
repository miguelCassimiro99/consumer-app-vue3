<script setup lang="ts">
import ProductsTable from '@/components/products/ProductsTable.vue';
import { useProductsStore } from '@/stores/products'
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import Modal from '@/components/layout/Modal.vue';
import ProductsForm from '@/components/products/ProductsForm.vue';
import { useModalStore } from '@/stores/modal'

const { toggleModal } = useModalStore()

const productsStore = useProductsStore()
const { getProducts } = productsStore
const { products } = storeToRefs(productsStore)

onMounted( async () => {
  await getProducts()
})

</script>
<template>
  <div class="my-[30px] w-full flex flex-col items-start">
    <button
      @click="toggleModal()"
      class="bg-blue-800 rounded-md cursor-pointer shadow-sm px-2 text-gray-200 font-semibold hover:bg-blue-600 hover:text-gray-100 py-1 my-4"
    >
      Add Product
    </button>

    <ProductsTable :products="products" />
    <Modal>
      <ProductsForm />
    </Modal>
  </div>
</template>