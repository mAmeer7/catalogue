          <script setup>
          import { ref, computed } from 'vue';

          const props = defineProps({
            unit: {
              type: Object,
              required: true
            },
            dynamicBgColor: String
            ,
            initialFavorite: {
              type: Boolean,
              default: false
            },
            backgroundVariant: {
              type: String,
              default: 'green' // 'green', 'blue', 'teal'
            }
          });

          const emit = defineEmits(['toggle-favorite']);

          // State
          const isFavorite = ref(props.initialFavorite);

          // Toggle favorite state
          const toggleFavorite = () => {
            isFavorite.value = !isFavorite.value;
            emit('toggle-favorite', {
              unitId: props.unit.unitNumber,
              isFavorite: isFavorite.value
            });
          };

          // Format price with commas (e.g., 5,294,000)
          const formatPrice = (price) => {
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          };

</script>



<!-- UnitCard.vue -->
<template>
  <div
  :class="[
    'p-5 lg:w-[420px] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-102',
    unit.note ? 'lg:h-[376px]' : 'lg:h-[276px]'
  ]"
  :style="{ backgroundColor: dynamicBgColor }"
>



    <div class="flex justify-between items-center mb-7 ">
      <h3 class="text-xl font-bold font-figtree  text-white ">Unit #{{ unit.unitNumber }}</h3>

      <button @click="toggleFavorite" class=" top-4 right-4 focus:outline-none" aria-label="Toggle favorite">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
          :class="isFavorite ? 'text-red-500 fill-red-500' : 'text-white stroke-white'" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
    </div>


    <div>
      <div class="grid grid-cols-2 gap-4">

        <!-- Left column -->
        <div>
          <div class="mb-4">
            <div class="flex flex-row  gap-2">
              <img width="14" alt="icon" src="/icons/building-03.png" />
              <span class="text-gray-200 font-figtree font-regular text-sm">Type</span>
            </div>
            <p class="font-medium  font-figtree text-white">{{ unit.type }}</p>
          </div>

          <div class="mb-4">
            <div class="flex flex-row  gap-2">
              <img width="14" alt="icon" src="/icons/elements.svg" />
              <span class="text-gray-200 font-figtree font-regular text-sm">Size</span>
            </div>

            <p class="font-medium font-figtree  text-white">{{ unit.size }} sqft</p>
          </div>

          <div>
            <div class="flex flex-row  gap-2">
              <img width="14" alt="icon" src="/icons/money-01.svg" />
              <span class="text-gray-200 font-figtree font-regular text-sm">Price per sqft</span>
            </div>

            <p class="font-medium font-figtree text-white">AED {{ unit.pricePerSqft }}</p>
          </div>
        </div>

        <!-- Right column -->
        <div>
          <div class="mb-4">

            <div class="flex flex-row  gap-2">
              <img width="14" alt="icon" src="/icons/layout-07.svg" />
              <span class="text-gray-200 font-figtree font-regular text-sm">Layout</span>
            </div>

            <p class="font-medium font-figtree  text-white">{{ unit.layout }}</p>
          </div>

          <div class="mb-4">
            <div class="flex flex-row  gap-2">
              <img width="14" alt="icon" src="/icons/floor-plan.svg" />
              <span class="text-gray-200 font-figtree font-regular text-sm">Floors</span>
            </div>

            <p class="font-medium font-figtree  text-white">{{ unit.floor }}</p>
          </div>

          <div>
            <div class="flex flex-row  gap-2">
              <img width="14" alt="icon" src="/icons/elements-02.svg" />
              <span class="text-gray-200 font-figtree font-regular text-sm">Price</span>
            </div>

            <p class="font-medium font-figtree  text-white">AED {{ formatPrice(unit.price) }}</p>
          </div>
        </div>
      </div>

     


      <!-- Additional note if present -->
      <div v-if="unit.note" class="mt-5 pb-2">
        <hr class="border-t border-[#186153]">

        <div class="flex flex-col mt-5">

          <div class="flex justify-between items-center">
            <div class="flex gap-1 flex-row">
              <img v-if="unit.userAvatar" :src="unit.userAvatar" :alt="unit.userName" class="w-8 h-8 rounded-full mr-2" />
              <p v-if="unit.userName" class="text-sm font-medium font-figtree  text-white">{{ unit.userName }}</p>
            </div>

            <div v-if="unit.timeAgo" class="text-xs text-gray-300 ml-auto">{{ unit.timeAgo }}</div>
            
          </div>
       
          <div class="mt-2">          
            <p class="text-sm font-figtree font-regular text-gray-200">{{ unit.note }}</p>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</template>
