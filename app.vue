<template>
  <main class="container">
    <div class="wrapper-anim">
      <div ref="wrapUp" class="up">
        <img alt="" src="~/assets/images/up-hand.png">

      </div>

      <div ref="wrapTiger" class="tiger">
        <img alt="" src="~/assets/images/tiger.png">
      </div>
      <div ref="wrapDown" class="down">
        <img alt="" src="~/assets/images/down-hand.png">
      </div>
      <div ref="wrapPlus" class="plus">
        <img alt="" class="plus1" src="~/assets/images/plus.png">
        <img alt="" class="plus1" src="~/assets/images/plus.png">
        <img alt="" class="plus1" src="~/assets/images/plus.png">
        <img alt="" class="plus1" src="~/assets/images/plus.png">

      </div>
    </div>
    <div class="container-left">
      <div class="box-top box">
        <img alt="armadigital-logo" class="logo" src="~/assets/images/logo.svg">
      </div>
      <div class="box-bottom">
        <div class="box">
          <img alt="" class="icon" src="~/assets/images/rocket.png">
        </div>
        <div class="box">
          <img alt="" class="icon" src="~/assets/images/heart.png">
        </div>
        <div class="box">
          <img alt="" class="icon" src="~/assets/images/email.png">
        </div>

      </div>
    </div>
    <div class="container-middle">
      <div class="container-middle-start">
        <h1>MARKA</h1>
      </div>

      <div class="container-middle-center block-effect" style="--td: 1.2s">
        <h1 class="title block-reveal" style="--bc: #438CDD; --d: .1s">sıra dışı</h1>
        <h3 class="subtitle block-reveal " style="--bc: #D91F96; --d: .5s">digital yonetim</h3>
        <p class="text block-reveal" style="--bc: #438CDD; --d: 1s">İşletmenizi <strong>Google ve sosyal
          medyada</strong> en kısa sürede
          en iyi noktada ulaştırmanız için 360 derece digital paket,<strong> Arma Digital'de</strong></p>
      </div>
      <div class="container-middle-end">
        <div class="left">
          <h4 class="text">#360° <strong>DIGITAL YONETIM</strong></h4>
        </div>
        <div class="center">
          <button class="btn btn-gradient">
            <img alt="" src="~/assets/images/search.png">
            <span class="text">Keşfedin</span>
            <img alt="" src="~/assets/images/forward.png">
          </button>
          <button class="btn btn-transparent">
            <img alt="" src="~/assets/images/call.png">
            <span class="text">Bilgi Alın</span>
            <img alt="" src="~/assets/images/forward.png">
          </button>
        </div>
        <NuxtLink class="right">
          <p class="text">Bir web sitesi ile basla</p>
          <img alt="" src="~/assets/images/forward.png">
        </NuxtLink>
      </div>

    </div>
    <div class="container-right">
      <div class="box-top box" @click="openDrawer" @mouseleave="isHover=false" @mouseover.prevent="isHover=true">
        <div class="toggle-menu">
          <Transition name="hover-top"><span v-if="isHover===false"></span></Transition>
          <button></button>
          <Transition name="hover-down"><span v-if="isHover===false"></span></Transition>

        </div>
      </div>
      <div class="box-bottom">
        <div class="box">
          <img alt="" class="icon" src="~/assets/images/next.png">
        </div>
        <div class="box">
          <img alt="" class="icon" src="~/assets/images/prev.png">
        </div>

      </div>

    </div>

    <div :class="{'top':isToggleOpen}" class="canvas-menu d-flex flex-row">
      <Transition name="canvas-left">
        <div v-if="isToggleOpen" class="left cur-close d-none d-sm-block">
          <img alt="armadigital-logo" class="left-logo" src="~/assets/images/logo.svg">
          <div class="left-right">
            <h1 class="slogan1">digital</h1>
            <div class="slogan2">
              <h6 class="arma">arma</h6>
              <h1 class="number">360</h1>
            </div>
          </div>

        </div>
      </Transition>
      <Transition name="canvas-right">
        <div v-if="isToggleOpen" class="right text-center text-md-left">
          <div class="menu-close">
            <button @click="openDrawer"></button>
          </div>

          <nav class="canvas-nav transition text-right h-100 float-right align-items-center d-flex">
            <ul class="navbar-nav flex-column">
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="nofollow" target="_self" to="/neler-yapariz">HIZMETLERIMIZ</NuxtLink>
                <ul class="dropdown-menu">
                  <li class="dropdown-item">
                    <NuxtLink class="dropdown-item-link">360° Digital Yonetim</NuxtLink>
                  </li>
                  <li class="dropdown-item">
                    <NuxtLink class="dropdown-item-link">360° Seo Yonetimi</NuxtLink>
                  </li>
                  <li class="dropdown-item">
                    <NuxtLink class="dropdown-item-link">360° Google Yonetimi</NuxtLink>
                  </li>
                  <li class="dropdown-item">
                    <NuxtLink class="dropdown-item-link">360° Sosyal Medya Yonetimi</NuxtLink>
                  </li>
                  <li class="dropdown-item">
                    <NuxtLink class="dropdown-item-link">360° Icerik Yonetimi</NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="nofollow" target="_self" to="/biz-kimiz">BİZ KİMİZ</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="nofollow" target="_self" to="/neler-yaptik"> BIZE ULASIN</NuxtLink>
              </li>
            </ul>

          </nav>
          <div class="socials transition">
            <NuxtLink class="social-item" rel="nofollow" target="_blank" to="https://instagram.com/armadigitalagency/"><span
                class="transition icon icon-instagram">
              <svg height="20" version="1.2" viewBox="0 0 10 10" width="20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="cp1" clipPathUnits="userSpaceOnUse">
                    <path d="m-838-487h960v540h-960z"/>
                  </clipPath>
                </defs>

                <g clip-path="url(#cp1)">
                  <path class="a"
                        d="m9.4 3.3v3.7c0 1.4-1.1 2.6-2.5 2.6h-3.8c-1.4 0-2.5-1.2-2.5-2.6v-3.7c0-1.4 1.1-2.5 2.5-2.5h3.8c1.4 0 2.5 1.1 2.5 2.5zm-0.8 0c0-1-0.8-1.7-1.7-1.7h-3.8c-0.9 0-1.7 0.7-1.7 1.7v3.8c0 0.9 0.8 1.7 1.7 1.7h3.8c0.9 0 1.7-0.8 1.7-1.7z"
                        fill="#fff" fill-rule="evenodd"/>
                  <path class="a"
                        d="m7.3 5.2c0 1.2-1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3 0-1.3 1-2.3 2.3-2.3 1.3 0 2.3 1 2.3 2.3zm-0.8 0c0-0.8-0.7-1.5-1.5-1.5-0.8 0-1.5 0.7-1.5 1.5 0 0.8 0.7 1.5 1.5 1.5 0.8 0 1.5-0.7 1.5-1.5z"
                        fill="#fff" fill-rule="evenodd"/>
                  <path class="a"
                        d="m7.4 3.3c-0.3 0-0.6-0.2-0.6-0.5 0-0.3 0.3-0.5 0.6-0.5 0.3 0 0.5 0.2 0.5 0.5 0 0.3-0.2 0.5-0.5 0.5z"
                        fill="#fff"/>
                </g>
              </svg>
              </span>
            </NuxtLink>
            <NuxtLink  class="social-item" data-original-title="Facebook" data-placement="bottom" data-toggle="tooltip"
                      rel="nofollow" target="_blank" to="https://www.facebook.com/armadigital/">
              <span
                  class="transition icon icon-facebook">
              <svg height="24" version="1.2" viewBox="0 0 8 12" width="16" xmlns="http://www.w3.org/2000/svg"><defs><clipPath
                  id="cp1" clipPathUnits="userSpaceOnUse"><path d="m-866-486h960v540h-960z"/></clipPath></defs><g
                  clip-path="url(#cp1)">
                <path class="a"
                      d="m6.1 4.4l-0.2 1.6h-1.2v4.5h-1.9v-4.5h-0.9v-1.6h0.9v-1.1c0-0.7 0.3-1.9 1.9-1.9h1.4v1.6h-1c-0.2 0-0.4 0.1-0.4 0.4v1z"
                      fill="#fff"/></g></svg>
            </span></NuxtLink>

            <NuxtLink  class="social-item" data-original-title="Linkedin" data-placement="bottom" data-toggle="tooltip"
                      rel="nofollow" target="_blank" to="https://www.linkedin.com/company/armadigital/"><span
                class="transition icon icon-linkedin">
            <svg height="18" version="1.2" viewBox="0 0 10 9" width="20" xmlns="http://www.w3.org/2000/svg"><defs><clipPath
                id="cp1" clipPathUnits="userSpaceOnUse"><path d="m-891-488h960v540h-960z"/></clipPath></defs><g
                clip-path="url(#cp1)"><path class="a" d="m0.7 2.7h1.7v5.5h-1.7z" fill="#fff"/><path class="a"
                                                                                                    d="m9.1 5.1v3.1h-1.9v-2.8c0-0.8-0.3-1.3-0.9-1.3-0.5 0-0.8 0.4-1 0.7 0 0.1 0 0.3 0 0.4v3h-1.9c0 0 0-5 0-5.5h1.9v0.9c0.1-0.4 0.7-0.9 1.7-0.9 1.2 0 2.1 0.8 2.1 2.4z"
                                                                                                    fill="#fff"/><path
                class="a" d="m2.5 1.1c0 0.5-0.4 1-1 1-0.6 0-1-0.5-1-1 0-0.5 0.4-0.9 1-0.9 0.6 0 1 0.4 1 0.9z"
                fill="#fff"/></g></svg>
            </span>
            </NuxtLink>

            <NuxtLink  class="social-item" data-original-title="Linkedin" data-placement="bottom" data-toggle="tooltip"
                      rel="nofollow" target="_blank" to="https://www.linkedin.com/company/armadigital/"><span
                class="transition icon icon-linkedin">
            <svg height="18" version="1.2" viewBox="0 0 10 9" width="20" xmlns="http://www.w3.org/2000/svg"><defs><clipPath
                id="cp1" clipPathUnits="userSpaceOnUse"><path d="m-891-488h960v540h-960z"/></clipPath></defs><g
                clip-path="url(#cp1)"><path class="a" d="m0.7 2.7h1.7v5.5h-1.7z" fill="#fff"/><path class="a"
                                                                                                    d="m9.1 5.1v3.1h-1.9v-2.8c0-0.8-0.3-1.3-0.9-1.3-0.5 0-0.8 0.4-1 0.7 0 0.1 0 0.3 0 0.4v3h-1.9c0 0 0-5 0-5.5h1.9v0.9c0.1-0.4 0.7-0.9 1.7-0.9 1.2 0 2.1 0.8 2.1 2.4z"
                                                                                                    fill="#fff"/><path
                class="a" d="m2.5 1.1c0 0.5-0.4 1-1 1-0.6 0-1-0.5-1-1 0-0.5 0.4-0.9 1-0.9 0.6 0 1 0.4 1 0.9z"
                fill="#fff"/></g></svg>
            </span>
            </NuxtLink>



          </div>
        </div>
      </Transition>
    </div>
  </main>

