<script setup lang="ts">
import { useCustomerStore } from '@/stores/customer';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import CustomerTable from '@/components/customer/CustomerTable.vue';
import Modal from '@/components/layout/Modal.vue';
import CustomerForm from '@/components/customer/CustomerForm.vue';

const { getCustomers } = useCustomerStore()
const customerStore = useCustomerStore()
const { customers } = storeToRefs(customerStore)

onMounted( async () => {
  await getCustomers()
})
</script>
<template>
  <div class="my-[30px] w-full flex">
    <CustomerTable :customers="customers" />
    <Modal>
      <CustomerForm />
    </Modal>
  </div>
</template>