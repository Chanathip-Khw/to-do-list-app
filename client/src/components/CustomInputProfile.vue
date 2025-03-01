<template>
  <div class="input-container">
    <label :for="id">{{ label }}</label>
    <div class="input-wrapper">
      <input :id="id" :type="type" :value="modelValue" @input="updateValue" />
      <img src="../assets/images/edit.svg" class="input-icon" alt="icon" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

const { modelValue, label, type, id } = defineProps<{
  modelValue: string;
  label: string;
  type: string;
  id: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

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
  font-size: 12px;
  padding: 20px 30px;
}

.input-icon {
  position: absolute;
  right: 10px;
  width: 16px;
  height: 16px;
  pointer-events: none;
}
</style>
