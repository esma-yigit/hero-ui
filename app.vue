<template>
  <main class="container">
    <div class="container-left">
      <div class="box-top box">
        <img src="./static/logo.png" alt="armadigital-logo" class="logo">
      </div>
        <div class="box-bottom">
          <div class="box">
            <img src="~/assets/images/rocket.png" alt="" class="icon">
          </div>
          <div class="box">
            <img src="~/assets/images/heart.png" alt="" class="icon">
          </div>
          <div class="box">
            <img src="~/assets/images/email.png" alt="" class="icon">
          </div>

      </div>
    </div>
    <div class="container-middle">
      <div class="wrapper-anim">
        <div class="wrapper-anim-tiger"><img src="~/assets/images/tiger.png" alt=""></div>
        <div class="wrapper-anim-down"><img src="~/assets/images/down-hand.png" alt=""></div>
        <div class="wrapper-anim-up"><img src="~/assets/images/up-hand.png" alt=""></div>
      </div>
      <div class="container-middle-start">
        <h1>MARKA</h1>

      </div>
      
      <div class="container-middle-center block-effect" style="--td: 1.2s">
      <h1 class="title block-reveal" style="--bc: #4040bf; --d: .1s">sıra dışı</h1>
        <h3 class="subtitle block-reveal" style="--bc: #bf4060; --d: .5s">digital yonetim</h3>
        <p class="text block-reveal" style="--bc: #bf4060; --d: 1s">İşletmenizi Google ve sosyal medyada en kısa sürede en iyi noktada ulaştırmanız için 360 derece digital paket, Arma Digital'de</p>
      </div>
      <div class="container-middle-end">
        <div class="left">
          <h4 class="text">#360° DIGITAL YONETIM</h4>
        </div>
        <div class="center">
          <button class="btn btn-gradient">
            <img src="~/assets/images/search.png" alt="">
            <span class="text">Keşfedin</span>
            <img src="~/assets/images/forward.png" alt="">
          </button>
          <button class="btn btn-transparent">
            <img src="~/assets/images/call.png" alt="">
            <span class="text">Bilgi Alın</span>
            <img src="~/assets/images/forward.png" alt="">
          </button>
        </div>
        <div class="right">
          <p class="text">Bir web sitesi ile basla</p>
          <img src="~/assets/images/forward.png" alt="">
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
          <img src="~/assets/images/next.png" alt="" class="icon">
        </div>
        <div class="box">
          <img src="~/assets/images/prev.png" alt="" class="icon">
        </div>

      </div>

    </div>
  </main>
</template>
<script setup>
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
    transform: translateX(101%);
  }

}
</style>