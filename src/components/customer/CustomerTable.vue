<script setup lang="ts" generic="T extends ICustomer">
import { ICustomer } from '@/types/customer';
import { Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell } from 'flowbite-vue'

defineProps<{
  customers: T[]
}>()

// const phoneComputed = computed((phone) => {
//   if(!phone) return
//   return phone.replace(/[^0-9]/g, '')
//               .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
// })

</script>

<template>
  <Table hoverable class="w-full border border-gray-300 rounded-md overflow-x-auto">
    <table-head class="bg-gray-800 text-slate-300">
      <table-head-cell class="border text-sm p-2 ">Customer name</table-head-cell>
      <table-head-cell class="border text-sm p-2 ">Phone</table-head-cell>
      <table-head-cell class="border text-sm p-2 ">e-mail</table-head-cell>
      <table-head-cell class="border text-sm p-2 ">Products</table-head-cell>
      <table-head-cell class="border text-sm p-2 ">Active</table-head-cell>
      <table-head-cell class="border text-sm p-2 "><span class="">Actions</span></table-head-cell>
    </table-head>
    <table-body>
      <table-row
        class="text-blue-300 text-center py-1"
        v-for="(customer, index) in customers"
        :key="index"
      >
        <table-cell class="border p-2">{{ customer.name }}</table-cell>
        <table-cell class="border p-2">{{ customer.phone }}</table-cell>
        <table-cell class="border p-2">{{ customer.email || "" }}</table-cell>
        <table-cell class="border p-2">product 1, product 2...</table-cell>
        <table-cell class="border p-2">{{ customer.active ? "Yes" : "No" }}</table-cell>
        <table-cell class="border p-2">
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </table-cell>
      </table-row>
    </table-body>
  </Table>
</template>

<style scoped>
</style>