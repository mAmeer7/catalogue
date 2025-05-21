<script setup>


import PaymentPlan from './PaymentPlan.vue'


const props = defineProps({
    dynamicColor:{
      type:String
    },
    paymentPlanData:{
        type:Array
    },
    backgroundImage: String,
    isPDF:Boolean
})


</script>
<template>

    <div :class="
      isPDF ? 'relative pdf-height bg-gray-900 bg-cover bg-center bg-no-repeat text-white' : 'relative min-h-screen bg-gray-900 bg-cover bg-center bg-no-repeat text-white'
    "
        :style="{ backgroundImage: `url(${backgroundImage})` }">
        <!-- Overlay (optional for darkening) -->
        <div class="absolute inset-0 opacity-70 z-1" :style="{
            background: `linear-gradient(to bottom right, black, ${dynamicColor})`
        }"></div>
        <div :class="isPDF ? 'relative container px-10 py-8' : 'relative container px-5 lg:px-10 py-1 lg:py-8'">

            <h2
                :class="isPDF ? 'text-[48px] font-figtree font-bold my-10' : 'text-[22px] lg:text-[48px] font-figtree font-bold my-10'">
                Payment Plan
            </h2>
            <div :class="isPDF ? 'max-w-[60vw]  w-full' : 'lg:max-w-[60vw] w-[10%] w-full'">

                <PaymentPlan :isPDF="isPDF" :paymentItems="props?.paymentPlanData" :dynamicBgColor="props?.dynamicColor" />

            </div>
        </div>
    </div>
</template>
