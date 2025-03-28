<template>
  <div class="input-container">
    <label :for="id">{{ label }}</label>
    <div class="input-wrapper">
      <input :id="id" :type="type" :value="modelValue" @input="updateValue" />
      <img src="../assets/images/edit.svg" class="input-icon" alt="Edit Icon" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

// Props
defineProps<{
  modelValue: string;
  label: string;
  type: string;
  id: string;
}>();

// Emits
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

// Update input value
const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<style scoped>
.input-container {
  width: 100%;
}

label {
  display: block;
  text-align: left;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

input {
  border: 1.5px solid #757575;
  border-radius: 12px;
  width: 100%;
  color: #757575;
  font-size: 14px;
  padding: 12px 40px 12px 12px;
  outline: none;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #9747ff;
}

.input-icon {
  position: absolute;
  right: 10px;
  width: 16px;
  height: 16px;
  pointer-events: none;
}
</style>