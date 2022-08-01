<template>
  <main class="container-hero">
    <div :class="{ top: isToggleOpen }" class="canvas-menu d-flex flex-row">
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
                    >HIZMETLERIMIZ
                  </NuxtLink>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item">
                      <NuxtLink class="dropdown-item-link"
                        >360° Digital Yonetim
                      </NuxtLink>
                    </li>
                    <li class="dropdown-item">
                      <NuxtLink class="dropdown-item-link"
                        >360° Seo Yonetimi
                      </NuxtLink>
                    </li>
                    <li class="dropdown-item">
                      <NuxtLink class="dropdown-item-link"
                        >360° Google Yonetimi
                      </NuxtLink>
                    </li>
                    <li class="dropdown-item">
                      <NuxtLink class="dropdown-item-link"
                        >360° Sosyal Medya Yonetimi
                      </NuxtLink>
                    </li>
                    <li class="dropdown-item">
                      <NuxtLink class="dropdown-item-link"
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
                    to="/neler-yaptik"
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

    <NuxtLayout name="mobile" :is-hover="isHover" />
    <div class="container-hero-left">
      <div class="box-top box">
        <img
          alt="armadigital-logo"
          class="logo"
          src="@/assets/images/logo.svg"
        />
      </div>
      <div class="box-bottom">
        <div class="box">
          <img alt="" class="icon" src="@/assets/images/icon-rocket.png" />
        </div>
        <div class="box">
          <img alt="" class="icon" src="@/assets/images/icon-hearth.png" />
        </div>
        <div class="box">
          <img alt="" class="icon" src="@/assets/images/icon-arrow-top.png" />
        </div>
      </div>
    </div>

    <swiper
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :modules="modules"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
    >
      <swiper-slide v-for="(slide, index) in sliders" :key="slide.id">
        <div class="container-hero-middle">
          <div class="container-hero-middle-start">
            <h1 style="margin: 0">{{ slide.header }}</h1>
          </div>
          <div class="wrapper-anim">
            <!--            <svg-->
            <!--              id="scene"-->
            <!--              xmlns="http://www.w3.org/2000/svg"-->
            <!--              xmlns:xlink="http://www.w3.org/1999/xlink"-->
            <!--              viewBox="0 0 311.67624 243.664"-->
            <!--              xml:space="preserve"-->
            <!--              style="-->
            <!--                background-color: #0b7ad1;-->
            <!--                border: 1px solid #fff;-->
            <!--                border-radius: 5px;-->
            <!--              "-->
            <!--            >-->
            <!--              <g class="group-element" id="tiger">-->
            <!--                <image-->
            <!--                  width="756"-->
            <!--                  height="662"-->
            <!--                  xlink:href="@/assets/images/tiger.png"-->
            <!--                  x="0"-->
            <!--                  y="0"-->
            <!--                  transform="rotateY(180deg)"-->
            <!--                  style="transform-origin: bottom left; opacity: 1"-->
            <!--                ></image>-->
            <!--              </g>-->
            <!--              <g class="group-element" id="up-hand">-->
            <!--                <image-->
            <!--                  width="441"-->
            <!--                  height="370"-->
            <!--                  xlink:href="@/assets/images/up-hand.png"-->
            <!--                  x="859"-->
            <!--                  y="189.89"-->
            <!--                  transform="matrix(1,0,0,1,0,0)"-->
            <!--                  style="transform-origin: 0px 0px; opacity: 1"-->
            <!--                ></image>-->
            <!--              </g>-->
            <!--              <g class="group-element" id="down-hand">-->
            <!--                <image-->
            <!--                  width="718"-->
            <!--                  height="407"-->
            <!--                  xlink:href="@/assets/images/down-hand.png"-->
            <!--                  x="859"-->
            <!--                  y="189.89"-->
            <!--                  transform="matrix(1,0,0,1,0,0)"-->
            <!--                  style="transform-origin: 0px 0px; opacity: 1"-->
            <!--                ></image>-->
            <!--              </g>-->
            <!--              <g class="group-element" id="plus1">-->
            <!--                <image-->
            <!--                  width="576"-->
            <!--                  height="433"-->
            <!--                  preserveAspectRatio="none"-->
            <!--                  xlink:href="@/assets/images/plus.png"-->
            <!--                  x="859"-->
            <!--                  y="189.89"-->
            <!--                  transform="matrix(0.1,0,0,0.1,0,0)"-->
            <!--                  style="transform-origin: 0px 0px; opacity: 1"-->
            <!--                ></image>-->
            <!--              </g>-->
            <!--              <g class="group-element" id="plus2">-->
            <!--                <image-->
            <!--                  width="576"-->
            <!--                  height="433"-->
            <!--                  xlink:href="@/assets/images/plus.png"-->
            <!--                  x="859"-->
            <!--                  y="189.89"-->
            <!--                  transform="matrix(0.2,0,0,0.2,0,0)"-->
            <!--                  style="transform-origin: 0px 0px; opacity: 1"-->
            <!--                ></image>-->
            <!--              </g>-->
            <!--              <g class="group-element" id="plus3">-->
            <!--                <image-->
            <!--                  width="576"-->
            <!--                  height="433"-->
            <!--                  xlink:href="@/assets/images/plus.png"-->
            <!--                  x="859"-->
            <!--                  y="189.89"-->
            <!--                  transform="matrix(0.05,0,0,0.05,0,0)"-->
            <!--                  style="transform-origin: 0px 0px; opacity: 1"-->
            <!--                ></image>-->
            <!--              </g>-->
            <!--              <g class="group-element" id="plus4">-->
            <!--                <image-->
            <!--                  width="576"-->
            <!--                  height="433"-->
            <!--                  xlink:href="@/assets/images/plus.png"-->
            <!--                  x="859"-->
            <!--                  y="189.89"-->
            <!--                  transform="matrix(0.08,0,0,0.08,0,0)"-->
            <!--                  style="transform-origin: 0px 0px; opacity: 1"-->
            <!--                ></image>-->
            <!--              </g>-->
            <!--            </svg>-->
            <SvgIcerikYonetimi />
          </div>

          <div
            class="container-hero-middle-center block-effect"
            style="--td: 1.2s"
          >
            <p class="title block-reveal" style="--bc: #438cdd; --d: 0.1s">
              {{ slide.text.first }}
            </p>
            <p class="subtitle block-reveal" style="--bc: #d91f96; --d: 0.5s">
              {{ slide.text.second }}
            </p>
            <p class="text block-reveal" style="--bc: #438cdd; --d: 1s">
              {{ slide.text.third }}
            </p>
          </div>
          <div class="container-hero-middle-end">
            <div class="left">
              <h4 class="text">#360° {{ slide.footer.text }}</h4>
            </div>
            <div class="center">
              <button class="btn btn-gradient">
                <img alt="" src="@/assets/images/icon-search.png" />
                <span class="text">Keşfedin</span>
                <img alt="" src="@/assets/images/forward.png" />
              </button>
              <button class="btn btn-transparent">
                <img alt="" src="@/assets/images/icon-call.png" />
                <span class="text">Bilgi Alın</span>
                <img alt="" src="@/assets/images/forward.png" />
              </button>
            </div>
            <NuxtLink class="right">
              <p class="text">Bir web sitesi ile basla</p>
              <img alt="" src="@/assets/images/forward.png" />
            </NuxtLink>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div class="container-hero-right">
      <div
        class="box-top box"
        @click="openDrawer"
        @mouseleave="isHover = false"
        @mouseover.prevent="isHover = true"
      >
        <div class="toggle-menu">
          <Transition name="hover-top"
            ><span v-if="isHover === false"></span
          ></Transition>
          <button></button>
          <Transition name="hover-down"
            ><span v-if="isHover === false"></span
          ></Transition>
        </div>
      </div>
      <div class="box-bottom swiper-button-next">
        <div class="box">
          <img alt="" class="icon" src="@/assets/images/next.png" />
        </div>
        <div class="box swiper-button-prev">
          <img alt="" class="icon" src="@/assets/images/prev.png" />
        </div>
      </div>
    </div>

    <!--Buraya canvas elementleri gelebilir-->
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
import sliders from "@/constants/slider";
// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const isToggleOpen = useState("isToggleOpen", () => false);
    const isHover = useState("isHover", () => false);
    const onSlideChange = () => {
      console.log("slide change");
    };
    const openDrawer = () => {
      isToggleOpen.value = !isToggleOpen.value;
    };

    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Autoplay],
      sliders,
      isHover,
      isToggleOpen,
      openDrawer,
    };
  },
};
</script>

<style scoped>
.block-reveal {
  --t: calc(var(--td) + var(--d));
  color: transparent;
  position: relative;
  overflow: hidden;

  animation: revealBlock 0s var(--t) forwards;
}

.block-reveal::after {
  content: "";

  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: var(--bc);
  opacity: 0.5;
  filter: blur(5px);
  animation: revealingIn var(--td) var(--d) forwards,
    revealingOut var(--td) var(--t) forwards;
}

/* animations */

@keyframes revealingIn {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}

@keyframes revealingOut {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(110%);
    filter: blur(30px);
  }
}

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
