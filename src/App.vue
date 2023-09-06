<script setup lang="ts">
//import { useCustomerStore } from '@/stores/customer'


</script>

<template>
  <div class="max-w-[100vw] w-full h-screen max-h-[100vh] bg-slate-700 overflow-hidden p-8">

    <div class="bg-gray-300 h-20 rounded-lg shadow-xl flex justify-end gap-3 p-2">
      <button class="bg-green-800 rounded-md shadow-sm px-2 text-gray-200 font-semibold hover:bg-green-700 hover:text-gray-100">Add Customer</button>
      <button class="bg-blue-800 rounded-md shadow-sm px-2 text-gray-200 font-semibold hover:bg-blue-600 hover:text-gray-100">Add Product</button>
    </div>

    <section class="my-[30px] w-full flex">
      <table class="table-auto">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </section>

  </div>
    

</template>

