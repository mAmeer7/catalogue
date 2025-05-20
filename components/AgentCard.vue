<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  agent: {
    type: Object,
    required: true,
  },
  showCallButton: {
    type: Boolean,
    default: false
  },
  callButtonText: {
    type: String,
    default: 'Call'
  },
  showMessageButton: {
    type: Boolean,
    default: false
  },
  showWhatsAppButton: {
    type: Boolean,
    default: false
  },
  customButtons: {
    type: Array,
  },
  isPDF:Boolean
})

const emit = defineEmits(['call', 'message', 'whatsapp', 'custom-action'])

function getInitials(name) {
  if (!name) return '?'
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('')
    .substring(0, 2)
}

function handleCall() {
  if (props.agent.phone) {
    window.location.href = `tel:${props.agent.phone.replace(/\s/g, '')}`
  }
  emit('call', props.agent)
}

function handleMessage() {
  emit('message', props.agent)
}

function handleWhatsApp() {
  if (props.agent.phone) {
    const phoneNumber = props.agent.phone.replace(/\D/g, '')
    window.open(`https://wa.me/${phoneNumber}`, '_blank')
  }
  emit('whatsapp', props.agent)
}

function handleCustomButton(button) {
  emit('custom-action', { button, agent: props.agent })
}
</script>

<template>
  <div :class="isPDF
    ? 'bg-gray-900 min-w-[350px] bg-opacity-80 rounded-lg p-4 shadow-lg'
    : 'bg-gray-900 lg:min-w-[350px] bg-opacity-80 rounded-lg p-4 shadow-lg'">
    <div class="flex  flex-col items-start ">
      <div class="flex mb-3">
        <!-- Agent Photo -->
        <div class="w-12 h-12 rounded-sm overflow-hidden border-2"
          :class="agent.verified ? 'border-yellow-400' : 'border-gray-400'">
          <img v-if="agent.photo" :src="agent.photo" :alt="agent.name" class="w-full h-full object-cover">
          <div v-else class="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600">
            {{ getInitials(agent.name) }}
          </div>
        </div>

        <!-- Agent Info -->
        <div class="ml-3">
          <div class="flex items-center">
            <h3 :class="['text-white  font-figtree font-semibold', isPDF? 'text-[20px]':'text-[17px]']">{{ agent.name }}</h3>
            <span v-if="agent.verified" class="ml-1 text-yellow-400">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
            </span>
          </div>
          <div v-if="agent.mobNo" class="flex items-center  flex-row">
            <img src="/icons/call.png" alt="icon" class="w-5 h-5" />
            <p :class="['text-gray-300 font-figtree font-regular', isPDF? 'text-[18px]':'text-[15px]']">{{ agent.mobNo }}</p>
          </div>

          <div v-if="agent.whatsapp" class="flex items-center  flex-row">
            <img src="/icons/whatsapp.png" alt="icon" class="w-5 h-5" />
            <p :class="['text-gray-300 font-figtree font-regular', isPDF? 'text-[18px]':'text-[15px]']">{{ agent.whatsapp }}</p>
          </div>

          <div v-if="agent.email" class="flex items-center gap-2  flex-row">
            <img src="/icons/mail.png" alt="icon" class="w-4 h-4 ml-1" />
            <p :class="['text-gray-300 font-figtree font-regular', isPDF? 'text-[18px]':'text-[15px]']">{{ agent.email }}</p>
          </div>
         


        </div>
      </div>

      <!-- Contact Buttons -->
      <div class="flex gap-2 w-full">
        <!-- Call Button -->
        <button v-if="!isPDF"
          class="flex-grow bg-blue-500 hover:bg-blue-600 max-w-[300px] font-figtree text-white py-2 px-4 rounded-md flex items-center justify-center transition-colors"
          @click="handleCall">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
            </path>
          </svg>
          {{ callButtonText }}
        </button>

        <!-- Message Button -->
        <button v-if="!isPDF"
          class="w-10 h-10 bg-orange-500 hover:bg-orange-600 text-white rounded-md flex items-center justify-center transition-colors"
          @click="handleMessage">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
              clip-rule="evenodd"></path>
          </svg>
        </button>

        <!-- WhatsApp Button -->
        <button v-if="!isPDF"
          class="w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-md flex items-center justify-center transition-colors"
          @click="handleWhatsApp">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clip-rule="evenodd"></path>
          </svg>
        </button>

        <!-- Custom Contact Button -->
        <button v-for="(button, index) in customButtons" :key="index"
          class="w-10 h-10 text-white rounded-md flex items-center justify-center transition-colors"
          :class="button.bgColor || 'bg-gray-500 hover:bg-gray-600'" @click="handleCustomButton(button)">
          <span v-if="button.icon" v-html="button.icon"></span>
          <span v-else>{{ button.label?.charAt(0) || '+' }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

