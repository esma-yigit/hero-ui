<template>
  <button
    class="btn btn-gradient"
    :class="{ 'props.customizeClass': props.customizeClass }"
  >
    <slot name="start-icon"></slot>
    <span class="text">{{ props.label }}</span>
    <slot name="end-icon"></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  bgColor: {
    type: String,
    default: "#fff",
  },
  customizeClass: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
});
</script>

<style scoped></style>
