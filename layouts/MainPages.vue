<template>
  <main>
    <NuxtLayout name="mobile" :is-hover="isHover">
      <template #toggle-menu>
        <div
          class="toggle-menu"
          @click="openDrawer"
          @mouseleave="isHover = false"
          @mouseover.prevent="isHover = true"
        >
          <Transition name="hover-top"
            ><span v-if="isHover === false"></span
          ></Transition>
          <button></button>
          <Transition name="hover-down"
            ><span v-if="isHover === false"></span
          ></Transition>
        </div>
      </template>
    </NuxtLayout>
    <div v-if="isToggleOpen" class="canvas-menu d-flex flex-row">
      <Transition name="canvas-left">
        <div v-if="isToggleOpen" class="left cur-close d-none d-sm-block">
          <img
            alt="armadigital-logo"
            class="left-logo"
            src="@/assets/images/center-logo.png"
          />
          <div class="left-bottom-text">
            <span class="typed">Arma Digital #360° Ajansı</span>
          </div>
        </div>
      </Transition>
      <Transition name="canvas-right">
        <div v-if="isToggleOpen" class="right text-center text-md-left">
          <div class="menu-close">
            <button @click="openDrawer"></button>
          </div>
          <nav
            class="canvas-nav transition text-right h-100 float-right align-items-center d-flex"
          >
            <div class="nav-wrap">
              <ul class="navbar-nav flex-column">
                <li class="nav-item">
                  <NuxtLink
                    class="nav-link"
                    rel="nofollow"
                    target="_self"
                    to="/hizmetlerimiz"
                    no-rel
                    >HİZMETLERİMİZ
                  </NuxtLink>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item">
                      <NuxtLink
                        class="dropdown-item-link"
                        to="/hizmetlerimiz/digital-yonetim"
                      >
                        360° Digital Yonetim
                      </NuxtLink>
                    </li>
                    <li class="dropdown-item">
                      <NuxtLink
                        class="dropdown-item-link"
                        to="/hizmetlerimiz/digital-yonetim"
                        >360° Seo Yonetimi
                      </NuxtLink>
                    </li>
                    <li class="dropdown-item">
                      <NuxtLink
                        class="dropdown-item-link"
                        to="/hizmetlerimiz/digital-yonetim"
                        >360° Google Yonetimi
                      </NuxtLink>
                    </li>
                    <li class="dropdown-item">
                      <NuxtLink
                        class="dropdown-item-link"
                        to="/hizmetlerimiz/digital-yonetim"
                        >360° Sosyal Medya Yonetimi
                      </NuxtLink>
                    </li>
                    <li class="dropdown-item">
                      <NuxtLink
                        class="dropdown-item-link"
                        to="/hizmetlerimiz/digital-yonetim"
                        >360° Icerik Yonetimi
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <NuxtLink
                    class="nav-link"
                    rel="nofollow"
                    target="_self"
                    to="/biz-kimiz"
                    >BİZ KİMİZ
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink
                    class="nav-link"
                    rel="nofollow"
                    target="_self"
                    to="/bize-ulasin"
                  >
                    BIZE ULASIN
                  </NuxtLink>
                </li>
              </ul>
              <div class="socials transition">
                <NuxtLink
                  class="social-item"
                  rel="nofollow"
                  target="_blank"
                  to="https://instagram.com/armadigitalagency/"
                  ><span class="transition icon icon-instagram">
                    <svg
                      height="20"
                      version="1.2"
                      viewBox="0 0 10 10"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <clipPath id="cp1" clipPathUnits="userSpaceOnUse">
                          <path d="m-838-487h960v540h-960z" />
                        </clipPath>
                      </defs>

                      <g clip-path="url(#cp1)">
                        <path
                          class="a"
                          d="m9.4 3.3v3.7c0 1.4-1.1 2.6-2.5 2.6h-3.8c-1.4 0-2.5-1.2-2.5-2.6v-3.7c0-1.4 1.1-2.5 2.5-2.5h3.8c1.4 0 2.5 1.1 2.5 2.5zm-0.8 0c0-1-0.8-1.7-1.7-1.7h-3.8c-0.9 0-1.7 0.7-1.7 1.7v3.8c0 0.9 0.8 1.7 1.7 1.7h3.8c0.9 0 1.7-0.8 1.7-1.7z"
                          fill="#fff"
                          fill-rule="evenodd"
                        />
                        <path
                          class="a"
                          d="m7.3 5.2c0 1.2-1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3 0-1.3 1-2.3 2.3-2.3 1.3 0 2.3 1 2.3 2.3zm-0.8 0c0-0.8-0.7-1.5-1.5-1.5-0.8 0-1.5 0.7-1.5 1.5 0 0.8 0.7 1.5 1.5 1.5 0.8 0 1.5-0.7 1.5-1.5z"
                          fill="#fff"
                          fill-rule="evenodd"
                        />
                        <path
                          class="a"
                          d="m7.4 3.3c-0.3 0-0.6-0.2-0.6-0.5 0-0.3 0.3-0.5 0.6-0.5 0.3 0 0.5 0.2 0.5 0.5 0 0.3-0.2 0.5-0.5 0.5z"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                  </span>
                </NuxtLink>
                <NuxtLink
                  class="social-item"
                  data-original-title="Facebook"
                  data-placement="bottom"
                  data-toggle="tooltip"
                  rel="nofollow"
                  target="_blank"
                  to="https://www.facebook.com/armadigital/"
                >
                  <span class="transition icon icon-facebook">
                    <svg
                      height="24"
                      version="1.2"
                      viewBox="0 0 8 12"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <clipPath id="cp1" clipPathUnits="userSpaceOnUse">
                          <path d="m-866-486h960v540h-960z" />
                        </clipPath>
                      </defs>
                      <g clip-path="url(#cp1)">
                        <path
                          class="a"
                          d="m6.1 4.4l-0.2 1.6h-1.2v4.5h-1.9v-4.5h-0.9v-1.6h0.9v-1.1c0-0.7 0.3-1.9 1.9-1.9h1.4v1.6h-1c-0.2 0-0.4 0.1-0.4 0.4v1z"
                          fill="#fff"
                        />
                      </g>
                    </svg> </span
                ></NuxtLink>

                <NuxtLink
                  class="social-item"
                  data-original-title="Linkedin"
                  data-placement="bottom"
                  data-toggle="tooltip"
                  rel="nofollow"
                  target="_blank"
                  to="https://www.linkedin.com/company/armadigital/"
                  ><span class="transition icon icon-linkedin">
                    <svg
                      height="18"
                      version="1.2"
                      viewBox="0 0 10 9"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <clipPath id="cp1" clipPathUnits="userSpaceOnUse">
                          <path d="m-891-488h960v540h-960z" />
                        </clipPath>
                      </defs>
                      <g clip-path="url(#cp1)">
                        <path
                          class="a"
                          d="m0.7 2.7h1.7v5.5h-1.7z"
                          fill="#fff"
                        />
                        <path
                          class="a"
                          d="m9.1 5.1v3.1h-1.9v-2.8c0-0.8-0.3-1.3-0.9-1.3-0.5 0-0.8 0.4-1 0.7 0 0.1 0 0.3 0 0.4v3h-1.9c0 0 0-5 0-5.5h1.9v0.9c0.1-0.4 0.7-0.9 1.7-0.9 1.2 0 2.1 0.8 2.1 2.4z"
                          fill="#fff"
                        />
                        <path
                          class="a"
                          d="m2.5 1.1c0 0.5-0.4 1-1 1-0.6 0-1-0.5-1-1 0-0.5 0.4-0.9 1-0.9 0.6 0 1 0.4 1 0.9z"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                  </span>
                </NuxtLink>

                <NuxtLink
                  class="social-item"
                  data-original-title="Linkedin"
                  data-placement="bottom"
                  data-toggle="tooltip"
                  rel="nofollow"
                  target="_blank"
                  to="https://www.linkedin.com/company/armadigital/"
                  ><span class="transition icon icon-linkedin">
                    <svg
                      height="18"
                      version="1.2"
                      viewBox="0 0 10 9"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <clipPath id="cp1" clipPathUnits="userSpaceOnUse">
                          <path d="m-891-488h960v540h-960z" />
                        </clipPath>
                      </defs>
                      <g clip-path="url(#cp1)">
                        <path
                          class="a"
                          d="m0.7 2.7h1.7v5.5h-1.7z"
                          fill="#fff"
                        />
                        <path
                          class="a"
                          d="m9.1 5.1v3.1h-1.9v-2.8c0-0.8-0.3-1.3-0.9-1.3-0.5 0-0.8 0.4-1 0.7 0 0.1 0 0.3 0 0.4v3h-1.9c0 0 0-5 0-5.5h1.9v0.9c0.1-0.4 0.7-0.9 1.7-0.9 1.2 0 2.1 0.8 2.1 2.4z"
                          fill="#fff"
                        />
                        <path
                          class="a"
                          d="m2.5 1.1c0 0.5-0.4 1-1 1-0.6 0-1-0.5-1-1 0-0.5 0.4-0.9 1-0.9 0.6 0 1 0.4 1 0.9z"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                  </span>
                </NuxtLink>
              </div>
            </div>
          </nav>
        </div>
      </Transition>
    </div>
    <div class="hidden md:grid grid-cols-13 grid-rows-1">
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
        class="col-span-11 col-start-2 col-end-13 row-start-1 row-start2 px-12 border-bottom"
      >
        <div
          class="flex items-center justify-between row-start-1 row-end-2 w-4/5 h-full mx-auto"
        >
          <div class="flex items-center cursor-pointer">
            <img class="invert w-1/6" src="@/assets/images/prev.png" alt="" />
            <NuxtLink to="/"> Ana Sayfa</NuxtLink>
          </div>
          <div class="cursor-pointer">
            <NuxtLink to="/biz-kimiz">Biz Kimiz</NuxtLink>
          </div>
          <div class="flex cursor-pointer items-center justify-center">
            <NuxtLink to="/hizmetlerimiz">360 Hizmetler</NuxtLink>
            <img class="invert w-1/6" src="@/assets/images/next.png" alt="" />
          </div>
        </div>
      </div>

      <div
        class="col-span-1 col-start-13 col-end-14 row-start-1 row-end-2 flex justify-center items-center border-left border-bottom"
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
    <div class="hidden md:grid grid-cols-13">
      <div
        class="col-span-1 col-start-1 col-end-2 grid grid-rows-6 max-h-[845px]"
      >
        <div
          class="row-span-3 row-start-1 row-end-4 w-full h-full border-right border-bottom"
        ></div>
        <div
          class="row-span-1 row-start-4 p-14 row-end-5 col-span-1 col-start-1 col-end-2 border-right border-bottom"
        >
          <img
            alt=""
            class="invert w-full object-contain h-full"
            src="@/assets/images/icon-rocket.png"
          />
        </div>
        <div
          class="row-span-1 row-start-5 p-14 row-end-6 col-span-1 border-right border-bottom"
        >
          <img
            alt=""
            class="invert w-full object-contain h-full"
            src="@/assets/images/icon-hearth.png"
          />
        </div>
        <div
          class="row-span-1 row-start-6 p-14 row-end-7 col-span-1 border-right border-bottom"
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
          class="row-span-4 row-start-1 row-end-5 border-left border-bottom"
        ></div>
        <div
          class="row-span-1 row-start-5 p-14 row-end-6 col-span-1 border-left border-bottom"
        >
          <img
            alt=""
            class="invert w-full object-contain h-full"
            src="@/assets/images/next.png"
          />
        </div>
        <div
          class="row-span-1 row-start-6 p-14 row-end-7 col-span-1 border-left border-bottom"
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
import { onMounted } from "vue";
const isToggleOpen = useState("isToggleOpen", () => false);
const isHover = useState("isHover", () => false);
const openDrawer = () => {
  isToggleOpen.value = !isToggleOpen.value;
};
onMounted(() => {
  isToggleOpen.value = false;
});
</script>

<style scoped>
.canvas-left-enter-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  position: relative;
  z-index: 150;
}

.canvas-left-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.canvas-left-enter-from,
.canvas-left-leave-to {
  transform: translateX(-100%);
  z-index: -1;
  position: relative;
  opacity: 0;
}

.canvas-right-enter-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  position: relative;
  z-index: 150;
}

.canvas-right-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.canvas-right-enter-from,
.canvas-right-leave-to {
  transform: translateX(100%);
  z-index: -1;
  position: relative;
  opacity: 0;
}

.top {
  z-index: 100;
}

.hover-top-enter-active {
  transition: all 1s ease-in-out;
}

.hover-top-leave-active {
  transition: all 1s ease-in-out;
}

.hover-top-enter-from,
.hover-top-leave-to {
  transform: translateY(-100%);
}

.hover-down-enter-active {
  transition: all 1s ease-in-out;
}

.hover-down-leave-active {
  transition: all 1s ease-in-out;
}

.hover-down-enter-from,
.hover-down-leave-to {
  transform: translateY(100%);
}
</style>
