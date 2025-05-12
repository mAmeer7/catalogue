<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
    dynamicColor: {
        type: String
    },
    builder: Object
})


const showAll = ref(false)
const maxItems = 1
const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth < 768 // read more check
})

const visibleDetails = computed(() => {
  if (!isMobile.value) return props.builder.details
  return showAll.value ? props.builder.details : props.builder.details.slice(0, maxItems)
})
</script>



<template>
    <div class="relative min-h-screen   bg-gray-900 bg-cover bg-center bg-no-repeat text-white"
        :style="{ backgroundImage: `url(${builder?.backgroundImage})` }">
        <!-- Overlay (optional for darkening) -->
        <div class="absolute inset-0 opacity-70 z-1" :style="{
            background: `linear-gradient(to bottom right, black, ${dynamicColor})`
        }"></div>

        <!-- Main Content -->
        <div class="relative z-10 max-w-6xl mx-5 lg:px-6 py-10 lg:py-16">
            <!-- Header -->
            <div class="flex items-start mb-[80px]">
                <div>
                    <h1 class="text-[22px] md:text-[48px] font-fitgree font-bold">{{builder?.name}}</h1>
                </div>
            </div>



            <!-- Description -->
            <div class="space-y-4 text-gray-200 lg:w-[60vw]">
                <p
      v-for="(item, index) in visibleDetails"
      :key="index"
      class="font-figtree font-regular"
    >
      {{ item }}
    </p>

    <!-- Show button only on mobile and if items are more than max -->
    <button
      v-if="isMobile && props.builder.details.length > maxItems"
      @click="showAll = !showAll"
      class="text-white underline mt-2"
    >
      {{ showAll ? 'Show Less' : 'Read More' }}
    </button>
              
        
            </div>
        </div>
    </div>
</template>
