<template>
  <div class="input-container">
    <input
      v-bind="$attrs"
      :type="type"
      :value="modelValue"
      @input="updateValue"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup lang="ts">
import { useAttrs, defineProps, defineEmits } from 'vue';

// Define props using `defineProps`
const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
});

// Define emits using `defineEmits`
const emit = defineEmits(['update:modelValue']);

// Access fallthrough attributes
const attrs = useAttrs();

// Update value on input event
const updateValue = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  emit('update:modelValue', value);
};
</script>

<style scoped>
.input-container {
  width: 100%;
}

input {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid rgba(117, 117, 117, 0.3);
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  outline: none;
  background-color: rgba(255, 255, 255, 0.3);
}

input:focus {
  border-color: black;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.4);
}
</style>
