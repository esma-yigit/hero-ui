<template>
  <main>
    <div class="grid grid-cols-13 grid-rows-1">
      <!-- Left side -->
      <div
        class="col-span-1 col-start-1 col-end-2 row-start-1 row-end-2 border border-r-slate-600"
      >
        <div class="w-full h-full p-8">
          <img
            src="@/assets/images/logo.svg"
            alt="arma-logo"
            class="aspect-square w-full h-full"
          />
        </div>
      </div>

      <div
        class="col-span-11 col-start-2 col-end-13 row-start-1 row-start2 border border-b-slate-600 px-12"
      >
        <div
          class="flex items-center justify-between row-start-1 row-end-2 w-4/5 h-full mx-auto"
        >
          <div class="flex items-center cursor-pointer">
            <img class="invert w-1/6" src="@/assets/images/prev.png" alt="" />
            <NuxtLink to="/"> Ana Sayfa</NuxtLink>
          </div>
          <div class="cursor-pointer">
            <NuxtLink to="/">Biz Kimiz</NuxtLink>
          </div>
          <div class="flex cursor-pointer items-center justify-center">
            <NuxtLink to="/">360 Hizmetler</NuxtLink>
            <img class="invert w-1/6" src="@/assets/images/next.png" alt="" />
          </div>
        </div>
      </div>

      <div
        class="col-span-1 col-start-13 col-end-14 row-start-1 row-end-2 border border-l-slate-600 flex justify-center items-center"
        @click="openDrawer"
        @mouseleave="isHover = false"
        @mouseover.prevent="isHover = true"
      >
        <div class="toggle-menu p-0">
          <Transition name="hover-top"
            ><span v-if="isHover === false"></span
          ></Transition>
          <button></button>
          <Transition name="hover-down"
            ><span v-if="isHover === false"></span
          ></Transition>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-13">
      <div
        class="col-span-1 col-start-1 col-end-2 grid grid-rows-6 max-h-[845px]"
      >
        <div
          class="row-span-3 row-start-1 row-end-4 border border-b-slate-600 w-full h-full"
        ></div>
        <div
          class="row-span-1 row-start-4 p-14 row-end-5 col-span-1 col-start-1 col-end-2 border border-b-slate-600"
        >
          <img
            alt=""
            class="invert w-full object-contain h-full"
            src="@/assets/images/icon-rocket.png"
          />
        </div>
        <div
          class="row-span-1 row-start-5 p-14 row-end-6 col-span-1 border border-b-slate-600"
        >
          <img
            alt=""
            class="invert w-full object-contain h-full"
            src="@/assets/images/icon-hearth.png"
          />
        </div>
        <div
          class="row-span-1 row-start-6 p-14 row-end-7 col-span-1 border border-b-slate-600"
        >
          <img
            alt=""
            class="invert w-full h-full object-contain"
            src="@/assets/images/icon-arrow-top.png"
          />
        </div>
      </div>
      <div class="col-span-11 col-start-2 col-end-13">
        <slot name="page-content" />
      </div>
      <div
        class="col-span-1 grid grid-rows-6 col-start-13 col-end-14 max-h-[845px]"
      >
        <div
          class="row-span-4 row-start-1 row-end-5 border border-b-slate-600"
        ></div>
        <div
          class="row-span-1 row-start-5 p-14 row-end-6 col-span-1 border border-b-slate-600"
        >
          <img
            alt=""
            class="invert w-full object-contain h-full"
            src="@/assets/images/next.png"
          />
        </div>
        <div
          class="row-span-1 row-start-6 p-14 row-end-7 col-span-1 border border-b-slate-600"
        >
          <img
            alt=""
            class="invert w-full object-contain h-full"
            src="@/assets/images/prev.png"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const isToggleOpen = useState("isToggleOpen", () => false);
const isHover = useState("isHover", () => false);
const openDrawer = () => {
  isToggleOpen.value = !isToggleOpen.value;
};
</script>

<style scoped></style>
