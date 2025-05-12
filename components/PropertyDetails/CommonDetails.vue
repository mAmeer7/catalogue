<script setup>

const props = defineProps({
    dynamicColor:{
      type:String
    },
    details:Object
})
</script>



<template>
    <div class="relative bg-gray-900 min-h-screen bg-cover bg-center bg-no-repeat text-white"
    :style="{ backgroundImage: `url(${details.backgroundImage})` }"      
        >
        <!-- Overlay (optional for darkening) -->
        <div class="absolute inset-0 opacity-70 z-1" :style="{
            background: `linear-gradient(to bottom right, black, ${dynamicColor})`
        }"></div>

        <!-- Main Content -->
        <div class="relative z-10 max-w-6xl mx-5 lg:px-6  py-10 lg:py-16">
            <!-- Header -->
            <div class="flex items-start mb-[80px]">
                <div>
                    <h1 class="text-[22px] lg:text-[48px] font-figtree  font-bold">{{ details?.location }}</h1>
                </div>
            </div>



            <!-- Description -->
            <div class="space-y-4 text-gray-200 lg:w-[60vw]">
                <p class="font-figtree font-regular"
                v-for="(item,index) in details?.details"
                :key="index"
                >
            {{ item }}
                </p>
              
            </div>
        </div>
    </div>
</template>
