<template>
  <div class="task-name">
    <label for="task-name">Task Name</label>
    <input
      id="task-name"
      type="text"
      placeholder="Enter task name"
      v-model="taskName"
      @input="updateTaskName"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TaskName",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const updateTaskName = (event: Event) => {
      const input = event.target as HTMLInputElement;
      emit("update:modelValue", input.value);
    };

    return {
      updateTaskName,
    };
  },
});
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
  border: 1px solid grey;
  border-radius: 8px;
  padding: 8px 15px;
  font-size: 12px;
  font-weight: 500;
}
</style>
