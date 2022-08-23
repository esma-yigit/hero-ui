<template>
  <NuxtLayout name="main-pages-hizmetlerimiz">
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
            class="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 md:gap-24 sm:pt-12"
          >
            <div v-for="i in 6" :key="i">
              <div>
                <div
                  class="flex items-center justify-center border bc w-full h-full p-20 rounded-3xl"
                >
                  <img
                    src="@/assets/images/page-icon-2.png"
                    alt=""
                    class="object-contain w-3/5 h-3/5"
                  />
                </div>
                <div class="flex flex-col space-y-4 mt-8">
                  <h6 class="font-normal text-lg">
                    Lorem ipsum dolor sit amet, consectetur
                  </h6>
                  <p class="font-light text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BadgeTeklifAlin />
      <div class="flex flex-col space-y-10 mt-32 page-container mb-32">
        <div class="text-center">
          <span
            class="capitalize text-base sm:text-md md:text-3xl whitespace-nowrap"
            >Bizimle basariya ulasanlar</span
          >
        </div>
        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 md:gap-8 sm:pt-12"
        >
          <CardCompany v-for="i in companyLogos" :key="i.name">
            <template #img>
              <img :src="i.logo" alt="" class="object-contain w-full h-full" />
            </template>
          </CardCompany>
        </div>
      </div>
      <FooterContact />
    </template>
  </NuxtLayout>
</template>

<script setup>
import CardCompany from "../components/base/CardCompany";
import companyLogos from "@/constants/companyLogos";
</script>

<style scoped>
.bc {
  background: url("@/assets/images/page-card-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
<script>
import BadgeTeklifAlin from "../components/BadgeTeklifAlin";
import FooterContact from "../components/FooterContact";
export default {
  components: { FooterContact, BadgeTeklifAlin },
};
</script>
