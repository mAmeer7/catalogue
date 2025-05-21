<script setup>
defineProps({
    title: {
        type: String,
        default: 'Payment Plan'
    },
    dynamicBgColor: {
        type: String,
    },
    isPDF:Boolean,
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
 <div :class="isPDF ? 'text-white p-12 w-[800px] h-[550px] rounded-3xl' : 'p-2 text-white md:p-12 lg:w-[800px] lg:h-[550px] rounded-3xl'"
 :style="{ backgroundColor: dynamicBgColor }">

        <div class="">
            <div v-for="(item, index) in paymentItems" :key="index"
        :class="isPDF ? 'flex flex-row justify-between items-center py-4 border-b border-gray-700' : 'flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b border-gray-700'">

               <div :class="isPDF ? 'text-6xl font-figtree font-bold text-white' : 'text-[30px] lg:text-6xl font-figtree font-bold text-white'">
                    {{ item.percentage }}%
                </div>
                <div :class="isPDF ? 'text-2xl font-figtree font-regular text-gray-300 mt-0' : 'md:text-2xl font-figtree font-regular text-gray-300 mt-2 md:mt-0'">

                    {{ item.label }}
                </div>
            </div>
        </div>
    </div>
</template>
