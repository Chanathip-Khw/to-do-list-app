<template>
  <div class="priority-selector">
    <div style="text-align:left">Priority</div>
    <div class="priority-button-container">
      <button
        v-for="priority in priorities"
        :key="priority"
        :class="{ selected: selectedPriority === priority }"
        @click="handleSelectPriority(priority)"
      >
        {{ priority }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PrioritySelector",
  props: {
    priorities: {
      type: Array,
      required: true,
    },
    selectedPriority: {
      type: String,
      default: null,
    },
  },
  emits: ["update:selectedPriority"],
  setup(props, { emit }) {
    const handleSelectPriority = (priority: string) => {
      emit("update:selectedPriority", priority);
    };

    return {
      handleSelectPriority,
    };
  },
});
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
}

.priority-button-container button.selected {
  background-color: #9747ff;
  color: white;
  border: none;
}
</style>
