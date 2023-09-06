import { defineStore } from 'pinia'
import { Customer, ICustomer } from '../types/customer'

export const useCustomerStore = defineStore('customer', {
  state: () => ({
    customers: [] as ICustomer[],
  }),
  actions: {
    async addCustomer(newCustomer: ICustomer) {
      const parsedCustomer = Customer.parse(newCustomer)
      this.customers.push(parsedCustomer)
    },
  },
})
