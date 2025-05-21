    <script setup lang="ts">
    import AmenityCard from './AmenityCard.vue'

    interface Amenity {
        icon: string
        label: string
    }

    const props = defineProps<{
        amenities: Amenity[]
        dynamicColor: string,
        backgroundImage:string,
        isPDF:boolean | undefined
    }>()
</script>
<template>
    <div :class=" isPDF? 'relative  pdf-height  bg-cover bg-center bg-no-repeat py-16 px-6 text-white' :'relative min-h-screen bg-cover bg-center bg-no-repeat py-10 lg:py-16 lg:px-6 text-white'"
        :style="{ backgroundImage: `url(${backgroundImage})`  }">
        <!-- Overlay -->
        <div class="absolute inset-0 opacity-70 z-1" :style="{
            background: `linear-gradient(to bottom right, black, ${dynamicColor})`
        }"></div>

        <!-- Content -->
        <div class="relative z-10 max-w-full mx-5">
            <h2 :class="isPDF
                ? 'text-[48px] font-figtree font-bold mb-10'
                : 'text-[22px] lg:text-[48px] font-figtree font-bold mb-10'">
                Amenities
            </h2>


            <div :class="isPDF
                ? 'grid grid-cols-6 gap-x-4 gap-y-6 px-4 sm:px-0'
                : 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-6 px-4 sm:px-0'">
                <AmenityCard v-for="(item, index) in props?.amenities"     :isPDF="isPDF"   :key="index" :icon="item.icon"
                    :label="item.label" :dynamicBgColor="dynamicColor" />
            </div>
        </div>
    </div>
</template>

