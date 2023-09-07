import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    isOpen: false as boolean,
  }),
  actions: {
    toggleModal() {
      console.log('Modal', this.isOpen)
      this.isOpen = !this.isOpen
    },
  },
})
