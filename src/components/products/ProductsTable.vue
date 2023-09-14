<script setup lang="ts" generic="T extends IProduct">
import { useModalStore } from '@/stores/modal';
import { useProductsStore } from '@/stores/products'
import { Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell } from 'flowbite-vue'
import { IProduct } from '@/types/products';

const { setonWorkingProduct } = useProductsStore()
const { toggleModal } = useModalStore()

defineProps<{
  products: T[]
}>()

const startEditProduct = (product:IProduct) => {
  setonWorkingProduct(product)
  toggleModal()
}

</script>
<template>
  <Table hoverable class="w-full border border-gray-300 rounded-md overflow-x-auto">
    <table-head class="bg-gray-800 text-slate-300">
      <table-head-cell class="border text-sm p-2 ">Product name</table-head-cell>
      <table-head-cell class="border text-sm p-2 ">Active</table-head-cell>
      <table-head-cell class="border text-sm p-2 "><span class="">Actions</span></table-head-cell>
    </table-head>
    <table-body>
      <table-row
        class="text-blue-300 text-center py-1"
        v-for="(product, index) in products"
        :key="index"
      >
        <table-cell class="border p-2">{{ product.name }}</table-cell>
        <table-cell class="border p-2">{{ product.active ? "Yes" : "No" }}</table-cell>
        <table-cell class="border p-2">
          <button @click="startEditProduct(product)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
        </table-cell>
      </table-row>
    </table-body>
  </Table>
</template>