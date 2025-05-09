<script setup>
// Import icons from Nuxt Icon if you have it installed
// If not, you'll need to create or import these icons

const props = defineProps({
  details: Object
})


const IconMapPin = defineComponent({
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>`
});

const IconCalendar = defineComponent({
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>`
});

const IconCreditCard = defineComponent({
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>`
});

const IconHome = defineComponent({
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>`
});

const IconPercentage = defineComponent({
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
  </svg>`
});
</script>







<template>
  <div class="relative bg-gray-900 min-h-[100vh] bg-cover bg-center bg-no-repeat text-white"
    :style="{ backgroundImage: 'url(/bg/bg4.jpg)' }">
    <!-- Overlay (optional for darkening) -->
    <div class="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

    <!-- Main Content -->
    <div class="relative z-10 max-w-6xl mx-5 lg:px-6  py-16">
      <!-- Header -->
      <div class="flex items-start mb-6">
        <div class="bg-white text-gray-800 rounded-lg p-3 flex items-center justify-center w-16 h-16 mr-4 shadow-md">
          <span class="text-4xl font-bold">{{ details?.id }}</span>
        </div>
        <div>
          <h1 class="text-4xl md:text-5xl font-figtree font-bold">{{ details?.name }}</h1>
          <div class="flex items-center mt-1 text-gray-300">
            <IconMapPin class="w-5 h-5 mr-1" />
            <span class="font-figtree font-regular text-[32px]">{{ details?.location }}</span>
          </div>
        </div>
      </div>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-8">
        <div
          class="bg-[#2E2E2E] font-figtree font-regular bg-opacity-50 px-4 py-2 rounded-full flex items-center text-sm">
          <IconCalendar class="w-4 h-4 mr-2" />
          <span>{{ details?.completion_date }}</span>
        </div>
        <div
          class="bg-[#2E2E2E] font-figtree font-regular bg-opacity-50 px-4 py-2 rounded-full flex items-center text-sm">
          <IconCreditCard class="w-4 h-4 mr-2" />
          <span>{{ details?.price_starting }}0</span>
        </div>
        <div
          class="bg-[#2E2E2E] font-figtree font-regular bg-opacity-50 px-4 py-2 rounded-full flex items-center text-sm">
          <IconHome class="w-4 h-4 mr-2" />
          <span>{{ details?.furnishing }}</span>
        </div>
        <div
          class="bg-[#2E2E2E] font-figtree font-regular bg-opacity-50 px-4 py-2 rounded-full flex items-center text-sm">
          <IconPercentage class="w-4 h-4 mr-2" />
          <span>{{ details?.payment }}</span>
        </div>
      </div>

      <!-- Description -->
      <div class="space-y-4 text-gray-200  lg:w-[60vw]">
        <p v-for="(item, index) in details?.details" :key="index" class="font-figtree font-regular">
          {{ item }}
        </p>

      </div>
    </div>
  </div>
</template>
