import { newUUID } from '@/helpers/functions'
import { IProduct } from '@/types/products'
import axios from 'axios'
import { defineStore } from 'pinia'

const onWorkingProductInitial = {
  id: undefined,
  name: undefined,
  active: true,
}

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as IProduct[],
    onWorkingProduct: {
      id: undefined,
      name: undefined,
      active: true,
    },
  }),
  actions: {
    async getProducts(): Promise<IProduct[] | undefined> {
      try {
        const response = await fetch('http://localhost:3000/products')
        const data = await response.json()
        this.products = data
      } catch (error) {
        console.log('Products - Get - Error: ', error)
        this.products = []
        return
      }
    },
    async createProduct(product: IProduct): Promise<IProduct | undefined> {
      try {
        const uuid = newUUID()

        const payload = {
          ...product,
          id: uuid,
        } as IProduct

        const response = await axios.post(
          'http://localhost:3000/products',
          payload
        )
        if (!response.data) throw new Error('Error adding product')
        this.products.push(response.data)
        return response.data
      } catch (error) {
        console.log('Products - Create - Error: ', error)
        return
      }
    },

    async updateProduct(product: IProduct): Promise<IProduct | undefined> {
      try {
        const url = `http://localhost:3000/products/${product.id}`

        const response = await axios.put(url, product)
        if (!response.data) throw new Error('Error updating product')

        const index = this.products.findIndex((p) => p.id === product.id)
        this.products[index] = response.data
        this.onWorkingProduct = onWorkingProductInitial
        return response.data
      } catch (error) {
        console.log('Products - Update - Error: ', error)
        return
      }
    },
    setonWorkingProduct(product: any) {
      this.onWorkingProduct = product
    },
  },
})
