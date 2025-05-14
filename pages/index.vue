<script setup lang="ts">
const { $generatePDF, $isGeneratingPDF } = useNuxtApp()
import { dummyBroker } from '~/data/propertyData';

const handleDownload = async () => {

    $generatePDF('#pdf-section', 'brochure.pdf');

}


</script>

<template>
  <client-only>
    <div class="relative">

      <div class="top-2 left-2 absolute z-50 hidden lg:block">
        <button @click="handleDownload" class="bg-blue-600 text-white px-4 py-2 rounded">
          {{ $isGeneratingPDF ? 'Generating PDF...' : ' Download PDF' }}
        </button>
      </div>

      <!-- Content to be captured in PDF -->
      <div id="pdf-section">
        <UserDetails :details="dummyBroker" />
        <Properties />
      </div>
    </div>
  </client-only>
</template>



