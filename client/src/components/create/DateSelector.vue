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
    />

    <input
      ref="dateInput"
      type="date"
      v-model="selectedDate"
      @input="updateDate"
      style="display: none"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "DateSelector",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const selectedDate = ref(props.modelValue);
    const dateInput = ref<HTMLInputElement | null>(null);

    const formattedDate = computed(() => {
      if (!selectedDate.value) return "";
      const date = new Date(selectedDate.value);
      return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "long",
        weekday: "long",
      }).format(date);
    });

    const openDatePicker = () => {
      dateInput.value?.showPicker();
    };

    const updateDate = (event: Event) => {
      selectedDate.value = (event.target as HTMLInputElement).value;
      emit("update:modelValue", selectedDate.value);
    };

    return {
      selectedDate,
      formattedDate,
      updateDate,
      openDatePicker,
      dateInput,
    };
  },
});
</script>

<style scoped>
.date-selector {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.date-selector label {
  font-size: 14px;
  font-weight: 700;
}

label {
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
</style>
