<script setup lang="ts">
import { useCustomerStore } from '@/stores/customer'
import CustomerTable from "@/components/customer/CustomerTable.vue"
import ActionBar from "@/components/layout/ActionBar.vue"
import { onMounted, ref } from 'vue';
import Modal from '@/components/layout/Modal.vue';
import { useModalStore } from '@/stores/modal'
import { storeToRefs } from 'pinia';

const { customers, getCustomers } = useCustomerStore()
onMounted( async () => {
  await getCustomers()
})

const modalStore = useModalStore()
const { isOpen } = storeToRefs(modalStore)

const isModalOpen = ref(true);

</script>

<template>
  <div class="max-w-[100vw] w-full h-screen max-h-[100vh] bg-slate-700 overflow-hidden p-8">
    <ActionBar />
    
    <section class="my-[30px] w-full flex">
      <CustomerTable :customers="customers" />
    </section>

    <Modal />
  </div>
    

</template>

