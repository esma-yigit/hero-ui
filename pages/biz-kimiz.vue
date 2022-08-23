<template>
  <NuxtLayout name="main-pages">
    <template #page-content>
      <section class="page-container">
        <div class="w-full">
          <div class="flex space-x-14">
            <div class="w-1/2 h-full">
              <img
                class="object-contain w-full h-full"
                src="@/assets/images/page-biz-kimiz-hero.png"
                alt="biz-kimiz"
              />
            </div>
            <div
              class="w-1/2 max-h-[610px] h-full overflow-y-scroll overflow-hidden"
            >
              <h1 class="capitalize text-3xl font-medium mb-4">Biz Kimiz</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                consectetur, cumque illum labore laboriosam maxime minus nulla
                porro quam reiciendis rem rerum sequi, voluptatum. Aliquam,
                aspernatur, ut! Dolore dolores impedit incidunt nesciunt nihil
                non possimus quas quidem recusandae sed. Aliquam amet animi at,
                et facere minima nobis sequi! Ad animi aut cupiditate ducimus,
                esse explicabo illo ipsum neque provident quo? Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Beatae consectetur,
                cumque illum labore laboriosam maxime minus nulla porro quam
                reiciendis rem rerum sequi, voluptatum. Aliquam, aspernatur, ut!
                Dolore dolores impedit incidunt nesciunt nihil non possimus quas
                quidem recusandae sed. Aliquam amet animi at, et facere minima
                nobis sequi! Ad animi aut cupiditate ducimus, esse explicabo
                illo ipsum neque provident quo? Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Beatae consectetur, cumque illum
                labore laboriosam maxime minus nulla porro quam reiciendis rem
                rerum sequi, voluptatum. Aliquam, aspernatur, ut! Dolore dolores
                impedit incidunt nesciunt nihil non possimus quas quidem
                recusandae sed. Aliquam amet animi at, et facere minima nobis
                sequi! Ad animi aut cupiditate ducimus, esse explicabo illo
                ipsum neque provident quo? <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                consectetur, cumque illum labore laboriosam maxime minus nulla
                porro quam reiciendis rem rerum sequi, voluptatum. Aliquam,
                aspernatur, ut! Dolore dolores impedit incidunt nesciunt nihil
                non possimus quas quidem recusandae sed. Aliquam amet animi at,
                et facere minima nobis sequi! Ad animi aut cupiditate ducimus,
                esse explicabo illo ipsum neque provident quo? Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Beatae consectetur,
                cumque illum labore laboriosam maxime minus nulla porro quam
                reiciendis rem rerum sequi, voluptatum. Aliquam, aspernatur, ut!
                Dolore dolores impedit incidunt nesciunt nihil non possimus quas
                quidem recusandae sed. Aliquam amet animi at, et facere minima
                nobis sequi! Ad animi aut cupiditate ducimus, esse explicabo
                illo ipsum neque provident quo? Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Beatae consectetur, cumque illum
                labore laboriosam maxime minus nulla porro quam reiciendis rem
                rerum sequi, voluptatum. Aliquam, aspernatur, ut! Dolore dolores
                impedit incidunt nesciunt nihil non possimus quas quidem
                recusandae sed. Aliquam amet animi at, et facere minima nobis
                sequi! Ad animi aut cupiditate ducimus, esse explicabo illo
                ipsum neque provident quo?
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="tab w-full overflow-hidden">
            <input
              class="absolute opacity-0"
              id="tab-multi-one"
              type="checkbox"
              name="tabs"
            />
            <label
              class="block p-5 cursor-pointer text-3xl pl-4"
              for="tab-multi-one"
              >Rakamlar</label
            >
            <div class="w-full h-[2px] linear-g-line"></div>
            <div
              class="tab-content overflow-hidden bg-white leading-normal bg-slate-100"
            >
              <p class="p-12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, architecto, explicabo perferendis nostrum, maxime
                impedit atque odit sunt pariatur illo obcaecati soluta molestias
                iure facere dolorum adipisci eum? Saepe, itaque.
              </p>
            </div>
          </div>
          <div class="tab w-full overflow-hidden border-t">
            <input
              class="absolute opacity-0"
              id="tab-multi-two"
              type="checkbox"
              name="tabs"
            />
            <label
              class="block p-5 cursor-pointer text-3xl pl-4"
              for="tab-multi-two"
              >Strateji</label
            >
            <div class="w-full h-[2px] linear-g-line"></div>

            <div
              class="tab-content bg-slate-100 overflow-hidden bg-white border-indigo-500 leading-normal bg-slate-100"
            >
              <p class="px-10 py-12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, architecto, explicabo perferendis nostrum, maxime
                impedit atque odit sunt pariatur illo obcaecati soluta molestias
                iure facere dolorum adipisci eum? Saepe, itaque.
              </p>
            </div>
          </div>
          <div class="tab w-full overflow-hidden border-t">
            <input
              class="absolute opacity-0"
              id="tab-multi-three"
              type="checkbox"
              name="tabs"
            />
            <label
              class="block p-5 cursor-pointer text-3xl pl-4"
              for="tab-multi-three"
              >Yaraticilik</label
            >
            <div class="w-full h-[2px] linear-g-line"></div>

            <div
              class="tab-content bg-slate-100 overflow-hidden bg-white border-indigo-500 leading-normal bg-slate-100"
            >
              <p class="px-10 py-12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, architecto, explicabo perferendis nostrum, maxime
                impedit atque odit sunt pariatur illo obcaecati soluta molestias
                iure facere dolorum adipisci eum? Saepe, itaque.
              </p>
            </div>
          </div>
          <div class="tab w-full overflow-hidden border-t">
            <input
              class="absolute opacity-0"
              id="tab-multi-four"
              type="checkbox"
              name="tabs"
            />
            <label
              class="block p-5 cursor-pointer text-3xl pl-4"
              for="tab-multi-four"
              >Oduller</label
            >
            <div class="w-full h-[2px] linear-g-line"></div>

            <div
              class="tab-content bg-slate-100 overflow-hidden leading-normal bg-slate-100"
            >
              <p class="px-10 py-12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, architecto, explicabo perferendis nostrum, maxime
                impedit atque odit sunt pariatur illo obcaecati soluta molestias
                iure facere dolorum adipisci eum? Saepe, itaque.
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-col space-y-4 mt-12 mb-12">
          <div class="text-center">
            <span
              class="capitalize text-base sm:text-md md:text-3xl whitespace-nowrap"
              >Bizimle basariya ulasanlar</span
            >
          </div>
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 md:gap-8 sm:pt-12"
          >
            <CardCompany v-for="c in companyLogos" :key="c.name">
              <template #img>
                <img
                  :src="c.logo"
                  alt=""
                  class="object-contain w-full h-full"
                />
              </template>
            </CardCompany>
          </div>
        </div>
      </section>
      <BadgeTeklifAlin />
      <FooterContact />
    </template>
  </NuxtLayout>
