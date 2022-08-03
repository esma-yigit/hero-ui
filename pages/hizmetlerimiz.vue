<template>
  <NuxtLayout name="main-pages">
    <template #page-content>
      <section class="page-container">
        <div class="grid-service">
          <div class="grid-service-area">
            <div class="service-card">
              <NuxtLink to="/dijital-yonetim">
                <SvgDigitalYonetim class="card-center" />
              </NuxtLink>
            </div>
            <p class="service-title">360 Digital Yonetim</p>
          </div>
          <div class="grid-service-area">
            <div class="service-card">
              <NuxtLink to="/seo-yonetimi">
                <SvgSeoYonetimi class="card-center" />
              </NuxtLink>
            </div>
            <p class="service-title">360° Seo Yonetimi</p>
          </div>

          <div class="grid-service-area">
            <div class="service-card">
              <NuxtLink to="/google-yonetimi">
                <SvgGoogleYonetimi class="card-center" />
              </NuxtLink>
            </div>
            <p class="service-title">360° Google Yonetimi</p>
          </div>

          <div class="grid-service-area">
            <div class="service-card">
              <NuxtLink to="/sosyal-medya">
                <SvgSosyalMedya class="card-center" />
              </NuxtLink>
            </div>
            <p class="service-title">360° Sosyal Medya Yonetimi</p>
          </div>

          <div class="grid-service-area">
            <div class="service-card">
              <NuxtLink to="/icerik-yonetimi">
                <SvgIcerikYonetimi class="card-center" />
              </NuxtLink>
            </div>
            <p class="service-title">360° Icerik Yonetimi</p>
          </div>

          <div class="grid-service-area">
            <div class="service-card">
              <NuxtLink to="/sunucu-yonetimi">
                <SvgDigitalYonetim class="card-center" />
              </NuxtLink>
            </div>
            <p class="service-title">360° Sunucu Yonetimi</p>
          </div>
        </div>
      </section>
      <FooterContact />
    </template>
  </NuxtLayout>
</template>

<script setup>
import FooterContact from "../components/FooterContact";
</script>

<style scoped></style>
