<script lang="ts" setup>
import { onMounted } from 'vue'
import Properties from '~/components/Properties.vue'
import UserDetails from '~/components/UserDetails.vue'
import { dummyBroker } from '~/data/propertyData'

const { $generatePDF, $isGeneratingPDF, $pdfGenerationProgress } = useNuxtApp()

const router = useRouter()

const handleDownload = async () => {
  try {
    // await $generatePDF('#pdf-section', 'brochure.pdf')
    // setTimeout(() => {
    //   router.back()
    // }, 1000)
  } catch (error) {
    console.error('Error generating PDF:', error)
  }
}

onMounted(() => {
  // Delay 1.5 seconds before starting download
  setTimeout(() => {
    handleDownload()
    console.log("trigrred")
  }, 500)
})
</script>



<template>
    <div class="relative">
        <!-- Loader Overlay -->
        <div v-if="$isGeneratingPDF"
            class="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center h-screen w-screen">
            <div class="text-center">
                <svg class="animate-spin h-10 w-10 text-blue-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                <p class="text-lg font-semibold text-gray-700">Generating PDF...{{ $pdfGenerationProgress }}%</p>
                <p v-if="$pdfGenerationProgress > 30" class="text-[14px] font-semibold text-gray-700">
                    Hang tight! It may take a couple of minutes. Please don’t close the page.
                </p>
                <p v-if="$pdfGenerationProgress > 40" class="text-[14px] font-semibold text-gray-700">
                    Almost there!
                </p>

            </div>
        </div>

        <!-- PDF Content -->
        <div id="pdf-section" class="w-[1490px] pdf-mode">
            <UserDetails isPDF :details="dummyBroker?.brokerdetails" :properties="dummyBroker?.properties"/>
            <Properties isPDF :properties="dummyBroker?.properties" />
        </div>
    </div>
</template>


