  <script setup lang="ts">
  defineProps<{
    icon: any
    label: string
    dynamicBgColor: string,
    isPDF:boolean  | undefined
  }>()
</script>

<template>
<div
  :class="[ isPDF?
    'w-[200px] h-[180px] cursor-pointer flex flex-col items-center justify-center text-white rounded-2xl shadow-lg text-sm hover:bg-emerald-700 transition':    
    'w-[150px] h-[150px] lg:w-[200px] lg:h-[180px] cursor-pointer flex flex-col items-center justify-center text-white rounded-2xl shadow-lg text-sm hover:bg-emerald-700 transition'
  ]"
  :style="{ backgroundColor: dynamicBgColor }"
>

    <component :is="icon" class="w-8 h-8 mb-2" />
    <span
  :class="isPDF
    ? 'text-centertext-[18px] font-figtree font-regular'
    : 'text-center md:text-[18px] text-[12px] font-figtree font-regular'"
>
  {{ label }}
</span>
  </div>
</template>

