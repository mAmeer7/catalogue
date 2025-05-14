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
</script>

<template>
  <div v-for="(property, index) in properties" :key="index">

    <BasicDetails :details="property?.propDetails" />
    <!-- Amenities -->
    <Amenities v-if="property.amenities" :amenities="property.amenities" :dynamicColor="property.dynamicColor" :backgroundImage="property?.amenityBackground" />

    <!-- Architecture Gallery -->
    <ImageGallery v-if="property.architectureImages" :images="property.architectureImages" title="Architecture"
      :dynamicColor="property.dynamicColor" :backgroundImage="property.galleryBackground || '/bg/bg4.jpg'" />

    <!-- Interior Gallery -->
    <ImageGallery v-if="property.interiorImages" :images="property.interiorImages" title="Interior"
      :dynamicColor="property.dynamicColor" :backgroundImage="property.galleryBackground || '/bg/bg4.jpg'" />

    <!-- Amenities Gallery -->
    <ImageGallery v-if="property.amenitiesImages" :images="property.amenitiesImages" title="Amenities"
      :dynamicColor="property.dynamicColor" :backgroundImage="property.galleryBackground || '/bg/bg4.jpg'" />

    <!-- Island details -->
    <CommonDetails :dynamicColor="property.dynamicColor" :details="property?.areaDetails" />

    <!-- Map Plan -->
    <MapPlan v-if="property.planImages" title="Map Plan" :items="property.planImages"
      :backgroundImage="property.mapBackground || '/bg/bg4.jpg'" :dynamicColor="property.dynamicColor" />

    <!-- Unit Specifications -->
    <UnitContainer v-if="property.units" :title="'Unit Specifications'" :units="property.units" :cards-per-group="3"
      :max-cards="9" @update:favorites="() => {}" :dynamicColor="property.dynamicColor" />

    <!-- Constructor Details -->
    <ConstructerDetails 
    v-if="property?.builderDetails"
    :builder="property?.builderDetails"
    :dynamicColor="property.dynamicColor" />



    <!-- Payment Plan -->
    <PaymentDetails v-if="property.paymentPlanData" :dynamicColor="property.dynamicColor" :backgroundImage="property?.paymentBackground"
      :paymentPlanData="property.paymentPlanData" />
  </div>
</template>
