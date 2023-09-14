<script setup lang="ts">
import { ICustomer, CustomerSchema } from '@/types/customer';
import { ref } from 'vue';
import { useCustomerStore } from '@/stores/customer'
import { storeToRefs } from 'pinia';
import { useModalStore } from '@/stores/modal'
import { fromZodError } from 'zod-validation-error'


const { addCustomer, updateCustomer, getCustomers } = useCustomerStore()
const customerStore = useCustomerStore()
const { onWorkingCustomer } = storeToRefs(customerStore)
const { toggleModal } = useModalStore()

async function cancelSubmit() {
  toggleModal()
  await getCustomers()
}

const validationError = ref<any>(null)

const startEditCustomer = async (customer: ICustomer) => {
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
    const newError = fromZodError(error);
    validationError.value = newError.message.replace("Validation error: ", "")
    console.log("Error: ", error)
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
        <input v-model="onWorkingCustomer.email" id="email" name="email" class="w-full mt-1 px-4 py-2 border rounded-md">
      </div>
      <div class="mb-4">
        <label for="phone" class="block text-sm font-medium text-gray-700">Phone:</label>
        <input v-model="onWorkingCustomer.phone" type="text" id="phone" name="phone" class="w-full mt-1 px-4 py-2 border rounded-md">
      </div>
      <div class="mb-4">
        <label for="active" class="block text-sm font-medium text-gray-700">Active:</label>
        <input type="checkbox" class="form-checkbox h-6 w-6 text-blue-600 rounded-md" v-model="onWorkingCustomer.active"  id="active" name="active" />
      </div>

      <div class="h-5 my-5">
        <div v-if="validationError">
          <p class="text-red-500 font-semibold">{{ validationError }}</p>
        </div>
      </div>
      <div class="flex justify-start items-start gap-2">
        <div class="">
          <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md">{{ onWorkingCustomer.id ? "Update " : "Create" }}</button>
        </div>
  
        <div class="">
          <button @click="cancelSubmit()" class="px-4 py-2 bg-red-500 text-white rounded-md">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>