<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  details: Object,
  isPDF:Boolean
})

const showAll = ref(false)
const maxItems = 1
const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth < 768 // read more check
})

const visibleDetails = computed(() => {
  if (props.isPDF || !isMobile.value) return props.details.details
  return showAll.value ? props.details.details : props.details.details.slice(0, maxItems)
})


const IconMapPin = defineComponent({
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>`
});

</script>



<template>
  <div :class="isPDF ? 'relative bg-gray-900 pdf-height bg-cover bg-center bg-no-repeat text-white' : 'relative bg-gray-900 min-h-screen bg-cover bg-center bg-no-repeat text-white'"
    :style="{ backgroundImage: `url(${details?.background})` }">
    <!-- Overlay (optional for darkening) -->
    <div class="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

    <!-- Main Content -->
    <div :class="isPDF
      ? 'relative z-10 max-w-6xl mx-5 px-6 py-16'
      : 'relative z-10 max-w-6xl mx-5 lg:px-6 py-16'">

      <!-- Header -->
      <div class="flex items-start mb-6">
        <div class="bg-white text-gray-800 rounded-lg p-3 flex items-center justify-center w-16 h-16 mr-4 shadow-md">
          <span class="text-4xl font-bold">{{ details?.id }}</span>
        </div>
        <div>
          <h1 :class="isPDF
            ? 'text-[48px] font-figtree font-bold'
            : 'text-[22px] md:text-5xl lg:text-[48px] font-figtree font-bold'">
            {{ details?.name }}
          </h1>

          <div class="flex items-center mt-1 text-gray-300">
            <IconMapPin class="w-5 h-5 mr-1" />
            <span :class="isPDF
              ? 'font-figtree font-regular text-[32px]'
              : 'font-figtree font-regular lg:text-[32px]'">
              {{ details?.location }}
            </span>

          </div>
        </div>
      </div>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-8">
        <div
          class="bg-[#2E2E2E] font-figtree font-regular bg-opacity-50 px-4 py-2 rounded-full flex items-center text-sm">

          <span>{{ details?.completion_date }}</span>
        </div>
        <div
          class="bg-[#2E2E2E] font-figtree font-regular bg-opacity-50 px-4 py-2 rounded-full flex items-center text-sm">

          <span>{{ details?.price_starting }}0</span>
        </div>
        <div
          class="bg-[#2E2E2E] font-figtree font-regular bg-opacity-50 px-4 py-2 rounded-full flex items-center text-sm">

          <span>{{ details?.furnishing }}</span>
        </div>
        <div
          class="bg-[#2E2E2E] font-figtree font-regular bg-opacity-50 px-4 py-2 rounded-full flex items-center text-sm">

          <span>{{ details?.payment }}</span>
        </div>
      </div>

      <!-- Description -->
      <div class="space-y-4 text-gray-200  lg:w-[60vw]">
        <p v-for="(item, index) in visibleDetails" :key="index" class="font-figtree font-regular">
          {{ item }}
        </p>

        <!-- Show button only on mobile and if items are more than max -->
        <button v-if="!isPDF && isMobile && props.details.details.length > maxItems" @click="showAll = !showAll"
          class="text-white underline mt-2">
          {{ showAll ? 'Show Less' : 'Read More' }}
        </button>

      </div>
    </div>
  </div>
</template>