</template>

<style>
.linear-g-line {
  background: linear-gradient(90deg, #3990e4 0%, #9c44b3 100%);
}
</style>
<script setup>
import { reactive } from "vue";
import FooterContact from "../components/FooterContact";
import BadgeTeklifAlin from "../components/BadgeTeklifAlin";
import CardCompany from "../components/base/CardCompany";
import yildiz from "@/assets/images/yildiz-entegre.png";
import coldwell from "@/assets/images/logo-company-1.png";
import marmara from "@/assets/images/logo-company-2.png";
import remax from "@/assets/images/logo-company-3.png";
const companyLogos = reactive([
  {
    name: "Yildiz Entegre",
    logo: yildiz,
  },
  {
    name: "Coldwell",
    logo: coldwell,
  },
  {
    name: "MarmaraBirlik",
    logo: marmara,
  },
  {
    name: "Remax",
    logo: remax,
  },
  {
    name: "Yildiz Entegre-2",
    logo: yildiz,
  },
  {
    name: "Coldwell-2",
    logo: coldwell,
  },
  {
    name: "MarmaraBirl-2ik-2",
    logo: marmara,
  },
  {
    name: "Remax-2",
    logo: remax,
  },
  {
    name: "Yildiz Entegre-3",
    logo: yildiz,
  },
  {
    name: "Coldwell-3",
    logo: coldwell,
  },
  {
    name: "MarmaraBirlik-3",
    logo: marmara,
  },
  {
    name: "Remax-3",
    logo: remax,
  },
]);
</script>
