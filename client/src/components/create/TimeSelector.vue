<template>
  <div class="time-selector">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      type="time"
      :value="modelValue"
      @input="(event) => emit('update:modelValue', event.target.value)"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

// Define props
const props = defineProps<{
  modelValue: string;
  label: string;
  id: string;
}>();

// Define emits
const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();
</script>

<style scoped>
.time-selector {
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.time-selector label {
  font-size: 14px;
  font-weight: 700;
  text-align: left;
}

input {
  border: 1px solid grey;
  border-radius: 8px;
  padding: 8px 15px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: Inter, sans-serif;
  transition: border-color 0.2s ease-in-out;
}

input:focus {
  border-color: #9747ff;
  outline: none;
}
</style>