<script setup>


import PaymentPlan from './PaymentPlan.vue'


const props = defineProps({
    dynamicColor:{
      type:String
    },
    paymentPlanData:{
        type:Array
    }
})


</script>
<template>

    <div class="relative min-h-[100vh] bg-gray-900 bg-cover bg-center bg-no-repeat text-white"
        :style="{ backgroundImage: 'url(/bg/bg3.jpg)' }">
        <!-- Overlay (optional for darkening) -->
        <div class="absolute inset-0 opacity-70 z-1" :style="{
            background: `linear-gradient(to bottom right, black, ${dynamicColor})`
        }"></div>

        <div class="relative container px-2 lg:px-10 py-8">
            <h2 class="text-4xl md:text-5xl font-figtree font-bold my-10">Payment Plan</h2>
            <div class="lg:max-w-[60vw] w-[10%]  w-full">
                <PaymentPlan :paymentItems="props?.paymentPlanData" :dynamicBgColor="props?.dynamicColor" />

            </div>
        </div>
    </div>
</template>
