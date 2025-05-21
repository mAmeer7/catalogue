<script setup lang="ts">
const { $generatePDF, $isGeneratingPDF, $pdfGenerationProgress } = useNuxtApp()
import { dummyBroker } from '~/data/propertyData';

const handleDownload = async () => {
  try {
    await $generatePDF('#pdf-section', 'brochure.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
}

</script>

<template>
  <client-only>
    <div class="relative">
      <!-- PDF Generation Overlay -->
      <div v-if="$isGeneratingPDF" class="fixed w-screen h-screen touch-none inset-0 bg-white bg-opacity-90 z-[100] flex flex-col items-center justify-center">
        <div class="text-center">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Generating PDF</h2>
          
          <!-- Progress bar -->
          <div class="w-64 h-4 bg-gray-200 rounded-full overflow-hidden mb-2">
            <div 
              class="h-full bg-blue-600 transition-all duration-300 ease-out"
              :style="{ width: `${$pdfGenerationProgress}%` }"
            ></div>
          </div>
          
          <!-- Progress percentage -->
          <p class="text-gray-600">{{ $pdfGenerationProgress }}% complete</p>
        </div>
      </div>
      
      <div class="top-2 left-2 absolute z-50 lg:block">
        <button 
          @click="handleDownload" 
          class="bg-blue-600 text-white px-4 py-2 rounded"
          :disabled="$isGeneratingPDF"
        >
          {{ $isGeneratingPDF ? 'Generating PDF...' : 'Download PDF' }}
        </button>
      </div>
      
      <UserDetails :details="dummyBroker" />
      <Properties />
      
      <div id="pdf-section" class="hidden w-[1440px] pdf-mode">
        <UserDetails isPDF :details="dummyBroker" />
        <Properties isPDF />
      </div>
    </div>
  </client-only>
</template>

<style scoped>
/* Add transition for smoother percentage updates */
.transition-all {
  transition-property: all;
  transition-duration: 300ms;
}
</style>