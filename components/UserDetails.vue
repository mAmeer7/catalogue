<script setup>
import AgentCard from './AgentCard.vue';


const props = defineProps({
  details:Object,
  isPDF:Boolean
})
</script>



<template>
    <div class="relative w-full h-screen bg-gray-900 overflow-hidden">
        <!-- Background skyscrapers image - Using a gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-50"></div>

        <!-- Building images as background -->
        <div class="absolute inset-0 z-0 ">
            <div class="w-full h-full bg-cover bg-center opacity-50"
                :style="{ backgroundImage: `url(${details?.backgroundImage})` }"></div>
        </div>

        <!-- Content Container -->
        <div class="relative z-10 flex flex-col h-full">


            <!-- Header with Logo -->
            <div class="flex justify-center  pt-16 pb-4">
                <div class="text-center">
                    <div class="mb-2">
                        <img :src="details?.companyLogo" alt="Company Logo" class="h-16 mx-auto">


                    </div>

                    <!-- Address Line -->
                    <div class="flex items-center justify-center text-white text-sm mt-4">
                        <svg class="w-4 h-4 mr-1  " fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span :class="[
                            isPDF ? 'font-figtree font-regular text-gray-300 text-[20px]' : 'lg:text-[20px] font-figtree font-regular text-gray-300',
                        ]">
                            {{ details?.officeAddress }}
                        </span>
                    </div>

                    <!-- Website -->
                    <div class="flex items-center justify-center text-white text-sm mt-2">
                        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span :class="isPDF
                            ? 'font-figtree text-[20px] font-regular text-gray-300'
                            : 'font-figtree text-sm font-regular text-gray-300'
                            ">
                            {{ details?.website }}
                        </span>
                    </div>
                </div>
            </div>

            <!-- Main Content -->
            <div :class="isPDF
                ? 'flex-grow relative flex flex-col justify-center items-start px-6'
                : 'flex-grow relative flex flex-col lg:justify-center items-start px-6'
                ">
                <h2 :class="isPDF
                    ? 'text-white absolute bottom-16 left-10 text-[24px] font-figtree'
                    : 'text-white lg:absolute bottom-16 left-10 lg:text-[24px] max-sm:mt-[100px] font-figtree'
                    ">
                    {{ `${details?.greeting} ${details?.introText} ${details?.unitCount} units in
                    ${details?.projectCount} projects` }}
                </h2>



                <!-- Scroll indicator -->
                <div :class="isPDF
                    ? 'flex absolute bottom-6 left-10 mt-3 items-center text-white'
                    : 'flex lg:absolute bottom-6 left-10 mt-3 items-center text-white'">
                    <div class="bg-white bg-opacity-20 rounded-full p-2 mr-2">
                        <svg class="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                    <span :class="isPDF
                        ? 'font-figtree font-regular text-[#BFBFBF] text-[16px]'
                        : 'font-figtree font-regular text-[#BFBFBF] lg:text-[16px]'">
                        {{ details?.scrollText }}
                    </span>
                </div>

            </div>

            <!-- Agent Card Component -->
            <AgentCard  :isPDF="isPDF" :agent="details?.agent" :class="isPDF
                ? 'absolute bottom-6 right-6'
                : 'lg:absolute bottom-6 right-6'
                " />
        </div>
    </div>
</template>
