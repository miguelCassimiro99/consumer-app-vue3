import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    isOpen: false as boolean,
  }),
  actions: {
    toggleModal() {
      this.isOpen = !this.isOpen
    },
  },
})
