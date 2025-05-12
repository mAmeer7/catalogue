<!-- components/ImageLightbox.vue -->
<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  // Images to display in the lightbox
  images: {
    type: Array,
    required: true,
    // Each image should be an object with at least a src property
    // { src: string, title?: string, alt?: string }
  },
  // Initial state of the lightbox
  isOpen: {
    type: Boolean,
    default: false
  },
  // Initial index of the image to display
  initialIndex: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits(['update:isOpen', 'update:index']);

// Internal state
const localIsOpen = ref(props.isOpen);
const currentIndex = ref(props.initialIndex);

// Format images for lightbox
const lightboxImages = computed(() => {
  return props.images.map(img => ({
    src: img.src,
    title: img.title || img.alt || ''
  }));
});

// Watch for prop changes to update internal state
watch(() => props.isOpen, (newValue) => {
  localIsOpen.value = newValue;
});

watch(() => props.initialIndex, (newValue) => {
  currentIndex.value = newValue;
});

// Watch for internal state changes to emit events
watch(localIsOpen, (newValue) => {
  emit('update:isOpen', newValue);
});

watch(currentIndex, (newValue) => {
  emit('update:index', newValue);
});

// Close the lightbox
const closeLightbox = () => {
  localIsOpen.value = false;
};

// Expose methods for parent components
defineExpose({
  open: (index = 0) => {
    currentIndex.value = index;
    localIsOpen.value = true;
  },
  close: closeLightbox
});
</script>

<template>
  <client-only>
    <vue-easy-lightbox
      :visible="localIsOpen"
      :imgs="lightboxImages"
      :index="currentIndex"
      @hide="closeLightbox"
    ></vue-easy-lightbox>
  </client-only>
</template>