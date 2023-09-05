import { defineStore } from 'pinia'

export const useCustomerStore = defineStore('customer', {
  state: () => {
    return {
      name: 'Miguel Cassimiro',
      email: 'miguel.cassimiro99@gmail.com',
    }
  },
})
