<template>
  <div class="mobile page-container">
    <div class="mobile-logo">
      <img alt="" class="mobile-img" src="~/assets/images/logo.svg" />
    </div>

    <slot name="toggle-menu"></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  isHover: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped></style>
