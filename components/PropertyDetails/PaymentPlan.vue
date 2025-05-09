<script setup>
defineProps({
    title: {
        type: String,
        default: 'Payment Plan'
    },
    dynamicBgColor: {
        type: String,
    },
    paymentItems: {
        type: Array,
        default: () => [
            { percentage: 20, label: 'On Banking' },
            { percentage: 50, label: 'During Construction' },
            { percentage: 30, label: 'On Handover' }
        ]
    }
});
</script>
<template>
  <div class="p-2 text-white md:p-12 lg:w-[800px] lg:h-[550px] rounded-3xl"
    :style="{ backgroundColor: dynamicBgColor }"
  >
        <div class="">
            <div v-for="(item, index) in paymentItems" :key="index"
                class="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b   border-gray-700">
                <div class="text-5xl md:text-6xl font-figtree font-bold text-white">
                    {{ item.percentage }}%
                </div>
                <div class="text-xl md:text-2xl font-figtree font-regular text-gray-300 mt-2 md:mt-0">
                    {{ item.label }}
                </div>
            </div>
        </div>
    </div>
</template>
