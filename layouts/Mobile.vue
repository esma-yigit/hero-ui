<template>
  <div class="mobile">
    <div class="mobile-logo">
      <img alt="" class="mobile-img" src="~/assets/images/logo.svg" />
    </div>
    <div class="toggle-menu">
      <Transition name="hover-top"
        ><span v-if="props.isHover === false"></span
      ></Transition>
      <button></button>
      <Transition name="hover-down"
        ><span v-if="props.isHover === false"></span
      ></Transition>
    </div>
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
