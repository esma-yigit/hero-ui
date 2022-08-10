<template>
  <NuxtLayout name="main-pages">
    <template #page-content>
      <div>
        <section class="page-container">
          <div class="grid-service">
            <div class="grid-service-area aspect-square">
              <div
                class="service-card"
                style="
                  background-size: contain, cover;
                  background: url('/splash.png'),
                    linear-gradient(90deg, #2b2b2b 15%, #6b7181 80%);
                  background-repeat: no-repeat;
                  background-position: right bottom, center;
                "
              >
                <NuxtLink to="/dijital-yonetim">
                  <SvgDigitalYonetim class="card-center" />
                </NuxtLink>
              </div>
              <p class="service-title">360 Digital Yonetim</p>
            </div>
            <div class="grid-service-area aspect-square relative">
              <div class="service-card" style="background: #1d2f57">
                <div
                  class="absolute w-full h-full right-0 -bottom-20"
                  style="
                    background: url('/hero-seo-fog.png') no-repeat bottom right /
                      50%;
                  "
                ></div>
                <NuxtLink to="/seo-yonetimi">
                  <SvgSeoYonetimi class="card-center p-12" />
                </NuxtLink>
              </div>
              <p class="service-title">360° Seo Yonetimi</p>
            </div>

            <div class="grid-service-area aspect-square">
              <div
                class="service-card"
                style="
                  background-image: url('/hero-google-yonetimi-up-cloud.png');
                  background-position: left top;
                  background-repeat: no-repeat;
                  background-size: contain;
                "
              >
                <NuxtLink to="/google-yonetimi">
                  <SvgGoogleYonetimi class="card-center" />
                </NuxtLink>
              </div>
              <p class="service-title">360° Google Yonetimi</p>
            </div>

            <div class="grid-service-area aspect-square">
              <div
                class="service-card"
                style="
                  background: #542fa7 url('/sosyal-medya-dots.png') no-repeat
                    80% 100%;
                  background-size: contain;
                "
              >
                <NuxtLink to="/sosyal-medya">
                  <SvgSosyalMedya class="card-center" />
                </NuxtLink>
              </div>
              <p class="service-title">360° Sosyal Medya Yonetimi</p>
            </div>

            <div class="grid-service-area aspect-square">
              <div class="service-card" style="background: #494b5f">
                <NuxtLink to="/icerik-yonetimi">
                  <SvgIcerikYonetimi class="card-center" />
                </NuxtLink>
              </div>
              <p class="service-title">360° Icerik Yonetimi</p>
            </div>

            <div class="grid-service-area aspect-square">
              <div
                class="service-card"
                style="
                  background: linear-gradient(
                    180deg,
                    #0d61b0 -15%,
                    #333646 70%
                  );
                "
              >
                <NuxtLink to="/sunucu-yonetimi">
                  <SvgDigitalYonetim p-12 class="card-center" />
                </NuxtLink>
              </div>
              <p class="service-title">360° Sunucu Yonetimi</p>
            </div>
          </div>
        </section>
        <BadgeTeklifAlin class="mb-8" />
        <FooterContact />
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup>
import FooterContact from "../../components/FooterContact";
import BadgeTeklifAlin from "../../components/BadgeTeklifAlin";
</script>

<style scoped></style>
