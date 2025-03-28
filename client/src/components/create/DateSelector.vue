<template>
  <div class="date-selector">
    <label for="formatted-date">Date</label>

    <input
      id="formatted-date"
      type="text"
      :value="formattedDate"
      placeholder="Select a date"
      readonly
      @click="openDatePicker"
      aria-label="Select a date"
    />

    <input
      ref="dateInput"
      type="date"
      v-model="selectedDate"
      @input="updateDate"
      style="display: none"
      aria-hidden="true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits } from "vue";

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

// Reactive state for selected date
const selectedDate = ref(props.modelValue);

// Computed property to format date
const formattedDate = computed(() => {
  if (!selectedDate.value) return "";
  const date = new Date(selectedDate.value);
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    weekday: "long",
  }).format(date);
});

// Ref for the date input element
const dateInput = ref<HTMLInputElement | null>(null);

// Open the native date picker
const openDatePicker = () => {
  dateInput.value?.showPicker();
};

// Update the date value when changed
const updateDate = (event: Event) => {
  const newDate = (event.target as HTMLInputElement).value;
  selectedDate.value = newDate;
  emit("update:modelValue", newDate);  // Emit the updated date to parent
};
</script>

<style scoped>
.date-selector {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.date-selector label {
  font-size: 14px;
  font-weight: 700;
  text-align: left;
}

input {
  border: 1px solid grey;
  border-radius: 8px;
  padding: 8px 15px;
  cursor: pointer;
  font-size: 12px;
  font-family: Inter, sans-serif;
}

input[readonly] {
  background-color: #f9f9f9;
}
</style>
