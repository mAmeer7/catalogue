<script setup>
import { computed, ref } from 'vue';
import GooglemapCard from './GooglemapCard.vue';
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
  items: {
    type: Array,
    required: true,
  },
  backgroundImage: {
    type: String,
    default: '/images/architecture-bg.jpg'
  }
});

// Computed property to split items into chunks of 3
const itemChunks = computed(() => {
  const chunks = [];
  for (let i = 0; i < props.items.length; i += 3) {
    chunks.push(props.items.slice(i, i + 3));
  }
  return chunks;
});

// Check if an item is a map
const isMap = (item) => item && item.type === 'map';

// Check if an item is an image
const isImage = (item) => item && item.type === 'image';

// Lightbox setup
const lightboxRef = ref(null);

// Filter only image items for the lightbox
const lightboxImages = computed(() => {
  return props.items
    .filter(item => isImage(item))
    .map(item => ({
      src: item.src,
      alt: item.alt || 'Gallery image',
      title: item.alt || 'Gallery image'
    }));
});

// Get the index of an image in the filtered lightbox images array
const getLightboxImageIndex = (item) => {
  if (!isImage(item)) return -1;
  return lightboxImages.value.findIndex(img => img.src === item.src);
};

// Open lightbox with specific item
const showLightbox = (item) => {
  if (!isImage(item) || !lightboxRef.value) return;
  
  const index = getLightboxImageIndex(item);
  if (index >= 0) {
    lightboxRef.value.open(index);
  }
};
</script>

<!-- Gallery Component -->
<template>
  <div class="relative min-h-screen  bg-cover bg-center bg-no-repeat py-10 lg:py-16 text-white"
    :style="{ backgroundImage: `url(${backgroundImage})` }">
    <!-- Overlay -->
    <div class="absolute inset-0 opacity-70 z-1" :style="{
      background: `linear-gradient(to bottom right, black, ${dynamicColor})`
    }"></div>

    <!-- Title section -->
    <div class="relative z-10  px-6 md:px-12">
      <h2 class="text-[22px] lg:text-[48px] font-figtree font-bold text-white">{{ title }}</h2>
    </div>

    <!-- Process each chunk of items -->
    <div v-for="(chunk, index) in itemChunks" :key="index" class="relative z-10">
      <!-- Layout for 1 item (full width) -->
      <div v-if="chunk.length === 1" class="p-6 md:p-12">
        <div class="w-full lg:h-[580px] h-[300px] rounded-3xl overflow-hidden">
          <!-- Single image with lightbox support -->
          <img v-if="isImage(chunk[0])" 
            :src="chunk[0].src" 
            :alt="chunk[0].alt || 'Architecture image'"
            class="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
            @click="showLightbox(chunk[0])" 
          />
          <!-- Single map -->
          <GooglemapCard 
            v-else-if="isMap(chunk[0])" 
            :lat="chunk[0].lat" 
            :lng="chunk[0].lng" 
          />
        </div>
      </div>

      <!-- Layout for 2 items (two equal columns) -->
      <div v-else-if="chunk.length === 2" class="flex flex-col md:flex-row gap-4 p-6 md:p-12">
        <!-- First item -->
        <div class="w-full md:w-1/2">
          <div class="lg:h-[580px] h-[300px] rounded-3xl overflow-hidden">
            <!-- First image with lightbox support -->
            <img v-if="isImage(chunk[0])" 
              :src="chunk[0].src" 
              :alt="chunk[0].alt || 'Architecture image'"
              class="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
              @click="showLightbox(chunk[0])" 
            />
            <!-- First map -->
            <GooglemapCard 
              v-else-if="isMap(chunk[0])" 
              :lat="chunk[0].lat" 
              :lng="chunk[0].lng"
              class="w-full h-full" 
            />
          </div>
        </div>

        <!-- Second item -->
        <div class="w-full md:w-1/2">
          <div class="lg:h-[580px] h-[300px] rounded-3xl overflow-hidden">
            <!-- Second image with lightbox support -->
            <img v-if="isImage(chunk[1])" 
              :src="chunk[1].src" 
              :alt="chunk[1].alt || 'Architecture image'"
              class="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
              @click="showLightbox(chunk[1])" 
            />
            <!-- Second map -->
            <GooglemapCard 
              v-else-if="isMap(chunk[1])" 
              :lat="chunk[1].lat" 
              :lng="chunk[1].lng"
              class="w-full h-full" 
            />
          </div>
        </div>
      </div>

      <!-- Layout for 3 items -->
      <div v-else class="flex flex-col md:flex-row gap-6 p-6 md:p-12">
        <!-- Main large item (left side) -->
        <div class="w-full md:w-1/2 md:flex md:justify-end">
          <div class="lg:h-[580px] h-[300px] lg:w-[720px] rounded-3xl overflow-hidden">
            <!-- First image with lightbox support -->
            <img v-if="isImage(chunk[0])" 
              :src="chunk[0].src" 
              :alt="chunk[0].alt || 'Architecture image'"
              class="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
              @click="showLightbox(chunk[0])" 
            />
            <!-- First map -->
            <GooglemapCard 
              v-else-if="isMap(chunk[0])" 
              :lat="chunk[0].lat" 
              :lng="chunk[0].lng"
              class="w-full h-full" 
            />
          </div>
        </div>

        <!-- Two stacked items (right side) -->
        <div class="w-full lg:w-1/2 flex flex-col gap-6">
          <div class="lg:h-[280px] h-[300px] lg:w-[570px] rounded-3xl overflow-hidden">
            <!-- Second image with lightbox support -->
            <img v-if="isImage(chunk[1])" 
              :src="chunk[1].src" 
              :alt="chunk[1].alt || 'Architecture image'"
              class="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
              @click="showLightbox(chunk[1])" 
            />
            <!-- Second map -->
            <GooglemapCard 
              v-else-if="isMap(chunk[1])" 
              :lat="chunk[1].lat" 
              :lng="chunk[1].lng"
              class="w-full h-full" 
            />
          </div>
          <div class="lg:h-[280px] h-[300px]  lg:w-[570px] rounded-3xl overflow-hidden">
            <!-- Third image with lightbox support -->
            <img v-if="isImage(chunk[2])" 
              :src="chunk[2].src" 
              :alt="chunk[2].alt || 'Architecture image'"
              class="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
              @click="showLightbox(chunk[2])" 
            />
            <!-- Third map -->
            <GooglemapCard 
              v-else-if="isMap(chunk[2])" 
              :lat="chunk[2].lat" 
              :lng="chunk[2].lng"
              class="w-full h-full" 
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Import the reusable lightbox component -->
    <Lightbox
      ref="lightboxRef"
      :images="lightboxImages"
    />
  </div>
</template>