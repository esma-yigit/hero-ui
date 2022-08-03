<template>
  <main>
    <div class="grid grid-cols-13 grid-rows-1">
      <!-- Left side -->
      <div
        class="col-span-1 col-start-1 col-end-2 row-start-1 row-end-2 border border-r-slate-600"
      >
        <div class="w-full h-full">
          <img
            src="@/assets/images/logo.svg"
            alt="arma-logo"
            class="aspect-square w-full h-full"
          />
        </div>
        <div>
          <!--        <div-->
          <!--          class="row-span-3 row-start-2 row-end-5 border border-b-slate-600 w-full h-full"-->
          <!--        ></div>-->
          <!--        <div-->
          <!--          class="row-span-1 row-start-5 row-end-6 col-span-1 border border-b-slate-600 w-full h-full flex justify-center items-center"-->
          <!--        >-->
          <!--          <img alt="" class="invert" src="@/assets/images/icon-rocket.png" />-->
          <!--        </div>-->
          <!--        <div-->
          <!--          class="row-span-1 row-start-6 row-end-7 col-span-1 border border-b-slate-600 w-full h-full flex justify-center items-center"-->
          <!--        >-->
          <!--          <img alt="" class="invert" src="@/assets/images/icon-hearth.png" />-->
          <!--        </div>-->
          <!--        <div-->
          <!--          class="row-span-1 row-start-7 row-end-8 col-span-1 border border-b-slate-600 w-full h-full flex justify-center items-center"-->
          <!--        >-->
          <!--          <img alt="" class="invert" src="@/assets/images/icon-arrow-top.png" />-->
          <!--        </div>-->
        </div>
      </div>

      <!--        <div-->
      <!--          class="row-span-3 row-start-2 row-end-5 border border-b-slate-600 w-full h-full"-->
      <!--        ></div>-->
      <!--        <div-->
      <!--          class="row-span-1 row-start-5 row-end-6 col-span-1 border border-b-slate-600 w-full h-full flex justify-center items-center"-->
      <!--        >-->
      <!--          <img alt="" class="invert" src="@/assets/images/icon-rocket.png" />-->
      <!--        </div>-->
      <!--        <div-->
      <!--          class="row-span-1 row-start-6 row-end-7 col-span-1 border border-b-slate-600 w-full h-full flex justify-center items-center"-->
      <!--        >-->
      <!--          <img alt="" class="invert" src="@/assets/images/icon-hearth.png" />-->
      <!--        </div>-->
      <!--        <div-->
      <!--          class="row-span-1 row-start-7 row-end-8 col-span-1 border border-b-slate-600 w-full h-full flex justify-center items-center"-->
      <!--        >-->
      <!--          <img alt="" class="invert" src="@/assets/images/icon-arrow-top.png" />-->
      <!--        </div>-->
      <div
        class="col-span-11 col-start-2 col-end-13 row-start-1 row-start2 border border-b-slate-600"
      >
        <div class="flex row-start-1 row-end-2">
          <a href="">Ana sayfa</a>
          <a href="">Ana sayfa</a>
          <a href="">Ana sayfa</a>
        </div>
      </div>

      <div
        class="col-span-1 col-start-13 col-end-14 row-start-1 row-end-2 border border-l-slate-600"
      >
        <div class="w-full h-full">
          <img
            src="@/assets/images/logo.svg"
            alt="arma-logo"
            class="aspect-square w-full h-full"
          />
        </div>
      </div>
      <!--        <div-->
      <!--          class="row-span-4 row-start-2 row-end-6 border border-b-slate-600 w-full h-full"-->
      <!--        ></div>-->
      <!--        <div-->
      <!--          class="row-span-1 row-start-6 row-end-7 col-span-1 border border-b-slate-600 w-full h-full flex justify-center items-center"-->
      <!--        >-->
      <!--          <img-->
      <!--            alt=""-->
      <!--            class="invert aspect-square w-full h-full"-->
      <!--            src="@/assets/images/next.png"-->
      <!--          />-->
      <!--        </div>-->
      <!--        <div-->
      <!--          class="row-span-1 row-start-7 row-end-8 col-span-1 border border-b-slate-600 w-full h-full flex justify-center items-center"-->
      <!--        >-->
      <!--          <img-->
      <!--            alt=""-->
      <!--            class="invert aspect-square w-full h-full"-->
      <!--            src="@/assets/images/prev.png"-->
      <!--          />-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
    <div class="grid grid-cols-13">
      <div
        class="col-span-1 col-start-1 col-end-2 grid grid-rows-6 max-h-[1080px] place-content-center"
      >
        <div
          class="row-span-3 row-start-1 row-end-4 border border-b-slate-600 w-full h-full"
        ></div>
        <div
          class="row-span-1 aspect-square row-start-4 row-end-5 col-span-1 col-start-1 col-end-2 border border-b-slate-600 w-full h-full flex justify-center items-center"
        >
          <img alt="" class="invert" src="@/assets/images/icon-rocket.png" />
        </div>
        <div
          class="row-span-1 row-start-5 row-end-6 col-span-1 border border-b-slate-600 w-full h-full flex justify-center items-center"
        >
          <img
            alt=""
            class="invert w-full h-full aspect-square"
            src="@/assets/images/icon-hearth.png"
          />
        </div>
        <div
          class="row-span-1 row-start-6 row-end-7 col-span-1 border border-b-slate-600 w-full h-full flex justify-center items-center"
        >
          <img
            alt=""
            class="invert w-full h-full aspect-square"
            src="@/assets/images/icon-arrow-top.png"
          />
        </div>
      </div>
      <div class="col-span-11 col-start-2 col-end-13">
        <slot name="page-content" />
      </div>
      <div
        class="col-span-1 grid grid-rows-6 col-start-13 col-end-14 max-h-[1080px]"
      >
        <div
          class="row-span-4 row-start-1 row-end-5 border border-b-slate-600 w-full h-full"
        ></div>
        <div
          class="row-span-1 row-start-5 row-end-6 col-span-1 border border-b-slate-600 w-full h-full flex justify-center items-center"
        >
          <img
            alt=""
            class="invert aspect-square w-full h-full"
            src="@/assets/images/next.png"
          />
        </div>
        <div
          class="row-span-1 row-start-6 row-end-7 col-span-1 border border-b-slate-600 w-full h-full flex justify-center items-center"
        >
          <img
            alt=""
            class="invert aspect-square w-full h-full"
            src="@/assets/images/prev.png"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style scoped></style>
