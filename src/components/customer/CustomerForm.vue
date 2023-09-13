<script setup lang="ts">
import { ICustomer, CustomerSchema } from '@/types/customer';
import { ref } from 'vue';
import z, { custom } from 'zod'
import { useCustomerStore } from '@/stores/customer'
import { storeToRefs } from 'pinia';
import { useModalStore } from '@/stores/modal'

const { addCustomer, updateCustomer, getCustomers } = useCustomerStore()
const customerStore = useCustomerStore()
const { onWorkingCustomer } = storeToRefs(customerStore)

const { toggleModal } = useModalStore()

const initalFormCustomer = {
  name: undefined,
  cpf: undefined,
  phone: undefined,
  email: undefined,
  active: true,
  customer_products: []
}

async function cancelSubmit() {
  toggleModal()
  await getCustomers()
}

const validationError = ref<any>(null)

const startEditCustomer = async (customer: ICustomer) => {
  console.log("Customer: ", customer)
  const response = await updateCustomer(customer);
  if(response?.id) toggleModal()
}

const submitForm = async () => {
  try {

    if(onWorkingCustomer.value.email === "") onWorkingCustomer.value.email = undefined

    const validatedCustomer = CustomerSchema.parse(onWorkingCustomer.value)

    if(validatedCustomer.id) return startEditCustomer(validatedCustomer)

    const response =  await addCustomer(validatedCustomer)
    if(response?.id) toggleModal()

  } catch (error: any) {
    validationError.value = error
    console.log("Error: ", error.issues);
    
    return;
  }
}

</script>
<template>
  <div class="max-w-md mx-auto">
    <h1 class="text-2xl font-semibold mb-4">{{ onWorkingCustomer.id ? "Update Customer" : "New Customer" }}</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
        <input v-model="onWorkingCustomer.name" type="text" id="name" name="name" class="w-full mt-1 px-4 py-2 border rounded-md">
      </div>
      <div class="mb-4">
        <label for="cpf" class="block text-sm font-medium text-gray-700">CPF:</label>
        <input v-model="onWorkingCustomer.cpf" type="text" id="cpf" name="cpf" class="w-full mt-1 px-4 py-2 border rounded-md">
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">E-mail:</label>
        <input v-model="onWorkingCustomer.email" type="email" id="email" name="email" class="w-full mt-1 px-4 py-2 border rounded-md">
      </div>
      <div class="mb-4">
        <label for="phone" class="block text-sm font-medium text-gray-700">Phone:</label>
        <input v-model="onWorkingCustomer.phone" type="text" id="phone" name="phone" class="w-full mt-1 px-4 py-2 border rounded-md">
      </div>
      <div class="mb-4">
        <label for="active" class="block text-sm font-medium text-gray-700">Active:</label>
        <input type="checkbox" class="form-checkbox h-6 w-6 text-indigo-600 rounded-md" v-model="onWorkingCustomer.active"  id="active" name="active" />
      </div>

      <div v-if="validationError">
        
      </div>
      <div class="mb-4">
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md">{{ onWorkingCustomer.id ? "Atualizar " : "Criar" }}</button>
      </div>

      <div class="mb-4">
        <button @click="cancelSubmit()" class="px-4 py-2 bg-red-500 text-white rounded-md">Cancelar</button>
      </div>
    </form>
  </div>
</template>