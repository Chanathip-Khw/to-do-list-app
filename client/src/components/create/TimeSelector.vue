<template>
  <div class="time-selector">
    <label for="time">{{ label }}</label>
    <input id="time" type="time" v-model="selectedTime" @input="updateTime" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TimeSelector",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const selectedTime = ref(props.modelValue);

    const updateTime = (event: Event) => {
      selectedTime.value = (event.target as HTMLInputElement).value;
      emit("update:modelValue", selectedTime.value);
    };

    return {
      selectedTime,
      updateTime,
    };
  },
});
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
}

label {
  text-align: left;
}

input {
  border: 1px solid grey;
  border-radius: 8px;
  padding: 8px 15px;
  cursor: pointer;
  font-size: 10px;
  font-weight: 500;
  font-family: Inter, sans-serif;
}
</style>
