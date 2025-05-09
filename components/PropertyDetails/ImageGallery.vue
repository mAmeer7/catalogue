  <script setup>
  import { computed } from 'vue';
  
  // Define props
  const props = defineProps({
    title: {
      type: String,
      default: 'Architecture'
    },
    dynamicColor:{
      type:String
    },
    images: {
      type: Array,
      required: true,
      // Each image should have { src, alt } format
    },
    backgroundImage: {
      type: String,
      default: '/images/architecture-bg.jpg'
    }
  });
  
  // Computed property to split images into chunks of 3
  const imageChunks = computed(() => {
    const chunks = [];
    for (let i = 0; i < props.images.length; i += 3) {
      chunks.push(props.images.slice(i, i + 3));
    }
    return chunks;
  });


  </script>


<!-- Its common Gallery -->
<template>
  <div class="relative bg-cover bg-center bg-no-repeat py-20  text-white"
       :style="{ backgroundImage: `url(${backgroundImage})` }">
    <!-- Overlay -->
    <div
    class="absolute inset-0 opacity-70 z-1"
    :style="{
      background: `linear-gradient(to bottom right, black, ${dynamicColor})`
    }"
  ></div>
    
    <!-- Title section -->
    <div class="relative z-10 pt-12 px-6 md:px-12">
      <h2 class="text-4xl md:text-5xl font-figtree font-bold text-white">{{ title }}</h2>
    </div>
    
    <!-- Create multiple gallery sections if needed -->
    <div 
      v-for="(chunk, index) in imageChunks" 
      :key="index" 
      class="relative z-10"
    >
      <!-- Layout for 1 image (full width) -->
      <div v-if="chunk.length === 1" class="p-6 md:p-12">
        <div class="w-full lg:h-[500px] rounded-3xl overflow-hidden ">
          <img 
            :src="chunk[0].src" 
            :alt="chunk[0].alt || 'Architecture image'" 
            class="w-full h-96 md:h-[32rem] object-cover"
          />
        </div>
      </div>

      <!-- Layout for 2 images (two equal columns) -->
      <div v-else-if="chunk.length === 2" class="flex flex-col md:flex-row gap-4 p-6 md:p-12">
        <div class="w-full md:w-1/2">
          <div class="lg:h-[580px] rounded-3xl overflow-hidden">
            <img 
              :src="chunk[0].src" 
              :alt="chunk[0].alt || 'Architecture image'" 
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div class="lg:h-[580px] rounded-3xl overflow-hidden">
            <img 
              :src="chunk[1].src" 
              :alt="chunk[1].alt || 'Architecture image'" 
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- Default layout for 3 images (2/3 + 1/3 with stacked images) -->
      <div v-else class="flex flex-col md:flex-row gap-4 p-6 md:p-12">
        <!-- Main large image (left side) -->
        <div class="w-full  md:w-1/2 md:flex md:justify-end">
          <div class="lg:h-[580px] lg:w-full rounded-3xl overflow-hidden">
            <img 
              :src="chunk[0].src" 
              :alt="chunk[0].alt || 'Architecture image'" 
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <!-- Two stacked images (right side) -->
        <div class="w-full lg:w-1/2  flex flex-col gap-6">
          <div class="lg:h-[280px] lg:w-full rounded-3xl overflow-hidden">
            <img 
              :src="chunk[1].src" 
              :alt="chunk[1].alt || 'Architecture image'" 
              class="w-full h-full object-cover"
            />
          </div>
          <div class="lg:h-[280px]  lg:w-full rounded-3xl overflow-hidden">
            <img 
              :src="chunk[2].src" 
              :alt="chunk[2].alt || 'Architecture image'" 
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
