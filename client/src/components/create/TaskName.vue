<template>
  <div class="task-name">
    <label for="task-name">Task Name</label>
    <input
      id="task-name"
      type="text"
      placeholder="Enter task name"
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
}>();

// Define emits
const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();
</script>

<style scoped>
.task-name {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.task-name label {
  font-size: 16px;
  font-weight: 700;
  text-align: left;
}

input {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px 15px;
  font-size: 14px;
  font-weight: 500;
  transition: border-color 0.2s ease-in-out;
}

input:focus {
  border-color: #9747ff;
  outline: none;
}
</style>