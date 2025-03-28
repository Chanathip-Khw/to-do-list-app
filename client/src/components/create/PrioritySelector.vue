<template>
  <div class="priority-selector">
    <div style="text-align: left">Priority</div>
    <div class="priority-button-container">
      <button
        type="button"
        v-for="priority in priorities"
        :key="priority"
        :class="{ selected: selectedPriority === priority }"
        @click="handleSelectPriority(priority)"
        :aria-label="'Select ' + priority + ' priority'"
      >
        {{ priority }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, PropType } from "vue";

// Define props with types
const props = defineProps({
  priorities: {
    type: Array as PropType<string[]>,
    required: true,
  },
  selectedPriority: {
    type: String as PropType<string | null>,
    default: null,
  },
});

// Define emits
const emit = defineEmits<{
  (event: "update:selectedPriority", value: string): void;
}>();

// Method to handle the selection of priority
const handleSelectPriority = (priority: string) => {
  emit("update:selectedPriority", priority);
};
</script>

<style scoped>
.priority-selector {
  margin-top: 30px;
}

.priority-selector div {
  font-size: 14px;
  font-weight: 700;
}

.priority-button-container {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.priority-button-container button {
  background-color: rgba(151, 71, 255, 0.3);
  font-size: 10px;
  font-weight: 700;
  padding: 10px 30px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}

.priority-button-container button.selected {
  background-color: #9747ff;
  color: white;
  border: none;
}

.priority-button-container button:focus {
  outline: none;
  border: 2px solid #9747ff;
  box-shadow: 0 0 5px rgba(151, 71, 255, 0.5);
}
</style>
