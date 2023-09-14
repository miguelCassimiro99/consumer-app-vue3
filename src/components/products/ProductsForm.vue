<script setup lang="ts">
import { useModalStore } from '@/stores/modal';
import { useProductsStore } from '@/stores/products';
import { IProduct } from '@/types/products';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { fromZodError } from 'zod-validation-error';

const { createProduct, updateProduct, getProducts } = useProductsStore()
const productStore = useProductsStore()
const { onWorkingProduct } = storeToRefs(productStore)
const { toggleModal } = useModalStore()

async function cancelSubmit() {
  toggleModal()
  await getProducts()
}

const validationError = ref<any>(null)

const startEditProduct = async (product: IProduct) => {
  const response = await updateProduct(product);
  if(response?.id) toggleModal()
}

const submitForm = async () => {
  try {
    if(onWorkingProduct.value.id && onWorkingProduct.value.name) return startEditProduct(onWorkingProduct.value)

    const response = await createProduct(onWorkingProduct.value)
    if(response?.id) toggleModal()

  } catch (error: any) {
    const newError = fromZodError(error);
    validationError.value = newError.message.replace("Validation error: ", "");
    console.log("Error: ", error)
  }
}

</script>
<template>
  <div class="max-w-md mx-auto">
    <h1 class="text-2xl font-semibold mb-4">{{ onWorkingProduct.id ? "Update Product" : "New Product" }}</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
        <input v-model="onWorkingProduct.name" type="text" id="name" name="name" class="w-full mt-1 px-4 py-2 border rounded-md">
      </div>
      <div class="mb-4">
        <label for="active" class="block text-sm font-medium text-gray-700">Active:</label>
        <input type="checkbox" class="form-checkbox h-6 w-6 text-blue-600 rounded-md" v-model="onWorkingProduct.active"  id="active" name="active" />
      </div>

      <div class="h-5 my-5">
        <div v-if="validationError">
          <p class="text-red-500 font-semibold">{{ validationError }}</p>
        </div>
      </div>
      <div class="flex justify-start items-start gap-2">
        <div class="">
          <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md">{{ onWorkingProduct.id ? "Update " : "Create" }}</button>
        </div>
  
        <div class="">
          <button @click="cancelSubmit()" class="px-4 py-2 bg-red-500 text-white rounded-md">Cancel</button>
        </div>
      </div>
    </form>
  </div>  

</template>
<style scoped>
</style>