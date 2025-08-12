<script setup>
import Testimonial from "~/components/Testimonial.vue";
import Faq from "~/components/Faq.vue";
import HeroPage from "~/components/HeroPage.vue";
import LearningApproach from "~/components/LearningApproach.vue";
</script>

<template>
  <NuxtLayout name="layout">
    <div class="flex flex-col">
      <HeroPage />
    </div>
    <div class="min-h-screen flex flex-col container-lg mx-auto">
      <LearningApproach />
    </div>
    <div class="py-10 flex flex-col container-lg mx-auto">
      <Testimonial />
    </div>
    <div class="py-10 flex flex-col container-lg mx-auto">
      <Faq />
    </div>
  </NuxtLayout>
</template>
