// /composables/useTotalUnits.ts
import { computed } from 'vue'
import type { Ref } from 'vue'

export function useTotalUnits(properties: Ref<any[] | undefined>) {
    const totalUnits = computed(() => {
      // Agar properties undefined hai to empty array consider karo
      const propsArray = properties.value ?? []
      return propsArray.reduce((acc, property) => {
        return acc + (property.units?.length || 0)
      }, 0)
    })

  return { totalUnits }
}
