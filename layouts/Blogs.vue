<template>
  <section class="page-container">
    <div class="grid grid-cols-2 grid-rows-4">
      <div class="first-blog-row flex flex-row">
        <div class="blog-img">
          <img
            src="@/assets/images/page-blog-1.png"
            alt=""
            class="object-contain"
          />
        </div>
        <div class="flex flex-col justify-center items-start">
          <h1 class="blog-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <NuxtLink class="flex justify-start items-center" to="/blog/blog-1">
            <img
              src="@/assets/images/icon-arrow-right.png"
              alt=""
              class="dark-icon"
            /><span class="whitespace-nowrap btn-label">Makeleyi Oku</span>
          </NuxtLink>
        </div>
      </div>
      <div class="second-blog-row flex">
        <div class="blog-img">
          <img src="@/assets/images/page-blog-2.png" alt="" />
        </div>
        <div class="flex flex-col justify-center items-start">
          <h1 class="blog-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <NuxtLink class="flex justify-start items-center" to="https:">
            <img
              src="@/assets/images/icon-arrow-right.png"
              alt=""
              class="dark-icon"
            /><span class="whitespace-nowrap btn-label">Makeleyi Oku</span>
          </NuxtLink>
        </div>
      </div>
      <div class="third-blog-row flex">
        <div class="blog-img">
          <img src="@/assets/images/page-blog-3.png" alt="" />
        </div>
        <div class="flex flex-col justify-center items-start">
          <h1 class="blog-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <NuxtLink class="flex justify-start items-center" to="https:">
            <img
              src="@/assets/images/icon-arrow-right.png"
              alt=""
              class="dark-icon"
            /><span class="whitespace-nowrap btn-label">Makeleyi Oku</span>
          </NuxtLink>
        </div>
      </div>
      <div class="forth-blog-row flex">
        <div class="blog-img">
          <img src="@/assets/images/page-blog-4.png" alt="" />
        </div>
        <div class="flex flex-col justify-center items-start">
          <h1 class="blog-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <NuxtLink class="flex justify-start items-center" to="https:">
            <img
              src="@/assets/images/icon-arrow-right.png"
              alt=""
              class="dark-icon"
            /><span class="whitespace-nowrap btn-label">Makeleyi Oku</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
  <BadgeTeklifAlin />
  <FooterContact />
</template>

<script setup></script>

<style scoped></style>
