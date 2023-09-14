import { defineStore } from 'pinia'
import { CustomerSchema, ICustomer } from '../types/customer'
import { newUUID } from '@/helpers/functions'
import axios from 'axios'

const onWorkingCustomerInitial = {
  id: undefined,
  name: undefined,
  cpf: undefined,
  phone: undefined,
  email: undefined,
  active: true,
  customer_products: [],
}

export const useCustomerStore = defineStore('customer', {
  state: () => ({
    customers: [] as ICustomer[],
    onWorkingCustomer: {
      id: undefined,
      name: undefined,
      cpf: undefined,
      phone: undefined,
      email: undefined,
      active: true,
      customer_products: [],
    } as any | ICustomer,
  }),
  actions: {
    async addCustomer(newCustomer: ICustomer): Promise<ICustomer | undefined> {
      try {
        const uuid = newUUID()
        const payload = {
          ...newCustomer,
          id: uuid,
        } as ICustomer

        const url = 'http://localhost:3000/customers'
        const response = await axios.post(url, payload)
        if (!response.data) throw new Error('Error adding customer')
        this.customers.push(response.data)
        return payload
      } catch (error) {
        console.log('Customer - Post - Error: ', error)
        return
      }
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
    async updateCustomer(customer: ICustomer): Promise<ICustomer | undefined> {
      try {
        const url = `http://localhost:3000/customers/${customer.id}`
        const response = await axios.put(url, customer)

        if (!response.data) throw new Error('Error updating customer')

        const index = this.customers.findIndex((c) => c.id === customer.id)
        this.customers[index] = response.data

        this.onWorkingCustomer = onWorkingCustomerInitial
        return response.data as ICustomer
      } catch (error) {
        console.log('Customer - Put - Error: ', error)
        return
      }
    },
    setOnWorkingCustomer(customer: any) {
      this.onWorkingCustomer = customer
    },
  },
})
