<script setup lang="ts">
import ActionBar from "@/components/layout/ActionBar.vue";

</script>

<template>
  <div class="max-w-[100vw] w-full h-screen max-h-[100vh] bg-slate-700 overflow-hidden p-8">
    <ActionBar />

    <section>
      <RouterView />
    </section>

  </div>
</template>

