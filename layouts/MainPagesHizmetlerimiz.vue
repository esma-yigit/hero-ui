<template>
  <main>
    <div class="grid grid-cols-13 grid-rows-1">
      <!-- Left side -->
      <div
        class="col-span-1 col-start-1 col-end-2 row-start-1 row-end-2 border-right border-bottom"
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
        class="col-span-11 col-start-2 col-end-13 row-start-1 row-end-2 border-bottom"
      >
        <div
          class="flex items-center justify-between row-start-1 page-container mb-4"
        >
          <div
            class="flex items-center cursor-pointer"
            v-for="(item, index) in hizmetlerimizNavItems"
            :key="index"
          >
            <div>
              <NuxtLink :to="item.direct">
                <span>360</span> {{ item.name }}</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>

      <div
        class="col-span-1 col-start-13 col-end-14 row-start-1 row-end-2 flex justify-center items-center border-bottom border-left"
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
          class="row-span-3 row-start-1 row-end-4 w-full h-full border-bottom border-right"
        ></div>
        <div
          class="row-span-1 row-start-4 p-14 row-end-5 col-span-1 col-start-1 col-end-2 border-bottom border-right"
        >
          <img
            alt=""
            class="invert w-full object-contain h-full"
            src="@/assets/images/icon-rocket.png"
          />
        </div>
        <div
          class="row-span-1 row-start-5 p-14 row-end-6 col-span-1 border-bottom border-right"
        >
          <img
            alt=""
            class="invert w-full object-contain h-full"
            src="@/assets/images/icon-hearth.png"
          />
        </div>
        <div
          class="row-span-1 row-start-6 p-14 row-end-7 col-span-1 border-bottom border-right"
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
          class="row-span-4 row-start-1 row-end-5 border-bottom border-left"
        ></div>

        <div
          class="row-span-1 row-start-5 p-14 row-end-6 col-span-1 border-bottom border-left"
        >
          <img
            alt=""
            class="invert w-full object-contain h-full"
            src="@/assets/images/next.png"
          />
        </div>
        <div
          class="row-span-1 row-start-6 p-14 row-end-7 col-span-1 border-bottom border-left"
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
import hizmetlerimizNavItems from "@/constants/hizmetlerimizNavItems";
const isToggleOpen = useState("isToggleOpen", () => false);
const isHover = useState("isHover", () => false);
const openDrawer = () => {
  isToggleOpen.value = !isToggleOpen.value;
};
</script>

<style scoped></style>
