import { z } from 'zod'

const cpfSchema = z.string().refine((cpf) => /^\d{11}$/.test(cpf), {
  message: 'O CPF deve conter exatamente 11 dígitos numéricos.',
})

const phoneSchema = z.string().refine((phone) => /\d{10,11}/.test(phone), {
  message: 'O número de telefone deve conter de 10 a 11 dígitos.',
})

export const Customer = z.object({
  name: z.string(),
  cpf: cpfSchema,
  email: z.string().email().optional(),
  phone: phoneSchema,
})

export interface ICustomer {
  name: string
  cpf: string
  email?: string
  phone: string
}
