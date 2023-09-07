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
    async getCustomers() {
      try {
        const response = await fetch('http://localhost:3000/customers')
        if (!response || !response.ok) return
        const data = await response.json()
        this.customers = data
      } catch (error) {
        console.log('Customers - Get - Error: ', error)
        this.customers = []
        return
      }
    },
  },
})
