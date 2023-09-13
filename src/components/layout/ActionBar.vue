<script setup lang="ts">
import { useModalStore } from '@/stores/modal'

const { toggleModal } = useModalStore()

const startCreateCustomer = () => {
  toggleModal()
}


</script>
<template>
  <div class="bg-gray-300 rounded-lg shadow-xl flex flex-col md:flex-row justify-between items-center gap-1 p-2">
    
    <h1 class="text-lg font-bold uppercase text-slate-700 font-sans">Consumer App</h1>

    <div class="flex gap-2">
      <button @click="startCreateCustomer()" class="bg-green-800 rounded-md cursor-pointer shadow-sm px-2 text-gray-200 font-semibold hover:bg-green-700 hover:text-gray-100 py-1">Add Customer</button>
      <button @click="toggleModal()" class="bg-blue-800 rounded-md cursor-pointer shadow-sm px-2 text-gray-200 font-semibold hover:bg-blue-600 hover:text-gray-100 py-1">Add Product</button>
    </div>
  </div>
</template>
<style scoped>
</style>