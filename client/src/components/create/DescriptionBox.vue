<template>
  <div class="description-box">
    <label for="description">Description</label>
    <textarea
      id="description"
      v-model="description"
      placeholder="Enter task description"
      @input="updateDescription"
      aria-label="Enter task description"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

// Define props with types
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

// Define emits
const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();

// Reactive state for description
const description = ref(props.modelValue);

// Update description value when changed
const updateDescription = (event: Event) => {
  const newDescription = (event.target as HTMLTextAreaElement).value;
  description.value = newDescription;
  emit("update:modelValue", newDescription);  // Emit the updated description to parent
};
</script>

<style scoped>
.description-box {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.description-box label {
  font-size: 14px;
  font-weight: 700;
  text-align: left;
}

textarea {
  font-family: Inter, sans-serif;
  border: 1px solid grey;
  border-radius: 8px;
  padding: 8px 15px;
  font-size: 12px;
  resize: vertical;
  min-height: 100px;
  outline: none;
}

textarea:focus {
  border-color: #9747ff;
}
</style>
