<script setup lang="ts">

import { useModalStore } from '@/stores/modal';
import { storeToRefs } from 'pinia';
import {
Dialog,
DialogPanel,
DialogTitle,
DialogDescription
} from '@headlessui/vue';

const modalStore = useModalStore()
const { isOpen } = storeToRefs(modalStore)


</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center z-50" v-if="isOpen">
    <!-- Dark background -->
    <div class="fixed inset-0 bg-black opacity-50"></div>

    <div class="bg-gray-200 p-4 rounded shadow-lg z-30">
      <slot></slot>

      <!-- <button @click="modalStore.toggleModal()" class="mt-4 p-2 text-sm font-medium text-gray-700 hover:text-gray-900">
        Cancel
      </button> -->
    </div>
  </div>
</template>
<style scoped>
</style>