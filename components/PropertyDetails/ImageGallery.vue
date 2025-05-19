<script setup>
import { computed, ref } from 'vue';
import Lightbox from '../common/Lightbox.vue';

// Define props
const props = defineProps({
  title: {
    type: String,
    default: 'Architecture'
  },
  dynamicColor: {
    type: String
  },
  images: {
    type: Array,
    required: true,
  },
  backgroundImage: {
    type: String,
    default: '/images/architecture-bg.jpg'
  },
  isPDF:Boolean
});

// Split images into chunks of 3
const imageChunks = computed(() => {
  const chunks = [];
  for (let i = 0; i < props.images.length; i += 3) {
    chunks.push(props.images.slice(i, i + 3));
  }
  return chunks;
});

// Lightbox refs and state
const lightboxRef = ref(null);

// Open lightbox with specific index
const showLightbox = (imageIndex) => {
  if (lightboxRef.value) {
    lightboxRef.value.open(imageIndex);
  }
};

// Calculate overall image index from chunk index and position
const getImageIndex = (chunkIndex, imagePosition) => {
  return chunkIndex * 3 + imagePosition;
};
</script>

<template>
  <div :class="isPDF
    ? 'relative bg-cover min-h-screen bg-center bg-no-repeat py-16 text-white'
    : 'relative bg-cover min-h-screen bg-center bg-no-repeat py-10 lg:py-16 text-white'"
    :style="{ backgroundImage: `url(${backgroundImage})` }">
    <!-- Overlay -->
    <div class="absolute inset-0 opacity-70 z-1" :style="{
        background: `linear-gradient(to bottom right, black, ${dynamicColor})`
      }">
    </div>

    <!-- Title section -->
    <div :class="[
      'relative z-10',
      isPDF ? 'px-12' : 'px-6 md:px-12'
    ]">
      <h2 :class="[
        'font-figtree font-bold text-white',
        isPDF
          ? ' text-[48px]'
          : 'text-[22px] md:text-5xl lg:text-[48px]'
      ]">
        {{ title }}
      </h2>
    </div>

    <!-- Create multiple gallery sections if needed -->
    <div v-for="(chunk, chunkIndex) in imageChunks" :key="chunkIndex" class="relative z-10">
      <!-- Layout for 1 image (full width) -->
      <div v-if="chunk.length === 1" :class="isPDF?'p-12':'p-6 md:p-12'">

        <div
          :class="isPDF? 'w-full h-[500px] rounded-3xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity':'w-full lg:h-[500px] rounded-3xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity'"
          @click="showLightbox(getImageIndex(chunkIndex, 0))">
          <img :src="chunk[0].src" :alt="chunk[0].alt || 'Architecture image'"
            class="w-full h-96 md:h-[32rem] object-cover" />
        </div>
      </div>

      <!-- Layout for 2 images (two equal columns) -->
      <div v-else-if="chunk.length === 2" :class="isPDF ? 'flex flex-row gap-4 p-12' :
        'flex flex-col md:flex-row gap-4 p-6 md:p-12'">

        <div :class="['w-full', isPDF ? 'w-1/2' : 'md:w-1/2']">
          <div
            :class="isPDF ? 'h-[580px]  rounded-3xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity' : 'lg:h-[580px] h-[250px]  rounded-3xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity'"
            @click="showLightbox(getImageIndex(chunkIndex, 0))">
            <img :src="chunk[0].src" :alt="chunk[0].alt || 'Architecture image'" class="w-full h-full object-cover" />
          </div>
        </div>

        <div :class="['w-full', isPDF ? 'w-1/2' : 'md:w-1/2']">
          <div
            :class="isPDF ? 'h-[580px]  rounded-3xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity' : 'lg:h-[580px] h-[250px]  rounded-3xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity'"
            @click="showLightbox(getImageIndex(chunkIndex, 1))">
            <img :src="chunk[1].src" :alt="chunk[1].alt || 'Architecture image'" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <!-- Default layout for 3 images (2/3 + 1/3 with stacked images) -->
      <div v-else :class="isPDF ? 'flex flex-row gap-6 p-12' : 'flex flex-col md:flex-row gap-6 p-6 md:p-12'">

        <!-- Main large image (left side) -->
        <div :class="isPDF ? 'w-1/2 flex justify-end' : 'w-full md:w-1/2 md:flex md:justify-end'">

          <div
            :class="isPDF ? 'h-[580px] w-full rounded-3xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity' : 'lg:h-[580px] h-[250px]  lg:w-full rounded-3xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity'"
            @click="showLightbox(getImageIndex(chunkIndex, 0))">

            <img :src="chunk[0].src" :alt="chunk[0].alt || 'Architecture image'" class="w-full h-full object-cover" />
          </div>
        </div>

        <!-- Two stacked images (right side) -->
        <div :class="isPDF ? 'w-1/2 flex flex-col gap-6' : 'w-full lg:w-1/2 flex flex-col gap-6'">

          <div
            :class="isPDF ? 'h-[280px] w-full rounded-3xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity' : 'lg:h-[280px] h-[250px] lg:w-full rounded-3xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity'"
            @click="showLightbox(getImageIndex(chunkIndex, 1))">

            <img :src="chunk[1].src" :alt="chunk[1].alt || 'Architecture image'" class="w-full h-full object-cover" />
          </div>
          <div
            :class="isPDF ? 'h-[280px] w-full rounded-3xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity' : 'lg:h-[280px] h-[250px] lg:w-full rounded-3xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity'"
            @click="showLightbox(getImageIndex(chunkIndex, 2))">
            <img :src="chunk[2].src" :alt="chunk[2].alt || 'Architecture image'" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>

    <!-- Import the reusable lightbox component -->
    <Lightbox ref="lightboxRef" :images="images" />
  </div>
</template>