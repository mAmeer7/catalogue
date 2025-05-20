<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  dynamicColor: {
    type: String
  },
  builder: Object,
  isPDF: Boolean
})

const showAll = ref(false)
const maxItems = 1
const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth < 768
})

const visibleDetails = computed(() => {

  if (props.isPDF || !isMobile.value) return props.builder.details
  // Apply slicing only if it's not a PDF and it's mobile
  return showAll.value ? props.builder.details : props.builder.details.slice(0, maxItems)
})
</script>



<template>
  <div :class="isPDF
    ? 'relative bg-gray-900 h-[1018px] bg-cover bg-center bg-no-repeat text-white'
    : 'relative bg-gray-900 min-h-screen bg-cover bg-center bg-no-repeat text-white'"
    :style="{ backgroundImage: `url(${builder?.backgroundImage})` }">
    <!-- Overlay (optional for darkening) -->
    <div class="absolute inset-0 opacity-70 z-1" :style="{
            background: `linear-gradient(to bottom right, black, ${dynamicColor})`
        }"></div>

    <!-- Main Content -->
    <div
      :class="isPDF ? 'relative z-10 max-w-6xl mx-5 px-6 py-16' : 'relative z-10 max-w-6xl mx-5 lg:px-6 py-10 lg:py-16'">
      <!-- Header -->
      <div class="flex items-start mb-[80px]">
        <div>
          <h1
            :class="isPDF ? 'text-[48px] font-fitgree font-bold' : 'text-[22px] md:text-[48px] font-fitgree font-bold'">
            {{ builder?.name }}
          </h1>

        </div>
      </div>



      <!-- Description -->
      <div class="space-y-4 text-gray-200 lg:w-[60vw]">
        <p v-for="(item, index) in visibleDetails" :key="index" class="font-figtree font-regular">
          {{ item }}
        </p>

        <!-- Show button only on mobile and if items are more than max -->
        <button v-if="!isPDF && isMobile && props.builder.details.length > maxItems" @click="showAll = !showAll"
          class="text-white underline mt-2">
          {{ showAll ? 'Show Less' : 'Read More' }}
        </button>


      </div>
    </div>
  </div>
</template>
