<template>
  <div class="category-selector">
    <label class="category-label">Category</label>
    <div class="category-button-container">
      <button
        type="button"
        v-for="category in categories"
        :key="category"
        :class="{ selected: selectedCategory === category }"
        @click="handleSelectCategory(category)"
        :aria-pressed="selectedCategory === category"
      >
        {{ category }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

// Define props
const props = defineProps<{
  categories: string[];
  selectedCategory?: string | null;
}>();

// Define emits
const emit = defineEmits<{
  (event: "update:selectedCategory", category: string): void;
}>();

// Function to handle category selection
const handleSelectCategory = (category: string) => {
  if (props.selectedCategory !== category) {
    emit("update:selectedCategory", category);
  }
};
</script>

<style scoped>
.category-selector {
  margin-top: 20px;
}

.category-label {
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  display: block;
}

.category-button-container {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 8px;
}

.category-button-container button {
  background-color: rgba(151, 71, 255, 0.3);
  font-size: 12px;
  font-weight: 700;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
}

.category-button-container button.selected {
  background-color: #9747ff;
  color: white;
}

.category-button-container button:hover {
  background-color: rgba(151, 71, 255, 0.5);
}
</style>
