<template>
  <NuxtLayout name="main-pages">
    <template #page-content>
      <section class="page-container">
        <div
          class="flex flex-col sm:flex-row items-start justify-start space-x-4 w-full divide-x mb-12"
        >
          <div class="flex flex-col space-y-4 pr-8">
            <h6 class="font-semibold">Adress</h6>
            <div class="flex flex-col">
              <p>Abdurrahmangazi, Atayolu Cd. No:12</p>
              <p>Denge Towers B Blok Kat:3,D:15, 34887</p>
              <p>Sancaktepe/İstanbul</p>
            </div>
          </div>
          <div class="flex flex-col space-y-4 px-8">
            <h6 class="font-semibold">Telefon</h6>
            <div class="flex flex-col">
              <div
                class="flex items-center justify-start flex-nowrap whitespace-nowrap w-full space-x-4"
              >
                <p class="flex-nowrap whitespace-nowrap w-1/2">
                  Satis,Iletisim
                </p>
                <p class="flex-nowrap whitespace-nowrap w-1/2">: 444 32 76</p>
              </div>
              <div
                class="flex items-center justify-start flex-nowrap whitespace-nowrap w-full space-x-4"
              >
                <p class="flex-nowrap whitespace-nowrap w-1/2">
                  Sunucu & Destek
                </p>
                <p class="flex-nowrap whitespace-nowrap w-1/2">
                  : 0850 885 20 90
                </p>
              </div>

              <div
                class="flex items-center justify-start flex-nowrap whitespace-nowrap w-full space-x-4"
              >
                <p class="flex-nowrap whitespace-nowrap w-1/2">
                  Musteri Hizmetleri
                </p>
                <p class="flex-nowrap whitespace-nowrap w-1/2">
                  : 0216 59901 67
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-col space-y-4 px-8">
            <h6 class="font-semibold">E-Posta</h6>
            <div class="flex flex-col">
              <p>info@armadigital.com.tr</p>
              <p>satis@armadigital.com.tr</p>
              <p>lorem@armadigital.com.tr</p>
            </div>
          </div>
        </div>
        <div
          class="flex w-full flex-col sm:flex-row space-x-0 space-y-2 sm:space-y-0 sm:space-x-8 h-96 mb-12"
        >
          <div class="w-full sm:w-1/3 bg-slate-800">
            <div class="flex flex-col justify-between text-white h-full p-12">
              <div class="flex flex-col">
                <p class="text-2xl">Simdi baslayin.</p>
                <p class="text-2xl">360ile markanizi</p>
                <p class="text-2xl">Buyutun!</p>
              </div>
              <h1>TEKLIF FORMUNA GIDIN</h1>
            </div>
          </div>
          <div class="w-full sm:w-2/3 bg-gray-200">
            <form
              action="https://api.web3forms.com/submit"
              class="p-8 flex flex-col"
            >
              <input
                type="hidden"
                name="access_key"
                value="YOUR_ACCESS_KEY_HERE"
              />
              <div class="grid gap-6 sm:grid-cols-2">
                <div class="relative z-0">
                  <input
                    type="text"
                    name="name"
                    class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                    >Ad Soyad</label
                  >
                </div>
                <div class="relative z-0">
                  <input
                    type="text"
                    name="subject"
                    class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                    >Konu</label
                  >
                </div>
                <div class="relative z-0">
                  <input
                    type="email"
                    name="mail"
                    class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                    >E-posta</label
                  >
                </div>
                <div class="relative z-0">
                  <input
                    type="tel"
                    name="tel"
                    class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                    >Telefon</label
                  >
                </div>
                <div class="relative z-0 col-span-2">
                  <textarea
                    name="message"
                    rows="5"
                    class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  ></textarea>
                  <label
                    class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                    >Your message</label
                  >
                </div>
              </div>
              <button
                type="submit"
                class="mt-5 rounded-full bg-black px-14 py-4 text-white self-end"
              >
                GONDER
              </button>
            </form>
          </div>
        </div>
        <div class="w-full h-96 mb-12">
          <img
            src="@/assets/images/map-img.png"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>
        <FooterContact />
      </section>
    </template>
  </NuxtLayout>
</template>

<script setup></script>

<style scoped></style>
<script>
import FooterContact from "../components/FooterContact";
export default {
  components: { FooterContact },
};
</script>