</template>
<script setup>
import anime from 'animejs';


const wrapUp = ref(null)
const wrapTiger = ref(null)
const wrapDown = ref(null)


const isToggleOpen = useState('isToggleOpen', () => false)
const isHover = useState('isHover', () => false)
const openDrawer = () => {
  isToggleOpen.value = !isToggleOpen.value
}

onMounted(() => {

  anime({
    targets: wrapDown.value,
    duration: 1500,
    translateX: ['100%', 0],
    easing: 'easeInOutQuart',
  })

  anime({
    targets: wrapUp.value,
    duration: 1000,
    delay: 100,
    translateX: ['100%', 0],
    rotateZ: [0, '-45deg', 0],
    easing: 'easeInQuad',
  })
  anime({
    targets: wrapTiger.value,
    duration: 1000,
    delay: 1000,
    translateX: ["100%", 0],
    translateY: ["100%", 0],
    opacity: [0, 1],
    scale: [0, 1],
    rotateY: ['-180deg'],
    easing: 'easeInQuart'

  })
  anime({
    targets: '.plus1',
    duration: 5000,
    translateY: ["150%", 0],
    opacity: [0, 1],
    scale: [2.5, 1],
    delay: anime.stagger(200, {start: 1000}),

  })
})


</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.block-reveal {
  --t: calc(var(--td) + var(--d));

  color: transparent;
  padding: 4px;

  position: relative;
  overflow: hidden;

  animation: revealBlock 0s var(--t) forwards;
}

.block-reveal::after {
  content: '';

  width: 0;
  height: 100%;
  padding-bottom: 4px;
  position: absolute;
  top: 0;
  left: 0;
  background: var(--bc);
  opacity: 0.5;
  filter: blur(5px);
  animation: revealingIn var(--td) var(--d) forwards, revealingOut var(--td) var(--t) forwards;
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