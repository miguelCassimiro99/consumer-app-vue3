import { z } from 'zod'
import { IProduct } from './products'

const cpfSchema = z.string().refine((cpf) => /^\d{11}$/.test(cpf), {
  message: 'The CPF must contain exactly 11 digits',
})

const phoneSchema = z.string().refine((phone) => /\d{10,11}/.test(phone), {
  message: 'The phone number must have about 10 or 11 digits',
})

export const CustomerSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  cpf: cpfSchema,
  email: z.string().email().optional(),
  phone: phoneSchema,
  active: z.boolean(),
  customer_products: z.array(z.any()) || z.undefined(),
})

export interface ICustomer {
  id?: string
  name: string
  cpf: string
  email?: string
  phone: string
  active: boolean
  customer_products: IProduct[] | []
}
