<template>
  <NuxtLayout name="main-pages">
    <template #page-content>
      <section class="page-container">
        <div class="flex mb-32">
          <div
            class="flex flex-col items-start justify-center space-y-8 w-2/5 -mt-8"
          >
            <h1 class="font-semibold text-2xl">
              <slot name="page-title" />
            </h1>
            <p>
              <slot name="page-description" />
            </p>
            <button class="btn-light-screen">
              <img alt="" src="@/assets/images/icon-call.png" />
              <span class="text">Bilgi Alın</span>
              <img alt="" src="@/assets/images/forward.png" />
            </button>
          </div>
          <div class="w-3/5 flex flex-col items-center justify-center">
            <div class="w-4/5 ml-6 p-2">
              <slot name="page-image" />
            </div>
          </div>
        </div>
        <div class="flex flex-col space-y-10">
          <div class="text-center">
            <span
              class="capitalize text-sm sm:text-lg md:text-4xl whitespace-nowrap"
              >Neden 360° Hizmet Almalıyım?</span
            >
          </div>
          <div
            class="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 sm:pt-12"
          >
            <div v-for="i in 6" :key="i">
              <div
                class="flex items-center justify-center border aspect-square"
              >
                <img
                  src="@/assets/images/yildiz-entegre.png"
                  alt=""
                  class="object-contain w-full h-full"
                />
              </div>
              <div class="flex flex-col space-y-4">
                <h6 class="font-normal text-lg">
                  Lorem ipsum dolor sit amet, consectetur
                </h6>
                <p class="font-light text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </NuxtLayout>
</template>

<script setup></script>

<style scoped></style>
