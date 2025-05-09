<script setup>
const props = defineProps({
    dynamicColor: {
        type: String
    },
})
</script>



<template>
    <div class="relative h-screen bg-gray-900 bg-cover bg-center bg-no-repeat text-white"
        :style="{ backgroundImage: 'url(/bg/bg2.jpg)' }">
        <!-- Overlay (optional for darkening) -->
        <div class="absolute inset-0 opacity-70 z-1" :style="{
            background: `linear-gradient(to bottom right, black, ${dynamicColor})`
        }"></div>

        <!-- Main Content -->
        <div class="relative z-10 max-w-6xl mx-5 lg:px-6  py-16">
            <!-- Header -->
            <div class="flex items-start mb-[80px]">
                <div>
                    <h1 class="text-4xl md:text-5xl font-fitgree font-bold">GraniteEdge Builders</h1>
                </div>
            </div>



            <!-- Description -->
            <div class="space-y-4 text-gray-200 lg:w-[60vw]">
                <p class="font-figtree font-regular">
                    GraniteEdge Builders presents itself as a construction company with a name that evokes strength and
                    durability, suggesting a commitment to building solid and lasting structures. The "Granite" in their
                    name implies a foundation of resilience and quality materials, while "Edge" could suggest a modern
                    approach, innovation, or a competitive advantage in the construction industry. Potential clients
                    might perceive GraniteEdge Builders as a firm that prioritizes robust construction, attention to
                    detail, and possibly cutting-edge techniques.
                </p>
                <p class="font-figtree font-regular">
                    GraniteEdge Builders presents itself as a construction company with a name that evokes strength and
                    durability, suggesting a commitment to building solid and lasting structures. The "Granite" in their
                    name implies a foundation of resilience and quality materials, while "Edge" could suggest a modern
                    approach, innovation, or a competitive advantage in the construction industry. Potential clients
                    might perceive GraniteEdge Builders as a firm that prioritizes robust construction, attention to
                    detail, and possibly cutting-edge techniques.

                    As a hypothetical company, GraniteEdge Builders could specialize in a variety of construction
                    projects, ranging from residential buildings and commercial spaces to infrastructure development.
                    Their services might encompass initial design and planning, through the entire construction process,
                    to final finishing and handover. They might emphasize the use of high-quality materials and skilled
                    craftsmanship to ensure the longevity and structural integrity of their buildings.
                </p>

            </div>
        </div>
    </div>
</template>
