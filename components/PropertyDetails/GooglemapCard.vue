<script setup lang="ts">
const props = defineProps({
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
})

const mapUrl = computed(() => 
  `https://maps.google.com/maps?q=${props.lat},${props.lng}&t=&z=12&ie=UTF8&iwloc=&output=embed`
)
</script>

<template>
  <div class="w-full h-full">
    <iframe
      :src="mapUrl"
      width="100%"
      height="100%"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      style="border: 0; display: block;"
    ></iframe>
  </div>
</template>
