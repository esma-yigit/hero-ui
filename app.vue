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
        <img alt="" src="~/assets/images/plus.png" class="plus1">
        <img alt="" src="~/assets/images/plus.png" class="plus1">
        <img alt="" src="~/assets/images/plus.png" class="plus1">
        <img alt="" src="~/assets/images/plus.png" class="plus1">

      </div>
    </div>
    <div class="container-left">
      <div class="box-top box">
        <img alt="armadigital-logo" class="logo" src="./static/logo.png">
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
        <p class="text block-reveal" style="--bc: #438CDD; --d: 1s">İşletmenizi Google ve sosyal medyada en kısa sürede
          en iyi noktada ulaştırmanız için 360 derece digital paket, Arma Digital'de</p>
      </div>
      <div class="container-middle-end">
        <div class="left">
          <h4 class="text">#360° DIGITAL YONETIM</h4>
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
        <div class="right">
          <p class="text">Bir web sitesi ile basla</p>
          <img alt="" src="~/assets/images/forward.png">
        </div>
      </div>

    </div>
    <div class="container-right">
      <div class="box-top box">
        <div class="toggle-menu">
          <span></span>
          <span></span>
          <span></span>

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
  </main>
</template>
<script setup>
import anime from 'animejs';


const wrapUp = ref(null)
const wrapTiger = ref(null)
const wrapDown = ref(null)


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
    scale: [ 0,1],
    rotateY: [ '-180deg'],
    easing: 'easeInQuart'

  })
  anime({
    targets:'.plus1',
    duration: 5000,
    translateY: ["150%", 0],
    opacity: [0, 1],
    scale: [ 2.5,1],
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
</style>