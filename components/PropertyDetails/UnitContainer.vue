            <script setup>
            import { computed } from 'vue';
            import UnitCard from './UnitCard.vue';

            const props = defineProps({
              title: {
                type: String,
                default: 'Unit Specifications'
              },
              dynamicColor: {
                type: String
              },
              units: {
                type: Array,
                required: true
              },

              cardsPerGroup: {
                type: Number,
                default: 3
              },
              maxCards: {
                type: Number,
                default: Infinity
              },
              backgroundVariants: {
                type: Array,
                default: () => ['green', 'blue', 'teal']
              },
              groupBackgroundOverrides: {
                type: Array,
                default: () => []
              },
              isPDF:Boolean
            });

            const emit = defineEmits(['update:favorites']);

            // Calculate how many units we can display (respecting maxCards)
            const displayableUnits = computed(() => {
              const maxToShow = Math.min(props.units.length, props.maxCards);
              return props.units.slice(0, maxToShow);
            });

            // Group units into sets of cardsPerGroup
            const unitGroups = computed(() => {
              const groups = [];
              const units = displayableUnits.value;

              for (let i = 0; i < units.length; i += props.cardsPerGroup) {
                groups.push(units.slice(i, i + props.cardsPerGroup));
              }

              return groups;
            });

            // Determine background variant for a card based on its group and position
            const backgroundVariantForGroup = (groupIndex, cardIndex) => {
              // Check if we have a specific override for this group
              if (props.groupBackgroundOverrides[groupIndex]) {
                return props.groupBackgroundOverrides[groupIndex];
              }

              // Otherwise rotate through the background variants
              // For first group: green, second group: blue, third group: teal, etc.
              const variantIndex = groupIndex % props.backgroundVariants.length;
              return props.backgroundVariants[variantIndex];
            };

            // Handle favorite toggle from child component
            const handleToggleFavorite = ({ unitId, isFavorite }) => {
              emit('update:favorites', { unitId, isFavorite });
            };
</script>
<!-- UnitCardContainer.vue -->


<template>
  <div>
    <div v-for="(group, groupIndex) in unitGroups" :key="groupIndex"
 :class="isPDF ? 'relative h-screen bg-cover bg-center bg-no-repeat py-16 text-white' : 'relative lg:h-screen bg-cover bg-center bg-no-repeat py-10 lg:py-16 text-white'"
      :style="{ backgroundImage: `url('/bg/bg4.jpg')` }">
      <!-- Overlay -->
      <div class="absolute inset-0 opacity-70 z-1" :style="{
        background: `linear-gradient(to bottom right, black, ${dynamicColor})`
      }"></div>

      <!-- Content Wrapper -->
      <div class="relative z-10 max-w-full mx-10 ">
        <h2 :class="isPDF ? 'text-[48px] font-bold text-white mb-10' : 'text-[22px] lg:text-[48px] font-bold text-white mb-10'">{{ title }}</h2>


        <div 
        :class="['flex flex-wrap gap-6',
          group.length === 3 ? 'justify-between ' : ''
        ]">
          <UnitCard v-for="(unit, index) in group" :key="unit.unitNumber" :unit="unit" :initial-favorite="unit.favorite"
            :background-variant="backgroundVariantForGroup(groupIndex, index)" :dynamicBgColor="props?.dynamicColor"
            @toggle-favorite="handleToggleFavorite" />
        </div>
      </div>
    </div>
  </div>
</template>




