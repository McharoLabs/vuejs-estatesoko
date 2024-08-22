<template>
  <div class="flex bg-blue-100 rounded-xl p-1 border-2 border-blue-200">
    <div
      v-for="option in options"
      :key="option"
      @click="selectOption(option)"
      :class="[
        'px-4 py-2 cursor-pointer transition-colors duration-200 ease-in-out flex-1 text-center',
        active === option
          ? 'bg-blue-500 text-white rounded-lg'
          : 'hover:bg-gray-200 bg-transparent',
      ]"
    >
      {{ option }}
    </div>
  </div>
</template>

<script lang="js">
import { CATEGORY_ENUM } from "@/lib/enum";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "SegmentedControl",
  props: {
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const active = ref(props.modelValue);

    if (!props.modelValue) {
      active.value = CATEGORY_ENUM.SALE;
    }

    const selectOption = (option) => {
      active.value = option;
      emit("update:modelValue", option);
    };

    watch(
      () => props.modelValue,
      (newValue) => {
        active.value = newValue;
      }
    );

    return {
      active,
      selectOption,
    };
  },
});
</script>
