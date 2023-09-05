<script setup lang="ts">
import { useCustomerStore } from '@/stores/customer'

const customer = useCustomerStore()

</script>

<template>
  <div>
    <h1 class="text-2xl border">Hello World</h1>
    <span>current customer: </span>
    <pre>{{ customer.name }}</pre>

  </div>
    

</template>

