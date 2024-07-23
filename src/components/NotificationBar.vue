<template>
  <div v-if="localVisible" class="fixed flex flex-row  top-0 right-0 m-4  bg-blue-500  shadow-lg transition-transform transform rounded-lg" :class="{'translate-x-full': !localVisible}">

    <div class="p-4 flex items-center text-white">
      <svg class="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M11.209 3.816a1 1 0 0 0-1.966.368l.325 1.74a5.338 5.338 0 0 0-2.8 5.762l.276 1.473.055.296c.258 1.374-.228 2.262-.63 2.998-.285.52-.527.964-.437 1.449.11.586.22 1.173.75 1.074l12.7-2.377c.528-.1.418-.685.308-1.27-.103-.564-.636-1.123-1.195-1.711-.606-.636-1.243-1.306-1.404-2.051-.233-1.085-.275-1.387-.303-1.587-.009-.063-.016-.117-.028-.182a5.338 5.338 0 0 0-5.353-4.39l-.298-1.592Z"/>
  <path fill-rule="evenodd" d="M6.539 4.278a1 1 0 0 1 .07 1.412c-1.115 1.23-1.705 2.605-1.83 4.26a1 1 0 0 1-1.995-.15c.16-2.099.929-3.893 2.342-5.453a1 1 0 0 1 1.413-.069Z" clip-rule="evenodd"/>
  <path d="M8.95 19.7c.7.8 1.7 1.3 2.8 1.3 1.6 0 2.9-1.1 3.3-2.5l-6.1 1.2Z"/>
</svg>

    </div>

  <div class="flex flex-col p-4 bg-gray-50">
    <p class="text-gray-800 font-semibold text-xl">User Profile</p>
    <p class="text-gray-700 text-sm">{{ message }}</p>
  </div>

  <div class="p-4 flex items-center bg-gray-50 cursor-pointer rounded-r-lg">
    <svg @click.prevent="close" class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
</svg>

  </div>
  </div>
</template>

<script>
import { ref, watch, defineComponent } from 'vue';

export default defineComponent({
  props: {
    message: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const localVisible = ref(props.visible);

    const close = () => {
      localVisible.value = false;
    }

    watch(() => props.visible, (newVal) => {
      localVisible.value = newVal;
      if (newVal) {
        setTimeout(() => {
          localVisible.value = false;
        }, 5000);
      }
    });

    return {
      localVisible,
      close,
    };
  },
});
</script>

<style scoped>
.fixed {
  z-index: 9999; 
}
.transition-transform {
  transition: transform 0.5s ease-in-out; 
}
</style>
