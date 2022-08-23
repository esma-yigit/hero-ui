<template>
  <div class="flex items-center justify-center border aspect-square p-6">
    <slot name="img" />
  </div>
</template>

<script setup></script>

<style scoped>
.border {
  border: 1px solid rgba(43, 44, 45, 0.66);
}
</style>
