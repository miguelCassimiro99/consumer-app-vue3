<script setup lang="ts">
import { useCustomerStore } from '@/stores/customer';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import CustomerTable from '@/components/customer/CustomerTable.vue';
import Modal from '@/components/layout/Modal.vue';
import CustomerForm from '@/components/customer/CustomerForm.vue';
import { useModalStore } from '@/stores/modal'

const { toggleModal } = useModalStore()
const { getCustomers } = useCustomerStore()
const customerStore = useCustomerStore()
const { customers } = storeToRefs(customerStore)


onMounted( async () => {
  await getCustomers()
})
</script>
<template>
  <div class="my-[30px] w-full flex flex-col items-start">
    <button
      @click="toggleModal()"
      class="bg-green-800 rounded-md cursor-pointer shadow-sm px-2 text-gray-200 font-semibold hover:bg-green-700 hover:text-gray-100 py-1 my-4"
    >
      Add Customer
    </button>

    <CustomerTable :customers="customers" />
    <Modal>
      <CustomerForm />
    </Modal>
  </div>
</template>