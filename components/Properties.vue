<script setup lang="ts">
import Amenities from '~/components/PropertyDetails/Amenities.vue'
import ImageGallery from '~/components/PropertyDetails/ImageGallery.vue'
import PaymentDetails from '~/components/PropertyDetails/PaymentDetails.vue'
import UnitContainer from '~/components/PropertyDetails/UnitContainer.vue'
import MapPlan from '~/components/PropertyDetails/MapPlan.vue'
import ConstructerDetails from '~/components/PropertyDetails/ConstructerDetails.vue'
import { properties } from '../data/propertyData' 
import BasicDetails from './PropertyDetails/BasicDetails.vue'
import CommonDetails from './PropertyDetails/CommonDetails.vue'


const props= defineProps({
  isPDF:Boolean
})
</script>

<template>
  <div v-for="(property, index) in properties" :key="index">

    <BasicDetails :isPDF="isPDF" :details="property?.propDetails" />
    <!-- Amenities -->
    <Amenities v-if="property.amenities"  :isPDF="isPDF"   :amenities="property.amenities" :dynamicColor="property.dynamicColor" :backgroundImage="property?.amenityBackground" />

    <!-- Architecture Gallery -->
    <ImageGallery v-if="property.architectureImages" :isPDF="isPDF" :images="property.architectureImages" title="Architecture"
      :dynamicColor="property.dynamicColor" :backgroundImage="property.galleryBackground || '/bg/bg4.jpg'" />

    <!-- Interior Gallery -->
    <ImageGallery v-if="property.interiorImages" :isPDF="isPDF" :images="property.interiorImages" title="Interior"
      :dynamicColor="property.dynamicColor" :backgroundImage="property.galleryBackground || '/bg/bg4.jpg'" />

    <!-- Amenities Gallery -->
    <ImageGallery v-if="property.amenitiesImages" :isPDF="isPDF" :images="property.amenitiesImages" title="Amenities"
      :dynamicColor="property.dynamicColor" :backgroundImage="property.galleryBackground || '/bg/bg4.jpg'" />

    <!-- Island details -->
    <CommonDetails :dynamicColor="property.dynamicColor"  :isPDF="isPDF"  :details="property?.areaDetails" />

    <!-- Map Plan -->
    <MapPlan v-if="property.planImages"  :isPDF="isPDF"  title="Map Plan" :items="property.planImages"
      :backgroundImage="property.mapBackground || '/bg/bg4.jpg'" :dynamicColor="property.dynamicColor" />

    <!-- Unit Specifications -->
    <UnitContainer v-if="property.units" :isPDF="isPDF"  :title="'Unit Specifications'" :units="property.units" :cards-per-group="3"
      :max-cards="9" @update:favorites="() => {}" :dynamicColor="property.dynamicColor" />

    <!-- Constructor Details -->
    <ConstructerDetails 
    :isPDF="isPDF" 
    v-if="property?.builderDetails"
    :builder="property?.builderDetails"
    :dynamicColor="property.dynamicColor" />



    <!-- Payment Plan -->
    <PaymentDetails v-if="property.paymentPlanData" :isPDF="isPDF"  :dynamicColor="property.dynamicColor" :backgroundImage="property?.paymentBackground"
      :paymentPlanData="property.paymentPlanData" />
  </div>
</template>
