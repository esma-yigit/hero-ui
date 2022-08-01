<template>
  <div></div>
  <section>
    <div class="w-full mx-auto p-8">
      <div>
        <div class="tab w-full overflow-hidden">
          <input
            class="absolute opacity-0"
            id="tab-multi-one"
            type="checkbox"
            name="tabs"
          />
          <label class="block p-5 cursor-pointer text-2xl" for="tab-multi-one"
            >Rakamlar</label
          >
          <div
            class="tab-content bg-indigo-600 overflow-hidden bg-white leading-normal bg-indigo-600"
          >
            <p class="p-12">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
              architecto, explicabo perferendis nostrum, maxime impedit atque
              odit sunt pariatur illo obcaecati soluta molestias iure facere
              dolorum adipisci eum? Saepe, itaque.
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
          <label class="block p-5 cursor-pointer text-2xl" for="tab-multi-two"
            >Strateji</label
          >
          <div
            class="tab-content bg-indigo-600 overflow-hidden bg-white border-indigo-500 leading-normal bg-indigo-600"
          >
            <p class="px-10 py-12">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
              architecto, explicabo perferendis nostrum, maxime impedit atque
              odit sunt pariatur illo obcaecati soluta molestias iure facere
              dolorum adipisci eum? Saepe, itaque.
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
          <label class="block p-5 cursor-pointer text-2xl" for="tab-multi-three"
            >Yaraticilik</label
          >
          <div
            class="tab-content bg-indigo-600 overflow-hidden bg-white border-indigo-500 leading-normal bg-indigo-600"
          >
            <p class="px-10 py-12">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
              architecto, explicabo perferendis nostrum, maxime impedit atque
              odit sunt pariatur illo obcaecati soluta molestias iure facere
              dolorum adipisci eum? Saepe, itaque.
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
          <label class="block p-5 cursor-pointer text-2xl" for="tab-multi-three"
            >Oduller</label
          >
          <div
            class="tab-content bg-indigo-600 overflow-hidden bg-white border-indigo-500 leading-normal bg-indigo-600"
          >
            <p class="px-10 py-12">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
              architecto, explicabo perferendis nostrum, maxime impedit atque
              odit sunt pariatur illo obcaecati soluta molestias iure facere
              dolorum adipisci eum? Saepe, itaque.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="flex flex-col container space-y-10">
    <div class="text-center">
      <span
        class="capitalize text-base sm:text-md md:text-3xl whitespace-nowrap"
        >Bizimle basariya ulasanlar</span
      >
    </div>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 md:gap-8 sm:pt-12"
    >
      <div
        class="flex items-center justify-center border aspect-square p-6"
        v-for="i in 12"
        :key="i"
      >
        <img
          src="@/assets/images/yildiz-entegre.png"
          alt=""
          class="object-contain w-full h-full"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
