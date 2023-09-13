<script setup lang="ts">
import CustomerTable from "@/components/customer/CustomerTable.vue";
import ActionBar from "@/components/layout/ActionBar.vue";
import Modal from '@/components/layout/Modal.vue';
import { useCustomerStore } from '@/stores/customer';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import CustomerForm from './components/customer/CustomerForm.vue';

const { getCustomers } = useCustomerStore()
const customerStore = useCustomerStore()
const { customers } = storeToRefs(customerStore)

onMounted( async () => {
  await getCustomers()
})

</script>

<template>
  <div class="max-w-[100vw] w-full h-screen max-h-[100vh] bg-slate-700 overflow-hidden p-8">
    <ActionBar />
    
    <section class="my-[30px] w-full flex">
      <CustomerTable :customers="customers" />
    </section>

    <Modal>
      <section>
        <CustomerForm />
      </section>
    </Modal>
  </div>
    

</template>

