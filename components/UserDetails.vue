<script>
import AgentCard from './AgentCard.vue';



export default {
  name: 'RealEstateOffer',
  components: {
    AgentCard
  },
  props: {
    // Company details
    companyLogo: {
      type: String,
      default: '/img/logo.svg'
    },

    officeAddress: {
            type: String,
            default: 'Suite 33, The Walk, JBR, Dubai, UAE'
        },
        website: {
            type: String,
            default: 'www.luxhomes.ae'
        },

    // Offer details
    greeting: {
      type: String,
      default: 'Greetings!'
    
    },
    introText: {
      type: String,
      default: 'Here’s my project offer for you of'             
    },
    unitCount: {
      type: [Number, String],
      default: 7
    },
    projectCount: {
      type: [Number, String],
      default:4
    },

    // Background

    backgroundImage: {
            type: String,
            default: '/bg/bg1.jpg',
        },


    // Scroll indicator
    scrollText: {
      type: String,
      default: 'Scroll down to view your offer'

      
    },

    // Agent details
    agent: {
      type: Object,
      default:   {
            name: 'Aisha Al Farsi',
            email: 'aisha.farsi@realtyhub.com',
            photo: '',
            verified: true
          }
    }
  },
  methods: {
    downloadAsPDF() {
      console.log("PDF download button clicked");
      window.print();
    }
}

}
</script>



<template>
    <div class="relative w-full h-screen bg-gray-900 overflow-hidden">
        <!-- Background skyscrapers image - Using a gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-50"></div>

        <!-- Building images as background -->
        <div class="absolute inset-0 z-0 ">
            <div class="w-full h-full bg-cover bg-center opacity-50"
                :style="{ backgroundImage: `url(${backgroundImage})` }"></div>
        </div>

        <!-- Content Container -->
        <div class="relative z-10 flex flex-col h-full">
            <!-- PDF Download Button - Top Right Position -->
            <div class="absolute hidden lg:block top-6 right-6">
                <button 
                    @click="downloadAsPDF" 
                    class="flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                >
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path>
                    </svg>
                    Download as PDF
                </button>
            </div>
            
            <!-- Header with Logo -->
            <div class="flex justify-center  pt-16 pb-4">
                <div class="text-center">
                    <div class="mb-2">
                        <img v-if="companyLogo" :src="companyLogo" alt="Company Logo" class="h-16 mx-auto">
                        <h1 v-else class="text-white text-5xl font-bold">Century<span class="font-light">21</span></h1>
                       
                    </div>

                    <!-- Address Line -->
                    <div class="flex items-center justify-center text-white text-sm mt-4">
                        <svg class="w-4 h-4 mr-1  " fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="font-figtree lg:text-[20px] font-regular text-gray-300 ">{{ officeAddress }}</span>
                    </div>

                    <!-- Website -->
                    <div class="flex items-center justify-center text-white text-sm mt-2">
                        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="font-figtree lg:text-[20px] font-regular text-gray-300">{{ website }}</span>
                    </div>
                </div>
            </div>

            <!-- Main Content -->
            <div class="flex-grow relative flex flex-col lg:justify-center items-start  px-6  ">
                <h2 class="text-white lg:absolute bottom-16 left-10 lg:text-[24px] max-sm:mt-[100px]  font-figtree ">
                    {{ greeting }} <span class="font-regular">{{ introText }}</span>
                    <span class="text-white font-bold mx-1">{{ unitCount }}</span>
                    <span class="font-normal">units in</span>
                    <span class="text-white font-bold mx-1">{{ projectCount }}</span>
                    <span class="font-normal">projects</span>
                </h2>



                <!-- Scroll indicator -->
                <div class="flex lg:absolute bottom-6 left-10 mt-3 items-center text-white ">
                    <div class="bg-white bg-opacity-20 rounded-full p-2 mr-2">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                    <span class="font-figtree font-regular text-[#BFBFBF] lg:text-[16px]">{{ scrollText }}</span>
                </div>
            </div>

            <!-- Agent Card Component -->
            <AgentCard :agent="agent" class="lg:absolute bottom-6 right-6" />
        </div>
    </div>
</template>
