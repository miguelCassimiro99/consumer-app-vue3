<script setup lang="ts">
import { useModalStore } from '@/stores/modal'

const { toggleModal } = useModalStore()

const startCreateCustomer = () => {
  toggleModal()
}


</script>
<template>
  <div class="bg-gray-300 rounded-lg shadow-xl flex flex-col md:flex-row justify-between items-center gap-1 p-2">
    
    <h1 class="text-lg font-bold uppercase text-slate-700 font-sans">Customer App</h1>

    <div class="flex gap-2">
      <RouterLink to="/customers" class="px-3">
        <span>Customers</span>
      </RouterLink>

      <RouterLink to="/products" class="px-3">
        <span>Products</span>
      </RouterLink>
    </div>
  </div>
</template>
<style scoped>
.router-link-active {
  background: rgb(51 65 85 / 1);
  color: rgb(209 213 219 / 1);
  border-radius: 5px;
}
</style>